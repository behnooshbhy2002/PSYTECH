from django.db import models
from accounts.models import Patient, Psychologist


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class Request(models.Model):
    sender = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='sender_request')
    receiver = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='receiver_request')
    date = models.DateField(auto_now_add=True)
    accept_status = models.BooleanField(null=True, blank=True)

    # check = models.BooleanField(default=False)

    def __str__(self):
        return f'{self.sender} to {self.receiver}'


class MedicalRecorder(models.Model):
    description = models.TextField(blank=True, null=True)
    doctor = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='doctor')
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patients')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'description:{self.description} date:{self.date}'


class Session(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    medical_recorde = models.ForeignKey(MedicalRecorder, on_delete=models.CASCADE, related_name='medical_recorde')
    # patient = models.ForeignKey(Patient, on_delete=models.CASCADE)
    audio = models.FileField(upload_to=user_directory_path, blank=True, null=True)

    def __str__(self):
        return f'title:{self.title} content:{self.content}'


class PrescriptionPage(models.Model):
    doctor = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='doctor_p')
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE, related_name='patients_p')

    def __str__(self):
        return f'pk:{self.pk}'


class Prescription(models.Model):
    content = models.TextField()
    prescription_page = models.ForeignKey(PrescriptionPage, on_delete=models.CASCADE, related_name='prescription_page')
    date = models.DateField(auto_now_add=True)

    def __str__(self):
        return f'content:{self.content}'
