from django.db import models
from accounts.models import User


class ChatMessage(models.Model):
    sender = models.ForeignKey(User, related_name='sender_user')
    receiver = models.ForeignKey(User, related_name='receiver_user')
    received_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField()

    class Meta:
        ordering = ['received_at']

    def __str__(self):
        return f'sender:{self.sender.name} receiver:{self.receiver.name}'


class Message(models.Model):
    text = models.CharField(max_length=250)
    date = models.DateTimeField(auto_now=True, blank=True)
    sender = models.ForeignKey(User, related_name='sender', blank=True)
    chat = models.ForeignKey(ChatMessage)

    class Meta:
        verbose_name_plural = "Messages"
        ordering = ['-date']

    def __str__(self):
        return f'sender:{self.sender},message:{self.text}'


class Comment(models.Model):
    author = models.ForeignKey(User, related_name='author')
    psychologist = models.ForeignKey(User, related_name='psychologist')
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.text, self.author.name)


class Report(models.Model):
    psychologist = models.ForeignKey(User, related_name='psychologist')
    patient = models.ForeignKey(User, related_name='patient')
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    content = f'patient_name:{patient.name}'

    def __str__(self):
        return f'content:{self.content} , psychologist:{self.psychologist.name}'
