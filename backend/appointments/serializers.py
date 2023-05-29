from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from accounts.models import User
from appointments.models import Request


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ("full_name",)


class RequestSerializer(serializers.ModelSerializer):
    sender_name = serializers.SerializerMethodField()

    class Meta:
        model = Request
        fields = "__all__"

    def get_sender_name(self, obj):
        return obj.sender.full_name


class PostRequestSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Request.objects.all())

    class Meta:
        model = Request
        fields = ("accept_status", "pk")
