from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Psychologist, Patient, Disease
from accounts.serializers import ActivePsychologistSerializer
from appointments.models import Request, Session, MedicalRecorder
from appointments.serializers import RequestSerializer, PatientSerializer, \
    MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer, PsychologistProfileSerializer, \
    PostRequestSerializer, PsychologistUpdateInfoSerializer, \
    PsychologistIdSerializer, PatientIdSerializer, RateSerializer, SessionListSerializer, DoctorSerializer, \
    SessionSerializer

# MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer, PsychologistProfileSerializer, PsychologistUpdateInfoSerializer
from appointments.serializers import RequestSerializer, PatientSerializer, \
    MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer, PsychologistProfileSerializer, \
    PsychologistUpdateInfoSerializer, DoctorRelatedDiseaseSerializer, PatientProfileSerializer, \
    PatientUpdateInfoSerializer

from rest_framework_simplejwt.authentication import JWTAuthentication


class RequestListView(APIView):

    def get(self, request):
        id_dr = request.query_params.get('id')

        psychologist = Psychologist.objects.get(id=id_dr)
        requests_lists = Request.objects.filter(receiver=psychologist, accept_status=False)
        request_serializer = RequestSerializer(requests_lists, many=True)
        return Response(request_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = PostRequestSerializer(data=request.data)
        if serializer.is_valid():
            accept_status = serializer.data.get('accept_status')
            pk = serializer.data.get('pk')
            request = Request.objects.get(pk=pk)
            print(accept_status, pk)
            request.accept_status = accept_status
            request.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PatientListView(APIView):

    def get(self, request):
        id_dr = request.query_params.get('id')
        psychologist = Psychologist.objects.get(id=id_dr)
        patient_lists = psychologist.patients
        patient_serializer = PatientSerializer(patient_lists, many=True)
        return Response(patient_serializer.data, status=status.HTTP_200_OK)


class MedicalRecordView(APIView):

    def post(self, request):
        print(request.data)
        print(request.data.get("id_psychologist"))
        print(request.data.get("id_patient"))
        serializer_psychologist = PsychologistIdSerializer(data={'pk': request.data.get("id_psychologist")})
        serializer_patient = PatientIdSerializer(data={'pk': request.data.get("id_patient")})
        if serializer_psychologist.is_valid() and serializer_patient.is_valid():
            pk_doctor = serializer_psychologist.data.get('pk')
            print(pk_doctor,'goal')
            psychologist = Psychologist.objects.get(pk=pk_doctor)
            pk_patient = serializer_patient.data.get('pk')
            print(pk_patient,'goal2')
            patient = Patient.objects.get(pk=pk_patient)
            medical_record = MedicalRecorder.objects.get(doctor=psychologist, patient=patient)
            print(medical_record)
            medical_record_serialized = MedicalRecordSerializer(medical_record)
            print(medical_record_serialized.data, 'hooooo')
            session_list = Session.objects.filter(medical_recorde=medical_record)
            session_list_serialized = SessionListSerializer(session_list, many=True)
            print(session_list_serialized.data)
            return Response({'medical_record': medical_record_serialized.data,
                             'session_list': session_list_serialized.data}, status=status.HTTP_200_OK)
        errors = {}
        if not serializer_psychologist.is_valid():
            errors["serializer_psychologist"] = serializer_psychologist.errors
        if not serializer_patient.is_valid():
            errors["serializer_patient"] = serializer_patient.errors
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)


class ShowPsychologistDetailView(APIView):
    def get(self, request):
        id_dr = request.query_params.get('id')
        psychologist = Psychologist.objects.get(id=id_dr)
        diseases_lists = psychologist.diseases.all()
        ser_disease = DiseaseSerializer(diseases_lists, many=True)
        ser_psychologist = PsychologistDetailSerializer(psychologist)
        psychologist_data = list()
        psychologist_data.append(ser_psychologist.data)
        print(psychologist_data)
        return Response({'psychologist': psychologist_data, 'disease': ser_disease.data}, status=status.HTTP_200_OK)


