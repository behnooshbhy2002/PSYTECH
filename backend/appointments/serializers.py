from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from accounts.models import Patient, Psychologist, Disease
from appointments.models import Request, Session, Prescription, MedicalRecorder


def clean_password(data):
    if data['password'] != data['confirm_password']:
        raise ValidationError('confirm password does not match password')
    return data


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ("full_name",)


class RequestSerializer(serializers.ModelSerializer):
    sender_name = serializers.SerializerMethodField()
    sender_gender = serializers.SerializerMethodField()
    sender_id = serializers.SerializerMethodField()

    class Meta:
        model = Request
        fields = "__all__"

    def get_sender_name(self, obj):
        return obj.sender.full_name

    def get_sender_gender(self, obj):
        return obj.sender.gender

    def get_sender_id(self, obj):
        return obj.sender.id


class PostRequestSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Request.objects.all())

    class Meta:
        model = Request
        fields = ("accept_status", "pk")


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ("full_name", "id", "gender")


class PsychologistIdSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Psychologist.objects.all())

    class Meta:
        model = Psychologist
        fields = ("pk",)


class PatientIdSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Patient.objects.all())

    class Meta:
        model = Patient
        fields = ("pk",)


class MedicalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecorder
        fields = ("description", "date")


class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ("date", "content")


class SessionSerializer(serializers.ModelSerializer):
    prescription = serializers.SerializerMethodField()

    class Meta:
        model = Session
        fields = ("date", "content", "title", "id")

    def get_prescription(self, obj):
        try:
            return obj.prescription
        except ObjectDoesNotExist:
            print("There is no prescription for this session.")
            raise ObjectDoesNotExist


class SessionListSerializer(serializers.ModelSerializer):
    # list = serializers.ListField(child=SessionSerializer())

    class Meta:
        model = Session
        fields = ("date", "content", "title", "id")


class DiseaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Disease
        fields = "__all__"


class DiseaseList(serializers.ModelSerializer):
    list = serializers.ListField(child=DiseaseSerializer())

    class Meta:
        model = Disease
        fields = "__all__"


class PsychologistDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = ("image", "full_name", "experience", "medical_number", "address", "phone_number", "id", "rate")


class PsychologistUpdateInfoSerializer(serializers.ModelSerializer):
    confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Patient
        fields = ('specialist', 'address', 'phone_number', 'experience', 'image', 'password', 'confirm_password')
        extra_keywords = {
            'password': {'write_only': True, 'validators': (clean_password,)},
        }

    def validate_phone_number(self, value):
        user = self.context['request'].user
        if Patient.objects.exclude(pk=user.pk).filter(phone_number=value).exists():
            raise serializers.ValidationError({"email": "This phone_number is already in use."})
        return value

    def update(self, instance, validated_data):
        user = self.context['request'].user

        if user.pk != instance.pk:
            raise serializers.ValidationError({"authorize": "You dont have permission for this user."})

        instance.specialist = validated_data['specialist']
        instance.image = validated_data['image']
        instance.experience = validated_data['experience']
        instance.password = validated_data['password']
        instance.phone_number = validated_data['phone_number']
        instance.address = validated_data['address']

        instance.save()

        return instance


class PsychologistProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = (
            'full_name', 'specialist', 'medical_number', 'address', 'phone_number', 'email', 'experience', 'rate',
            'image')


class PatientProfileSerializer(serializers.ModelSerializer):  # todo: fields will change
    class Meta:
        model = Patient
        fields = ('full_name', 'phone_number', 'email', '')


class RateSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Psychologist.objects.all())

    class Meta:
        model = Psychologist
        fields = ("pk", "rate")
