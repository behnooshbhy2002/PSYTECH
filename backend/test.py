from django.shortcuts import render
from django.views import View
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Person, Question, Answer
from .serializers import PersonSerializer, QuestionSerializer, AnswerSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
from permissions import IsOwnerOrReadOnly
from django.core.paginator import Paginator


# Create your views here.
# class Home(View):
#     def get(self, request):
#         return render(request, 'home/home.html')

# @api_view(['GET', 'POST', 'PUT'])
# def home(request):
#     return Response({'tutorial': 'rest'})

class Home(APIView):
    permission_classes = [AllowAny, ]

    def get(self, request):
        persons = Person.objects.all()
        ser_data = PersonSerializer(instance=persons, many=True)
        return Response(data=ser_data.data)

    # def post(self, request):
    #     course = request.data['course']
    #     return Response({'tutorial': course})


class QuestionListView(APIView):
    throttle_scope = 'questions'

    def get(self, request):
        questions = Question.objects.all()

        # pagination
        page_number = self.request.query_params.get('page', 1)
        page_size = self.request.query_params.get('limit', 2)
        paginator = Paginator(questions, page_size)


        ser_data = QuestionSerializer(instance=paginator.page(page_number), many=True)
        return Response(ser_data.data, status=status.HTTP_200_OK)


class QuestionCreateView(APIView):
    permission_classes = [IsAuthenticated, ]
    serializer_class = QuestionSerializer  # to help Swagger know serializer

    def post(self, request):
        ser_data = QuestionSerializer(data=request.data)
        if ser_data.is_valid():
            ser_data.save()
            return Response(ser_data.data, status=status.HTTP_201_CREATED)
        return Response(ser_data.errors, status=status.HTTP_400_BAD_REQUEST)


class QuestionUpdateView(APIView):
    permission_classes = [IsOwnerOrReadOnly, ]

    def put(self, request, pk):
        question = Question.objects.get(pk=pk)
        self.check_object_permissions(request, question)  # to run custom permissions
        ser_data = QuestionSerializer(instance=question, data=request.data, partial=True)
        if ser_data.is_valid():
            ser_data.save()
            return Response(ser_data.data, status=status.HTTP_200_OK)
        return Response(ser_data.errors, status=status.HTTP_400_BAD_REQUEST)


class QuestionDeleteView(APIView):
    permission_classes = [IsOwnerOrReadOnly, ]

    def delete(self, request, pk):
        question = Question.objects.get(pk=pk)
        question.delete()
        return Response({'message': 'question deleted'}, status=status.HTTP_200_OK)