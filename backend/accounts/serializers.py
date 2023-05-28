from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from accounts.models import User, Psychologist, Disease
from django.contrib.auth import authenticate


def clean_email(email):
    user = User.objects.filter(email=email).exists()
    if user:
        raise ValidationError('email already exists')
    return email


def clean_password(data):
    if data['password'] != data['confirm_password']:
        raise ValidationError('confirm password does not match password')
    return data


class PatientRegisterSerializer(serializers.ModelSerializer):
    # confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('full_name', 'phone_number', 'email', 'gender', 'password',)
        extra_keywords = {
            'password': {'write_only': True},
            'email': {'validators': (clean_email,)},
        }

    def create(self, validate_data):
        # del validate_data['confirm_password']
        return User.objects.create_user(**validate_data)


class PsychologistRegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Psychologist
        fields = ('full_name', 'phone_number', 'email', 'gender', 'password', 'confirm_password',
                  'medical_number')
        extra_keywords = {
            'password': {'write_only': True, 'validators': (clean_password,)},
            'email': {'validators': (clean_email,)}
        }

    def create(self, validate_data):
        del validate_data['confirm_password']
        return Psychologist.objects.create_user(**validate_data)


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True, help_text='آدرس ایمیل')
    password = serializers.CharField(required=True, help_text='رمز ورود')


class VerifyAccountSerializer(serializers.Serializer):
    email = serializers.EmailField()
    otp = serializers.CharField()


class PsychologistListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = ("full_name", "medical_number", "specialist", "image", "rate", "experience")


class DiseaseListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = ("title",)


class ActivePsychologistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = ("full_name", "medical_number", "id",)


class IsActivePsychologist(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Psychologist.objects.all())

    class Meta:
        model = Psychologist
        fields = ("is_active", "pk")
