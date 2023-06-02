from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Psychologist, Patient
from accounts.serializers import ActivePsychologistSerializer
from appointments.models import Request, Session, MedicalRecorder
from appointments.serializers import RequestSerializer, PatientSerializer, \
    MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer, PsychologistProfileSerializer, \
    PostRequestSerializer, PsychologistUpdateInfoSerializer, \
    PsychologistIdSerializer, PatientIdSerializer, RateSerializer, SessionListSerializer


# MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer, PsychologistProfileSerializer, PsychologistUpdateInfoSerializer


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

    # def post(self, request):
    #     serializer = PostRequestSerializer(data=request.data)
    #     if serializer.is_valid():
    #         accept_status = serializer.data.get('accept_status')
    #         pk = serializer.data.get('pk')
    #         request = Request.objects.get(pk=pk)
    #         print(accept_status, pk)
    #         request.accept_status = accept_status
    #         request.save()
    #         return Response(serializer.data, status=status.HTTP_200_OK)
    #     return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


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
    def post(self, request):
        psychologist_data = {
            request.data.get('specialist'),
            request.data['address'],
            request.data['phone_number'],
            request.data.get('experience'),
            request.data['image'],
            request.data['password'],
            request.data['confirm_password'],
        }
        ser_data = PsychologistUpdateInfoSerializer(psychologist_data)
        return Response(ser_data.data)

    def get(self, request):
        try:
            id_dr = request.query_params.get('id')
            psychologist = Psychologist.objects.get(id=id_dr)
            ser_data = PsychologistProfileSerializer(psychologist)
            return Response(ser_data.data, status=status.HTTP_200_OK)
        except Exception as e:
            return Response(status=status.HTTP_400_BAD_REQUEST)


class PatientProfile(APIView):
    def post(self, request):
        pass

    def get(self, request):
        pass


class RequestView(APIView):
    def post(self, request):
        psychologist = None
        patient = None
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
        print(request.data)
        serializer = RateSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            id_psychologist = serializer.data.get('pk')
            print(id_psychologist)
            psychologist = Psychologist.objects.get(pk=id_psychologist)
            rate = serializer.data.get('rate')
            psychologist.count_rate(rate)
            psychologist.save()
            return Response({"successfully"}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
