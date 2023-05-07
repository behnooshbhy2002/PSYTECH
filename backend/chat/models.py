from django.db import models
from accounts.models import User, Psychologist


class ChatMessage(models.Model):
    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sender_user')
    receiver = models.ForeignKey(User, on_delete=models.CASCADE, related_name='receiver_user')
    received_at = models.DateTimeField(auto_now_add=True)
    is_read = models.BooleanField()

    class Meta:
        ordering = ['received_at']

    def __str__(self):
        return f'sender:{self.sender.name} receiver:{self.receiver.name}'


class Message(models.Model):
    text = models.CharField(max_length=250)
    date = models.DateTimeField(auto_now=True, blank=True)
    sender = models.ForeignKey(User, on_delete=models.CASCADE, blank=True)
    chat = models.ForeignKey(ChatMessage, on_delete=models.CASCADE)

    class Meta:
        verbose_name_plural = "Messages"
        ordering = ['-date']

    def __str__(self):
        return f'sender:{self.sender},message:{self.text}'


class Comment(models.Model):
    author = models.ForeignKey(User, on_delete=models.CASCADE, related_name='author')
    psychologist = models.ForeignKey(Psychologist, on_delete=models.CASCADE, related_name='psycholo')
    text = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)

    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Comment {} by {}'.format(self.text, self.author.name)


class Report(models.Model):
    psychologist = models.ForeignKey(User, on_delete=models.CASCADE, related_name='psychologist_report')
    patient = models.ForeignKey(User, on_delete=models.CASCADE, related_name='patient_report')
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    content = f'patient_name:{patient.name}'

    def __str__(self):
        return f'content:{self.content} , psychologist:{self.psychologist.name}'
