from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Psychologist, Patient
from accounts.serializers import ActivePsychologistSerializer
from appointments.models import Request, MedicalRecord
from appointments.serializers import RequestSerializer, GetMedicalRecordSerializer, PatientSerializer, \
    MedicalRecordSerializer, PsychologistDetailSerializer, DiseaseSerializer


class RequestListView(APIView):

    def get(self, request):
        id_dr = request.query_params.get('id')
        psychologist = Psychologist.objects.get(id=id_dr)
        requests_lists = Request.objects.filter(receiver=psychologist)
        request_serializer = RequestSerializer(requests_lists, many=True)
        return Response(request_serializer.data, status=status.HTTP_200_OK)

    def post(self, request):
        serializer = GetMedicalRecordSerializer(data=request.data)
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


class MedicalReportView(APIView):

    def post(self, request):
        serializer = GetMedicalRecordSerializer(data=request.data)
        if serializer.is_valid():
            pk_doctor = serializer.data.get('pk_doctor')
            psychologist = Psychologist.objects.get(pk=pk_doctor)
            pk_patient = serializer.data.get('pk_patient')
            patient = Patient.objects.get(pk=pk_patient)
            medical_report = MedicalRecord.objects.get(doctor=psychologist, patient=patient)
            print(medical_report)
            serializer = MedicalRecordSerializer(medical_report, many=True)
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class ShowPsychologistDetailView(APIView):
    def get(self, request):
        id_dr = request.query_params.get('id')
        print(id_dr)
        psychologist = Psychologist.objects.get(id=id_dr)
        diseases_lists = psychologist.diseases.all()
        ser_disease = DiseaseSerializer(diseases_lists, many=True)
        ser_psychologist = PsychologistDetailSerializer(psychologist)
        print(ser_psychologist.data)
        return Response({'psychologist': ser_psychologist.data, 'disease': ser_disease.data}, status=status.HTTP_200_OK)


