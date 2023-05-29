from django.urls import path
from . import views

app_name = 'appointments'
urlpatterns = [
    path('request_list/', views.RequestListView.as_view(), name='request_list'),
]