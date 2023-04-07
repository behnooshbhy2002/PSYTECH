from django.db import models
from django.core.validators import RegexValidator
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from .managers import UserManager
from .validators import MinAgeValidator


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(max_length=255, unique=True)

    full_name = models.CharField(max_length=100)
    phone_number = models.CharField(validators=[RegexValidator(r'^\+?1?\d{9,10}$')], max_length=11, unique=True)
    image = models.ImageField(upload_to='profile_pic', default='user_default_avatar.png')

    GENDERS = (
        ('F', 'Female'),
        ('M', 'Male'),
    )
    gender = models.CharField(max_length=1, choices=GENDERS)
    age = models.DateField(validators=[MinAgeValidator(13)], blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


class Psychologist(User):
    medical_number = models.CharField(max_length=7)
    specialist = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.full_name} - {self.medical_number}'

