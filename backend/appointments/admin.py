from django.contrib import admin
from .models import Request, Session, MedicalRecorder, Prescription, PrescriptionPage


@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ("sender", "receiver", "date", "accept_status")
    search_fields = ("date", "accept_status")
    ordering = ("date",)


@admin.register(Session)
class SessionAdmin(admin.ModelAdmin):
    list_display = ("title", "date", "medical_recorde", "content")
    search_fields = ("date",)
    ordering = ("date",)


@admin.register(MedicalRecorder)
class MedicalRecorderAdmin(admin.ModelAdmin):
    list_display = ("date", "patient", "doctor")
    search_fields = ("date",)
    ordering = ("date",)


@admin.register(Prescription)
class PrescriptionAdmin(admin.ModelAdmin):
    list_display = ("content",)
    search_fields = ("date",)
    ordering = ("date",)


@admin.register(PrescriptionPage)
class PrescriptionPageAdmin(admin.ModelAdmin):
    list_display = ("doctor", "patient")
