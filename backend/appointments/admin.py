from django.contrib import admin
from .models import Request, MedicalRecord

@admin.register(Request)
class RequestAdmin(admin.ModelAdmin):
    list_display = ("sender", "receiver", "date", "accept_status")
    search_fields = ("date", "accept_status")
    ordering = ("date", )


@admin.register(MedicalRecord)
class MedicalRecordAdmin(admin.ModelAdmin):
    list_display = ("date", "doctor", "patient")
    search_fields = ("date", "accept_status")
    ordering = ("date", )