from .models import User
from django import forms
from django.core.exceptions import ValidationError


class UserRegistrationForm(forms.Form):
    full_name = forms.CharField(widget=forms.TextInput(attrs={'class:': 'form-control'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class:': 'form-control'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    phone = forms.CharField(max_length=11)
    confirm_password = forms.CharField(widget=forms.PasswordInput)

    def clean_email(self):
        email = self.cleaned_data['email']
        user = User.objects.filter(email=email).exists()
        if user:
            raise ValidationError('email already exists')
        return email

    def clean_phone(self):
        phone = self.cleaned_data.get('phone_number')
        user = User.objects.filter(phone_number=phone).exists()
        if user:
            raise ValidationError('Phone number already exists')
        return phone

    def clean_confirm_password(self):
        password = self.cleaned_data.get('password')
        confirm_password = self.cleaned_data['confirm_password']
        if password != confirm_password and password:
            raise ValidationError('confirm password does not match password')
        return confirm_password


class UserLoginForm(forms.Form):
    email = forms.CharField()
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
