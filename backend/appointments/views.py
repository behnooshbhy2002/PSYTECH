from django.shortcuts import render

# Create your views here.
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from accounts.models import Psychologist, User
from accounts.serializers import ActivePsychologistSerializer
from appointments.models import Request
from appointments.serializers import RequestSerializer, PostRequestSerializer


class RequestListView(APIView):

    def get(self, request):
        id_dr = request.query_params.get('id')
        psychologist = Psychologist.objects.get(id=id_dr)
        requests_lists = Request.objects.filter(receiver=psychologist)
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
