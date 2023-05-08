from django.urls import path
from . import views
from rest_framework.authtoken import views as auth_token
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

app_name = 'accounts'
urlpatterns = [
    path('', views.HomeView.as_view(), name='home'),
    path('register/', views.PatientRegisterView.as_view(), name='user_register'),
    path('login/', views.UserLoginView.as_view(), name='user_login'),
    path('logout/', views.UserLogoutView.as_view(), name='user_logout'),
    path('verify/', views.VerifyOTP.as_view(), name='user_verify'),
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
# todo: register url for psychologist

# for email=fasa.pub@gmail.com, password=123
# "refresh": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY4MzYyODU4MSwiaWF0IjoxNjgzNTQyMTgxLCJqdGkiOiIzZjhmMjg5OWRkYTY0YmY5ODg1NWVjNGE2MGJiY2EzYyIsInVzZXJfaWQiOjJ9.xyqDWJd9ijKGtAb7TB5HStXCtuzDIAQ7one-UukQXf4",
# "access": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjgzNTQyNDgxLCJpYXQiOjE2ODM1NDIxODEsImp0aSI6Ijc2NTY2OGY1MzExZDRlODg5YzMxOTg4Y2YwNmVlYjUyIiwidXNlcl9pZCI6Mn0.-yRE0PEcld5k5Bh1KyBvA81mxsi8Ha3i5m8LZ4mOi9A"