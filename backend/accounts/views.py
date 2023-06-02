from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User, Psychologist, Disease
from .models import User, Psychologist
from .forms import PsychologistRegistrationForm, UserLoginForm, PatientRegistrationForm
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PatientRegisterSerializer, PsychologistRegistrationSerializer, UserLoginSerializer, \
    ActivePsychologistSerializer, DiseaseListSerializer, IsActivePsychologist, TopPsychologistsSerializer
from .serializers import PatientRegisterSerializer, PsychologistRegistrationSerializer, UserLoginSerializer, \
    VerifyAccountSerializer, EmailSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from .emails import send_otp_via_email


class HomeView(APIView):
    permission_classes = [AllowAny, ]

    def get(self, request):
        return Response({'msg': 'home page bitch'})


class PatientRegisterView(APIView):
    def post(self, request):
        ser_data = PatientRegisterSerializer(data=request.data)
        if ser_data.is_valid():
            user = ser_data.create(ser_data.validated_data)
            send_otp_via_email(ser_data.data['email'])
            user.is_active = True
            user.save()
            return Response(ser_data.data['email'], status=status.HTTP_200_OK)
        return Response(ser_data.errors)


class PsychologistRegisterView(APIView):

    def post(self, request):
        ser_data = PsychologistRegistrationSerializer(data=request.data)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            send_otp_via_email(ser_data.data['email'])
            return Response(ser_data.data['email'], status=status.HTTP_200_OK)
        return Response(ser_data.errors)


class ActivePsychologist(APIView):
    def get(self, request):
        inactive_psychologists = Psychologist.objects.filter(is_active=False)
        psychologists_serializer = ActivePsychologistSerializer(inactive_psychologists, many=True)
        return Response(psychologists_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = IsActivePsychologist(data=request.data)
        if serializer.is_valid():
            is_active = serializer.data.get('is_active')
            pk = serializer.data.get('pk')
            psychologist = Psychologist.objects.get(pk=pk)
            print(is_active, pk)
            psychologist.is_active = True
            psychologist.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginView(APIView):
    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            email = serializer.data.get('email')
            password = serializer.data.get('password')
            user = authenticate(email=email, password=password)

            if Psychologist.objects.filter(email=email).exists():
                role = 'psychologist'
            else:
                role = 'patient'

            # todo: return access token

            if user:
                token = RefreshToken.for_user(user)
                data = {'tokens': {'refresh': str(token), 'access': str(token.access_token)}, 'role': role,
                        'id': user.id}
                login(request, user)
                return Response(data, status=status.HTTP_200_OK)
            else:
                return Response(
                    {
                        "errors": {
                            "non_field_errors": ["Email or Password is not valid"]
                        }
                    },
                    status=status.HTTP_404_NOT_FOUND
                )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated, ]

    # def get(self, request):
    #     request.user.auth_token.delete()
    #     logout(request)
    #     return Response('User Logged out successfully')

    def post(self, request):
        try:
            refresh_token = request.data['refresh']
            token = RefreshToken(refresh_token)
            token.blacklist()
            return Response(status=status.HTTP_205_RESET_CONTENT)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class VerifyOTP(APIView):
    def post(self, request):
        try:
            ser_data = VerifyAccountSerializer(data=request.data)

            if ser_data.is_valid():
                email = ser_data.data['email']
                otp = ser_data.data['otp']

                user = User.objects.get(email=email)
                if not user:
                    user = Psychologist.objects.get(email=email)
                    if not user:
                        return Response({
                            'status': 400,
                            'message': 'user with this email does not exist',
                            'data': 'invalid email'
                        })

                if user.otp != otp:
                    return Response({
                        'status': 400,
                        'message': 'otp does not match',
                        'data': 'wrong otp'
                    })

                user.is_verified = True
                user.save()

                return Response({
                    'status': 200,
                    'message': 'account verified',
                    'data': 'valid otp'
                })
        except Exception as e:
            print(e)


class PsychologistListView(APIView):
    throttle_scope = 'psychologists'

    def get(self, request):

        query_params = request.query_params

        print(query_params)

        # Extract individual query parameters
        disease = query_params.get('disease')
        name = query_params.get('keyword')
        female = query_params.get('justFemale')
        male = query_params.get('justMale')

        print('disease', disease)
        print('name', name)
        print('female', female)
        print('male', male)

        psychologists = Psychologist.objects.filter(is_active=True)

        if disease:
            psychologists = psychologists.filter(diseases__id=disease)

        if name:
            psychologists = psychologists.filter(full_name__icontains=name)

        if not (male and female):
            if male:
                psychologists = psychologists.filter(gender='M')

            if female:
                psychologists = psychologists.filter(gender='F')

        psychologists_serializer = ActivePsychologistSerializer(psychologists, many=True)
        return Response(psychologists_serializer.data, status=status.HTTP_200_OK)


class DiseaseListView(APIView):

    def get(self, request):
        diseases = Disease.objects.all()
        diseases_serializer = DiseaseListSerializer(diseases, many=True)
        return Response(diseases_serializer.data, status=status.HTTP_200_OK)


class ResendOTP(APIView):
    def post(self, request):
        try:
            ser_data = EmailSerializer(data=request.data)
            if ser_data.is_valid():
                email = ser_data.data['email']

                user = User.objects.get(email=email)
                if not user:
                    user = Psychologist.objects.get(email=email)

                if user.is_verified:
                    return Response({'msg': 'User is already verified'}, status=status.HTTP_400_BAD_REQUEST)

                send_otp_via_email(email)
                return Response({'msg': 'otp send again'}, status=status.HTTP_200_OK)

        except Exception as e:
            print(e)


class TopPsychologistView(APIView):
    def get(self, request):
        psychologists = Psychologist.objects.all()[:6]
        serializer_psy = TopPsychologistsSerializer(psychologists, many=True)
        return Response(serializer_psy.data, status=status.HTTP_200_OK)
