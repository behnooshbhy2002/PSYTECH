from django.urls import path
from . import views

app_name = 'appointments'
urlpatterns = [
    path('request_list/', views.RequestListView.as_view(), name='request_list'),
    path('psychologist_detail/', views.ShowPsychologistDetailView.as_view(), name='psychologist_detail'),
    path('psychologist_profile/', views.PsychologistProfile.as_view(), name='psychologist_profile'),
]