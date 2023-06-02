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


class MedicalRecorder(models.Model):
    description = models.TextField()
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
    patient = models.ForeignKey(Patient, on_delete=models.CASCADE)

    def __str__(self):
        return f'title:{self.title} content:{self.content} patient:{self.patient}'


def user_directory_path(instance, filename):
    # file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
    return 'user_{0}/{1}'.format(instance.user.id, filename)


class Prescription(models.Model):
    voice_field = models.FileField(upload_to=user_directory_path, blank=True, null=True)
    session = models.OneToOneField(Session, on_delete=models.CASCADE)
    content = models.TextField()
    date = models.DateField(auto_now_add=True)
    def __str__(self):
        return f'content:{self.content}'
