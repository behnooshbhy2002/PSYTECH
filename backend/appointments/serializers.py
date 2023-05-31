from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from accounts.models import Patient, Psychologist, Disease
from appointments.models import Request, MedicalRecord


class SenderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
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


class PatientSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ("full_name",)


class PsychologistIdSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Psychologist.objects.all())

    class Meta:
        model = Psychologist
        fields = ("pk",)


class GetMedicalRecordSerializer(serializers.ModelSerializer):
    pk_doctor = PsychologistIdSerializer(read_only=True)
    pk_patient = serializers.PrimaryKeyRelatedField(queryset=Patient.objects.all())

    class Meta:
        model = Patient
        fields = ("pk_doctor", "pk_patient")


class MedicalRecordSerializer(serializers.ModelSerializer):
    class Meta:
        model = MedicalRecord
        fields = "__all__"


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
    # diseases_list = serializers.SerializerMethodField()

    class Meta:
        model = Psychologist
        fields = ("image", "full_name", "experience", "medical_number", "address", "phone_number", "id")

    # def get_diseases_list(self, obj):
    #     diseases_list = serializers.ListField(child=DiseaseSerializer(),default=obj.diseases)
    #     return diseases_list
