from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from rest_framework_simplejwt.tokens import RefreshToken

from .models import User
from .forms import PsychologistRegistrationForm, UserLoginForm, PatientRegistrationForm
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PatientRegisterSerializer, PsychologistRegistrationSerializer, UserLoginSerializer, VerifyAccountSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.core.mail import EmailMessage
from .emails import send_otp_via_email


def email_sender(data):
    try:
        email = EmailMessage(
            subject=data['subject'],
            body=data['body'],
            from_email=data['mehrdadsad.7@gmail.com'],
            to=[data['to']]
        )
        email.send()
        return True
    except:
        return False


class HomeView(APIView):  # todo: link react to rest
    permission_classes = [AllowAny, ]

    def get(self, request):
        return Response({'msg': 'home page bitch'})


class PatientRegisterView(APIView):
    def post(self, request):
        ser_data = PatientRegisterSerializer(data=request.POST)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            send_otp_via_email(ser_data.data['email'])
            return Response(ser_data.data)
        return Response(ser_data.errors)


class PsychologistRegisterView(APIView):  # todo: first admin must approve psychologist then add it to DB
    def post(self, request):
        ser_data = PsychologistRegistrationSerializer(data=request.POST)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            return Response(ser_data.data)
        return Response(ser_data.errors)


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
