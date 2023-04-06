from django.contrib import admin
from .models import Schedule, Appointment, Booking, Bill


@admin.register(Schedule)
class ScheduleAdmin(admin.ModelAdmin):
    list_display = ("date", "start", "end")
    search_fields = ("date", "start")
    ordering = ("date",)


@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ("start", "end", "reserved")
    search_fields = ("start", "reserved")
    ordering = ("start",)


@admin.register(Booking)
class BookingAdmin(admin.ModelAdmin):
    list_display = ("date", "psychologist", "patient")

    # def psychologist_name(self, obj):
    #     return obj.psychologist
    #
    # def patient_name(self, obj):
    #     return obj.patient
    #
    # psychologist_name.short_description = 'psychologist'
    # patient_name.short_description = 'patient'

    search_fields = ("date", "appointment")
    ordering = ("date",)


@admin.register(Bill)
class BillAdmin(admin.ModelAdmin):
    list_display = ("date", "amount", "status")
    search_fields = ("date", "booking")
    ordering = ("status",)
