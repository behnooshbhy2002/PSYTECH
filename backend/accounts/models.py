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
    is_verified = models.BooleanField(default=False)
    otp = models.CharField(max_length=6, blank=True, null=True)

    GENDERS = (
        ('F', 'Female'),
        ('M', 'Male'),
    )
    gender = models.CharField(max_length=1, choices=GENDERS)
    age = models.DateField(validators=[MinAgeValidator(13)], blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)

    is_active = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    def __str__(self):
        return self.email


class Patient(User):
    def __str__(self):
        return f'full_name: {self.full_name},email:{self.email}'


class Disease(models.Model):
    title = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = 'Disease'

    def __str__(self):
        return self.title


class Psychologist(User):  # todo: add address for psychologist
    medical_number = models.CharField(max_length=7)
    specialist = models.CharField(max_length=50, null=True, blank=True)
    rate = models.FloatField(default=0.0)
    rate_counter = models.IntegerField(default=0)
    diseases = models.ManyToManyField(Disease)
    address = models.CharField(max_length=100, blank=True, null=True)
    experience = models.PositiveSmallIntegerField(default=0, blank=True, null=True)
    patients = models.ManyToManyField(Patient, related_name='psychologist_patient')

    def count_rate(self, value):
        rate_count = self.rate_counter + 1
        rate_value = self.rate * self.rate_counter + value
        self.rate = rate_value / rate_count
        # self.rate_value = rate_value
        self.rate_counter = rate_count
        self.save()

    def __str__(self):
        return f'{self.full_name} - {self.medical_number}'
