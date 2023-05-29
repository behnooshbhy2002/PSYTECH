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
    ActivePsychologistSerializer, DiseaseListSerializer, IsActivePsychologist
from .serializers import PatientRegisterSerializer, PsychologistRegistrationSerializer, UserLoginSerializer, \
    VerifyAccountSerializer
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
            return Response(ser_data.data, status=status.HTTP_200_OK)
        return Response(ser_data.errors)


class PsychologistRegisterView(APIView):

    def post(self, request):
        print(request.data)
        ser_data = PsychologistRegistrationSerializer(data=request.data)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            send_otp_via_email(ser_data.data['email'])
            print(ser_data.data['email'], ser_data.data['medical_number'])
            return Response({"successfully"}, status=status.HTTP_200_OK)
        print(ser_data.errors)
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

            if user:
                login(request, user)
                return Response({"msg": "Login Successful"}, status=status.HTTP_200_OK)
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

    def get(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response('User Logged out successfully')


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
                            'message': 'something went wrong',
                            'data': 'invalid email'
                        })

                if user.otp != otp:
                    return Response({
                        'status': 400,
                        'message': 'something went wrong',
                        'data': 'wrong otp'
                    })

                user.is_verified = True
                user.save()

                return Response({
                    'status': 400,
                    'message': 'account verified',
                    'data': 'valid otp'
                })
        except Exception as e:
            print(e)


class PsychologistListView(APIView):
    throttle_scope = 'psychologists'

    def get(self, request):
        query = request.query_params.get('disease')
        print(query)
        if not query:
            # query = ''
            psychologists = Psychologist.objects.filter(is_active=True)
        else:
            psychologists = Psychologist.objects.filter(is_active=True, diseases__id=query)
        psychologists_serializer = ActivePsychologistSerializer(psychologists, many=True)
        return Response(psychologists_serializer.data, status=status.HTTP_200_OK)


class PsychologistSearchView(APIView):  # todo: check screen shot of youtube

    def get(self, request):
        query = request.query_params.get('keyword')
        if not query:
            query = ''
        psychologists = Psychologist.objects.filter(full_name__icontains=query)
        psychologists_serializer = ActivePsychologistSerializer(psychologists, many=True)
        return Response(psychologists_serializer.data, status=status.HTTP_200_OK)


class DiseaseListView(APIView):

    def get(self, request):
        diseases = Disease.objects.all()
        diseases_serializer = DiseaseListSerializer(diseases, many=True)
        return Response(diseases_serializer.data, status=status.HTTP_200_OK)


class PsychologistsListDisease(APIView):
    def post(self, dis_id):
        disease = Psychologist.objects.filter(publications__id=1)
        data = Psychologist.objects.filter(disease=disease)
        diseases_serializer = DiseaseListSerializer(data, many=True)
        return Response(diseases_serializer, status=status.HTTP_200_OK)


class PsychologistFilterView(APIView):

    def get(self, request):
        query = request.query_params.get('searchParams')
        print(query)
        if not query:
            query = ''
        psychologists = Psychologist.objects.filter(diseases__id=query, is_active=True)
        psychologists_serializer = ActivePsychologistSerializer(psychologists, many=True)
        return Response(psychologists_serializer.data, status=status.HTTP_200_OK)
