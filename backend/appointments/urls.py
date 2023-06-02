from django.urls import path
from . import views

app_name = 'appointments'
urlpatterns = [
    path('request_list/', views.RequestListView.as_view(), name='request_list'),
    path('psychologist_detail/', views.ShowPsychologistDetailView.as_view(), name='psychologist_detail'),
    path('psychologist_profile/', views.PsychologistProfile.as_view(), name='psychologist_profile'),
    path('send_requset/', views.RequestView.as_view(), name='send_request'),
    path('rating/', views.RatingView.as_view(), name='rating'),
    path('medical_recorder/', views.MedicalRecordView.as_view(), name='medical_recorder'),
    path('patient_list/', views.PatientListView.as_view(), name='patient_list'),
    path('patient_profile/', views.PatientProfile.as_view(), name='patient_profile'),
]