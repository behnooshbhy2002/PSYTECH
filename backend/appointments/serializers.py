from django.core.exceptions import ObjectDoesNotExist
from rest_framework import serializers
from rest_framework.exceptions import ValidationError

from accounts.models import Patient, Psychologist, Disease, User
from appointments.models import Request, Session, Prescription, MedicalRecorder
from datetime import date


def clean_password(data):
    if data['password'] != data['confirm_password']:
        raise ValidationError('confirm password does not match password')
    return data


def clean_phone_number(data):
    if User.objects.filter(phone_number=data).exists():
        raise serializers.ValidationError({"email": "This phone_number is already in use."})
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
        fields = ("description", "date", "id")


class PrescriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ("date", "content")


class PrescriptionContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Prescription
        fields = ("content",)


class SessionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Session
        fields = ("date", "content", "title", "id", "medical_recorde")

    # def create(self, validated_data):
    #     # validated_data['date'] = date.today
    #     return Session.objects.create(**validated_data)

class CreateSessionSerializer(serializers.ModelSerializer):
    # medical_recorde = serializers.RelatedField(source='', read_only=True)
    # category_name = serializers.RelatedField(source='category', read_only=True)

    class Meta:
        model = Session
        fields = ("title", "content")


class SessionListSerializer(serializers.ModelSerializer):
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
    # confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Psychologist
        fields = ('specialist', 'address', 'phone_number', 'experience', 'password')
        extra_keywords = {
            'password': {'write_only': True, 'validators': (clean_password,)},
            # 'phone_number': {'validators': (clean_phone_number,)},
        }


    def update(self, instance, validated_data):
        # user = self.context['request'].user
        #
        # if user.pk != instance.pk:
        #     raise serializers.ValidationError({"authorize": "You dont have permission for this user."})
        if validated_data.get('specialist'):
            instance.specialist = validated_data['specialist']
        # if validated_data.get('image'):
        #     instance.image = validated_data['image']
        if validated_data.get('experience'):
            instance.experience = validated_data['experience']
        if validated_data.get('password'):
            instance.password = validated_data['password']
        if validated_data.get('phone_number'):
            instance.phone_number = validated_data['phone_number']
        if validated_data.get('address'):
            instance.address = validated_data['address']

        instance.save()

        return instance


class PsychologistProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = (
            'full_name', 'specialist', 'medical_number', 'address', 'phone_number', 'email', 'experience', 'rate',
            'image')


class PatientUpdateInfoSerializer(serializers.ModelSerializer):
    # confirm_password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Patient
        fields = ('phone_number', 'password')
        extra_keywords = {
            'password': {'write_only': True},
            # 'phone_number': {'validators': (clean_phone_number,)},
        }

    def update(self, instance, validated_data):
        # user = self.context['request'].user
        #
        # if user.pk != instance.pk:
        #     raise serializers.ValidationError({"authorize": "You dont have permission for this user."})
        if validated_data.get('password'):
            instance.password = validated_data['password']

        if validated_data.get('phone_number'):
            instance.phone_number = validated_data['phone_number']

        instance.save()

        return instance


class PatientProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Patient
        fields = ('full_name', 'phone_number', 'email', 'gender')


class DoctorRelatedDiseaseSerializer(serializers.ModelSerializer):
    id = serializers.PrimaryKeyRelatedField(queryset=Disease.objects.all())

    class Meta:
        model = Disease
        fields = ("id",)


class RateSerializer(serializers.ModelSerializer):
    pk = serializers.PrimaryKeyRelatedField(queryset=Psychologist.objects.all())

    class Meta:
        model = Psychologist
        fields = ("pk", "rate")


class DoctorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Psychologist
        fields = ("image", "full_name", "experience", "medical_number", "rate")
