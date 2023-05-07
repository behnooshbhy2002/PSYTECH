from rest_framework import serializers
from rest_framework.exceptions import ValidationError
from accounts.models import User, Psychologist

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
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = User
        fields = ('full_name', 'phone_number', 'email', 'gender', 'password', 'confirm_password')
        extra_keywords = {
            'password': {'write_only': True},
            'email': {'validators': (clean_email,)}
        }

    def create(self, validate_data):
        del validate_data['confirm_password']
        return User.objects.create_user(**validate_data)

    # full_name = serializers.CharField(required=True, help_text='نام و نام خانوادگی')
    # phone_number = serializers.CharField(max_length=11, validators=[RegexValidator(r'^\+?1?\d{9,10}$')],
    #                                      help_text='شماره تلفن همراه')
    # email = serializers.EmailField(required=True, help_text='ایمیل', validators=[clean_email])
    #
    # password = serializers.CharField(required=True, help_text='رمز', validators=[clean_password])
    # confirm_password = serializers.CharField(required=True, help_text='تکرار رمز')

    # gender = serializers.ChoiceField(required=True,choices=User.GENDERS),
    #                            help_text='جنسیت')


class PsychologistRegistrationSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Psychologist
        fields = ('full_name', 'phone_number', 'email', 'gender', 'password', 'specialist', 'confirm_password')
        extra_keywords = {
            'password': {'write_only': True, 'validators': (clean_password,)},
            'email': {'validators': (clean_email,)}
        }

    def create(self, validate_data):
        del validate_data['confirm_password']
        return User.objects.create_user(**validate_data)

    # full_name = serializers.CharField(required=True, help_text='نام و نام خانوادگی')
    # phone_number = serializers.CharField(max_length=11, validators=[RegexValidator(r'^\+?1?\d{9,10}$')],
    #                                      help_text='شماره تلفن همراه')
    # email = serializers.EmailField(required=True, help_text='ایمیل')
    # password = serializers.CharField(required=True, help_text='رمز')
    # confirm_password = serializers.CharField(required=True, help_text='تکرار رمز')
    # specialist = serializers.CharField(help_text='تخصص')

    # gender = forms.ChoiceField(choices=User.GENDERS, widget=forms.RadioSelect, help_text='جنسیت')


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField(required=True, help_text='آدرس ایمیل')
    password = serializers.CharField(required=True, help_text='رمز ورود')
