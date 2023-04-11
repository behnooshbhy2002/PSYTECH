from django.core.validators import RegexValidator

from .models import User
from django import forms
from django.core.exceptions import ValidationError


class PsychologistRegistrationForm(forms.Form):
    full_name = forms.CharField(help_text='نام و نام خانوادگی')
    phone_number = forms.CharField(max_length=11, validators=[RegexValidator(r'^\+?1?\d{9,10}$')], help_text='شماره تلفن همراه')
    email = forms.EmailField(help_text='ایمیل')
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}), help_text='رمز')
    confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}),
                                       help_text='تکرار رمز')
    gender = forms.ChoiceField(choices=User.GENDERS, widget=forms.RadioSelect, help_text='جنسیت')

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


class PatientRegistrationForm(forms.Form):
    full_name = forms.CharField(help_text='نام و نام خانوادگی')
    # phone = forms.CharField(help_text='شماره تلفن همراه')
    phone_number = forms.CharField(max_length=11, validators=[RegexValidator(r'^\+?1?\d{9,10}$')], help_text='شماره تلفن همراه')
    email = forms.EmailField(help_text='ایمیل')

    # gender = forms.ChoiceField(help_text='جنسیت')
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}), help_text='رمز')
    confirm_password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}),
                                       help_text='تکرار رمز')
    gender = forms.ChoiceField(choices=User.GENDERS, widget=forms.Select(attrs={'class': 'bootstrap-select'}), help_text='جنسیت')

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

    # def clean_gender(self):
    #     return [self.cleaned_data['gender']]


class UserLoginForm(forms.Form):
    email = forms.CharField(help_text='آدرس ایمیل')
    password = forms.CharField(widget=forms.PasswordInput(attrs={'class': 'form-control'}), help_text='رمز ورود')