class PsychologistProfile(APIView):
    authentication_classes = [JWTAuthentication]

    def put(self, request):
        id_dr = request.query_params.get('id')
        psychologist = Psychologist.objects.get(id=id_dr)

        psychologist_data = {key: request.data.get(key) for key in request.data if key != 'disease'}
        psychologist_serialized = PsychologistUpdateInfoSerializer(data=psychologist_data,
                                                                   context={'request': request})
        if psychologist_serialized.is_valid():
            psychologist_serialized.update(psychologist, psychologist_serialized.validated_data)

            disease_spliter = request.data.get('disease')[1:-1].split('},{')
            disease_id = {int(disease_spliter[i].split(',')[0].split(':')[1]) for i in range(len(disease_spliter))}

            for id in disease_id:
                disease = Disease.objects.get(id=id)
                psychologist.diseases.add(disease)

            psychologist.save()

            return Response(psychologist_serialized.data, status=status.HTTP_200_OK)
        return Response(psychologist_serialized.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        try:
            print(request.data)
            # if request.user.is_authenticated:

            auth_header = request.META.get('HTTP_AUTHORIZATION')
            if not auth_header:
                return Response({"error": "Authorization header missing"}, status=status.HTTP_401_UNAUTHORIZED)
            auth_token = auth_header.split(' ')[1]

            id_dr = request.query_params.get('id')
            psychologist = Psychologist.objects.get(id=id_dr)
            ser_data = PsychologistProfileSerializer(psychologist)
            return Response(ser_data.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class PatientProfile(APIView):
    authentication_classes = [JWTAuthentication]

    def put(self, request):
        id_user = request.query_params.get('id')
        patient = Patient.objects.get(id=id_user)

        patient_serialized = PatientUpdateInfoSerializer(patient)
        if patient_serialized.is_valid():
            patient_serialized.update(patient, patient_serialized.validated_data)

            return Response(patient_serialized.data, status=status.HTTP_200_OK)
        return Response(patient_serialized.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self, request):
        try:
            # if request.user.is_authenticated:
            auth_header = request.META.get('HTTP_AUTHORIZATION')
            if not auth_header:
                return Response({"error": "Authorization header missing"}, status=status.HTTP_401_UNAUTHORIZED)
            auth_token = auth_header.split(' ')[1]

            id_user = request.query_params.get('id')
            patient = Patient.objects.get(id=id_user)
            ser_data = PatientProfileSerializer(patient)
            return Response(ser_data.data, status=status.HTTP_200_OK)

        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class RequestView(APIView):
    def post(self, request):
        print(request.data)
        print(request.data.get("id_psychologist"))
        print(request.data.get("id_patient"))
        # serializer = GetPsychologistPatientIdSerializer(data=request.data)
        serializer_psychologist = PsychologistIdSerializer(data={'pk': request.data.get("id_psychologist")})
        serializer_patient = PatientIdSerializer(data={'pk': request.data.get("id_patient")})
        if serializer_psychologist.is_valid() and serializer_patient.is_valid():
            print(serializer_psychologist.data)
            pk_doctor = serializer_psychologist.data.get('pk')
            psychologist = Psychologist.objects.get(pk=pk_doctor)
            print(psychologist.full_name)
            pk_patient = serializer_patient.data.get('pk')
            print(pk_patient)
            patient = Patient.objects.get(pk=pk_patient)
            print(patient.full_name)
            request_patient = Request(sender=patient, receiver=psychologist)
            request_patient.save()
            print(request_patient)
            return Response({'msg': "successfully", 'data': serializer_psychologist.data.get('pk')},
                            status=status.HTTP_200_OK)
        errors = {}
        if not serializer_psychologist.is_valid():
            errors["serializer_psychologist"] = serializer_psychologist.errors
        if not serializer_patient.is_valid():
            errors["serializer_patient"] = serializer_patient.errors
        return Response(errors, status=status.HTTP_400_BAD_REQUEST)
        # if serializer_patient.is_valid():


class RatingView(APIView):
    def post(self, request):
        serializer = RateSerializer(data=request.data)
        if serializer.is_valid():
            id_psychologist = serializer.data.get('pk')
            psychologist = Psychologist.objects.get(pk=id_psychologist)
            rate = serializer.data.get('rate')
            psychologist.count_rate(rate)
            psychologist.save()
            return Response({"successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class DoctorListView(APIView):
    def get(self, request):
        id_user = request.query_params.get('id')
        patient = Patient.objects.get(id=id_user)
        doctor_list = patient.psychologist_patient.all()
        doctor_serializer = DoctorSerializer(doctor_list, many=True)
        return Response(doctor_serializer.data, status=status.HTTP_200_OK)


class SessionView(APIView):
    def get(self, request):
        pass

    def post(self, request):
        session_serialized = SessionSerializer(request.data)