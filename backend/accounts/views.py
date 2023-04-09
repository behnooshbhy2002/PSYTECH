from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.mixins import LoginRequiredMixin
from django.views import View
from django.shortcuts import render, redirect
from pyexpat.errors import messages
from django.urls import reverse, reverse_lazy

from backend.accounts.forms import UserRegistrationForm, UserLoginForm

class HomeView(View):
    template_name = 'product/index.html'

    def get(self, request, category_slug=None):

        return render(request, self.template_name, {})

    def post(self, request):
        return render(request, self.template_name)
class UserRegisterView(View):
    template_name = 'accounts/register.html'

    def get(self, request):
        form = UserRegistrationForm()
        return render(request, self.template_name, {'form': form})




class UserLoginView(View):
    form_class = UserLoginForm
    template_name = 'accounts/login.html'

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            return redirect('product/home.html')
        else:
            return super().dispatch(request, *args, **kwargs)

    def get(self, request):
        form = self.form_class
        return render(request, self.template_name, {'form': form})

    def post(self, request):
        form = self.form_class(request.POST)
        if form.is_valid():
            cd = form.cleaned_data
            user = authenticate(request, phone_number=cd['phone'], password=cd['password'])
            if user is not None:
                login(request, user)
                if user.is_staff():
                    return redirect(to=reverse('admin:index'))
                else:
                    messages.success(request, 'you logged in successfully', 'info')
                    return redirect('product:home')
            messages.error(request, 'phone or password is wrong', 'warning')
        return render(request, self.template_name, {'form': form})


class UserLogoutView(LoginRequiredMixin, View):
    login_url = '/accounts/login/'

    def get(self, request):
        logout(request)
        messages.success(request, 'you logged out successfully', 'success')
        return redirect('product:home')
