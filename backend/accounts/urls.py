from django.urls import path
from . import views
from rest_framework.authtoken import views as auth_token

app_name = 'accounts'
urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('api-token-auth/', auth_token.obtain_auth_token),
    path('register/', views.PatientRegisterView.as_view(), name='user_register'),
    path('login/', views.UserLoginView.as_view(), name='user_login'),
    path('logout/', views.UserLogoutView.as_view(), name='user_logout'),
    path('psychologists_list/', views.PsychologistListView.as_view(), name='psychologists_list'),
]
# todo: register url for psychologist