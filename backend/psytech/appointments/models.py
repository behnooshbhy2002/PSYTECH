from django.db import models
from accounts.models import User


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
    appointment = models.ForeignKey(Appointment, on_delete=models.CASCADE, related_name='appointments')
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patients')
    psychologist = models.ForeignKey(User, on_delete=models.CASCADE, related_name='psychologists')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.date} - {self.psychologist} - {self.patient}'


class Bill(models.Model):
    booking = models.ForeignKey(Booking, on_delete=models.CASCADE, related_name='booking')
    amount = models.FloatField()
    status = models.BooleanField()
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'{self.date} - {self.booking}'
