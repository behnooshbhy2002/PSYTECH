from django.contrib import admin
from .models import Message, ChatMessage, Comment, Report


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = ("date",)
    search_fields = ("date", "sender")
    ordering = ("date",)


@admin.register(ChatMessage)
class ChatMessageAdmin(admin.ModelAdmin):
    list_display = ("received_at",)
    search_fields = ("received_at", "sender", "receiver")
    ordering = ("received_at",)


@admin.register(Comment)
class CommentAdmin(admin.ModelAdmin):
    list_display = ("created_on",)
    search_fields = ("created_on", "psychologist")
    ordering = ("created_on",)


@admin.register(Report)
class ReportAdmin(admin.ModelAdmin):
    list_display = ("created_on", "content")
    search_fields = ("created_on",)
    ordering = ("created_on",)
