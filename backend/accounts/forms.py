from .models import User
from django import forms
from django.core.exceptions import ValidationError

class UserRegistrationForm(forms.Form):
    full_name = forms.CharField(widget=forms.TextInput(attrs={'class:': 'form-control'}))
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class:': 'form-control'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    phone = forms.CharField(max_length=11)

    # password2 = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    def clean_email(self):
        email = self.cleaned_data['email']
        user = User.objects.filter(email=email).exists()
        if user:
            raise ValidationError('this email is already exist')
        return email

    # def clean_phone(self):
    #     phone = self.cleaned_data['phone']
    #     user = User.objects.filter(phone_number=phone).exists()
    #     if user:
    #         raise ValidationError('this phone number is already exist')
    #     OtpCode.objects.filter(phone_number=phone).delete()
    #     return phone

    # def clean(self):
    #     cd = super().clean()
    #     p1 = cd.get('password1')
    #     p2 = cd.get('password2')
    #     if p1 and p2 and p1 != p2:
    #         raise ValidationError('password must match')


class UserLoginForm(forms.Form):
    email = forms.CharField(widget=forms.TextInput(attrs={'class:': 'form-control'}))
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}))