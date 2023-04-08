from django.db import models
from accounts.models import User, Psychologist


class Schedule(models.Model):
    date = models.DateField(auto_now_add=True)
    start = models.TimeField(blank=True)
    end = models.TimeField(blank=True)

    class Meta:
        ordering = ('date',)

    def __str__(self):
        return f'{self.date}'


class Appointment(models.Model):
    start = models.TimeField()
    end = models.TimeField()
    reserved = models.BooleanField()
    display = models.BooleanField()

    def __str__(self):
        return f'{self.start} - {self.end}'


class Booking(models.Model):
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE, related_name='appointment_booking')
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient_booking')
    psychologist = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='psychologist_booking')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.date} - {self.psychologist} - {self.patient}'


class Bill(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name='booking_bill')
    amount = models.FloatField()
    status = models.BooleanField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.date} - {self.booking}'
