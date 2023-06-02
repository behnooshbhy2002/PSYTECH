from django.db import models
from accounts.models import Patient, Psychologist


class Request(models.Model):
    sender = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='sender_request')
    receiver = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='receiver_request')
    date = models.DateField(auto_now_add=True)
    accept_status = models.BooleanField(null=True, blank=True)
    # check = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.sender} to {self.receiver}'


class MedicalRecord(models.Model):
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    doctor = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='doctor')
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patients')

    def __str__(self):
        return f'doctor:{self.doctor}-patient:{self.patient} content:{self.content}'
