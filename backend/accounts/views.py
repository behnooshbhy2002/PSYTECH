from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from .models import User
from .forms import PsychologistRegistrationForm, UserLoginForm, PatientRegistrationForm
from rest_framework.decorators import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import PatientRegisterSerializer, PsychologistRegistrationSerializer, UserLoginSerializer
from rest_framework.permissions import IsAuthenticated


class HomeView(View):  # todo: link react to rest
    template_name = 'accounts/home.html'

    def get(self, request):
        return render(request, self.template_name)


class PatientRegisterView(APIView):
    def post(self, request):
        ser_data = PatientRegisterSerializer(data=request.POST)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            return Response(ser_data.data)
        return Response(ser_data.errors)


class PsychologistRegisterView(APIView):  # todo: first admin must approve psychologist then add it to DB
    def post(self, request):
        ser_data = PsychologistRegistrationSerializer(data=request.POST)
        if ser_data.is_valid():
            ser_data.create(ser_data.validated_data)
            return Response(ser_data.data)
        return Response(ser_data.errors)


# class PsychologistRegisterView(View):
#     form = PsychologistRegistrationForm
#     template_name = 'accounts/signup2.html'
#
#     def get(self, request):
#         form = self.form
#         return render(request, self.template_name, {'form': form})
#
#     def post(self, request):
#         form = self.form(request.POST)
#         if form.is_valid():
#             cd = form.cleaned_data
#             User.objects.create_user(cd['email'], cd['password'], phone_number=cd['phone_number'],
#                                      full_name=cd['full_name'], gender=cd['gender'], medical_number=['medical_number'],
#                                      specialist=['specialist'])
#
#             user = authenticate(request, email=cd['email'], password=cd['password'])
#             if user is not None:
#                 login(request, user)
#
#             messages.success(request, 'ثبت نام با موفقیت', 'success')
#             return redirect('accounts:login_user')
#         return render(request, self.template_name, {'form': form})


class UserLoginView(APIView):
    # use tjis for login:
    # https://www.guguweb.com/2022/01/23/django-rest-framework-authentication-the-easy-way/
    # https://stackoverflow.com/questions/73697673/issue-with-login-endpont-for-django-rest-framework-the-registration-was-success
    # https://studygyaan.com/django/django-rest-framework-tutorial-register-login-logout

    # form_class = UserLoginForm
    # template_name = 'accounts/login.html'
    #
    # def setup(self, request, *args, **kwargs):
    #     self.next = request.GET.get('next')
    #     return super().setup(request, *args, **kwargs)

    # def dispatch(self, request, *args, **kwargs):
    #     if request.user.is_authenticated:
    #         return redirect('accounts/login.html')
    #     else:
    #         return super().dispatch(request, *args, **kwargs)

    # def get(self, request):
    #     form = self.form_class
    #     return render(request, self.template_name, {'form': form})
    #
    # def post(self, request):
    #     form = self.form_class(request.POST)
    #     if form.is_valid():
    #         cd = form.cleaned_data
    #         user = authenticate(request, email=cd['email'], password=cd['password'])
    #         if user is not None:
    #             login(request, user)
    #             # if user.is_staff():
    #             #     pass
    #             # return redirect(to=reverse('admin:index'))
    #             # else:
    #             messages.success(request, f' {user.full_name} با موفقیت وارد شد ', 'info')
    #             return redirect('accounts:home')
    #         messages.error(request, 'ایمیل یا پسورد اشتباه است.', 'warning')
    #     return render(request, self.template_name, {'form': form})

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


# class PatientRegisterView(View):
#     form = PatientRegistrationForm
#     template_name = 'accounts/signup2.html'
#
#     def get(self, request):
#         form = self.form
#         return render(request, self.template_name, {'form': form})
#
#     def post(self, request):
#         form = self.form(request.POST)
#         if form.is_valid():
#             cd = form.cleaned_data
#             User.objects.create_user(cd['email'], cd['password'], phone_number=cd['phone_number'],
#                                      full_name=cd['full_name'], gender=cd['gender'])
#             user = authenticate(request, email=cd['email'], password=cd['password'])
#             if user is not None:
#                 login(request, user)
#
#             messages.success(request, 'ثبت نام با موفقیت', 'success')
#             return redirect('accounts:user_login')
#         return render(request, self.template_name, {'form': form})


# class UserLogoutView(LoginRequiredMixin, View):
#     login_url = '/accounts/login/'
#
#     def get(self, request):
#         logout(request)
#         messages.success(request, 'خروج با موفقیت', 'success')
#         return redirect('accounts:home')


class UserLogoutView(APIView):
    permission_classes = [IsAuthenticated, ]

    def get(self, request):
        request.user.auth_token.delete()
        logout(request)
        return Response('User Logged out successfully')
