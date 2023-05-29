from django.db import models
from accounts.models import User, Psychologist


class Chat(models.Model):
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender_user')
    doctor = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='receiver_user')
    created = models.DateTimeField(auto_now=True, blank=True)
    # is_read = models.BooleanField()

    class Meta:
        ordering = ['created']

    def __str__(self):
        return f'patient:{self.patient} doctor:{self.doctor}'


class Message(models.Model):
    text = models.CharField(max_length=250)
    date = models.DateTimeField(auto_now=True, blank=True)
    sender = models.ForeignKey(Psychologist, on_delete=models.CASCADE, blank=True)
    chat = models.ForeignKey(Chat, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Messages"
        ordering = ['-date']

    def __str__(self):
        return f'sender:{self.sender}, message:{self.text}'
