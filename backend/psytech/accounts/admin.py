from django.contrib import admin
from .models import User, Psychologist


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ("email", "full_name", "phone_number", "gender")
    list_filter = ("last_login",)
    search_fields = ("email", "full_name")
    ordering = ("full_name",)


@admin.register(Psychologist)
class PsychologistAdmin(admin.ModelAdmin):
    list_display = ("medical_number", "full_name", "phone_number", "gender")
    list_filter = ("last_login",)
    search_fields = ("medical_number", "email", "full_name")
    ordering = ("full_name",)