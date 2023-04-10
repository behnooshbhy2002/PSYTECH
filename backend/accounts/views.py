from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, redirect
from django.contrib import messages
from django.urls import reverse, reverse_lazy
from .models import User
from .forms import PsychologistRegistrationForm, UserLoginForm


class HomeView(View):
    template_name = 'accounts/home.html'

    def get(self, request):
        return render(request, self.template_name)


class PsychologistRegisterView(View):
    form = PsychologistRegistrationForm
    template_name = 'accounts/signup.html'

    def get(self, request):
        form = self.form
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            User.objects.create_user(cd['email'], cd['password'], phone_number=cd['phone_number'],
                                     full_name=cd['full_name'], gender=cd['gender'], medical_number=['medical_number'],
                                     specialist=['specialist'])

            user = authenticate(request, email=cd['email'], password=cd['password'])
            if user is not None:
                login(request, user)

            messages.success(request, 'ثبت نام با موفقیت', 'success')
            return redirect('accounts:login_user')
        return render(request, self.template_name, {'form': form})


class UserLoginView(View):
    form_class = UserLoginForm
    template_name = 'accounts/login.html'

    def setup(self, request, *args, **kwargs):
        self.next = request.GET.get('next')
        return super().setup(request, *args, **kwargs)

    # def dispatch(self, request, *args, **kwargs):
    #     if request.user.is_authenticated:
    #         return redirect('accounts/login.html')
    #     else:
    #         return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        form = self.form_class
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, email=cd['email'], password=cd['password'])
            if user is not None:
                login(request, user)
                # if user.is_staff():
                #     pass
                # return redirect(to=reverse('admin:index'))
                # else:
                messages.success(request, 'ورود با موفقیت', 'info')
                return redirect('accounts:home')
            messages.error(request, 'ایمیل یا پسورد اشتباه است.', 'warning')
        return render(request, self.template_name, {'form': form})


class UserLogoutView(LoginRequiredMixin, View):
    login_url = '/accounts/login/'

    def get(self, request):
        logout(request)
        messages.success(request, 'خروج با موفقیت', 'success')
        return redirect('accounts:home')