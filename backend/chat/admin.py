from django.contrib import admin
from .models import Message, Chat


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("date",)
    search_fields = ("date", "sender")
    ordering = ("date",)


@admin.register(Chat)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("created",)
    search_fields = ("created", "doctor", "patient")
    ordering = ("created",)
