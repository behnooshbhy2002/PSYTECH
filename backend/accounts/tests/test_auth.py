from django.contrib import auth
from django.contrib.auth import get_user_model
from django.test import TestCase

User = get_user_model()


class TestAuth(TestCase):

    def setUp(self):
        self.email = "test@doomain.com"
        self.password = "test"
        self.user = User.objects.create_superuser(email=self.email, password=self.password)

    def test_login_success(self):
        url = "/accounts/login/"
        data = {
            "email": self.email,
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)

    def test_login_failed(self):
        url = "/accounts/login/"
        data = {
            "email": "invalid email",
            "password": "invalid password",
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 404)
        self.assertIn("errors", res.data)

    def test_login_required_fields(self):
        url = "/accounts/login/"
        data = {
            "email": self.email,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 400)
        self.assertIn("password", res.data)
        data = {
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 400)
        self.assertIn("email", res.data)

    def test_logout_success(self):
        url = "/accounts/login/"
        data = {
            "email": self.email,
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        user = auth.get_user(self.client)
        assert user.is_authenticated

    def test_logout_failed(self):
        user = auth.get_user(self.client)
        assert not user.is_authenticated

    def test_get_token_success(self):
        url = "/accounts/token/"
        data = {
            "email": self.email,
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("access", res.data)
        self.assertIn("refresh", res.data)

    def test_get_token_failed(self):
        url = "/accounts/token/"
        data = {
            "email": "invalid email",
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 401)
        self.assertNotIn("access", res.data)
        self.assertNotIn("refresh", res.data)

    def test_refresh_token_success(self):
        url = "/accounts/token/"
        data = {
            "email": self.email,
            "password": self.password,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("access", res.data)
        self.assertIn("refresh", res.data)

        url = "/accounts/token/refresh/"
        data = {
            "refresh": res.data['refresh'],
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)

    def test_refresh_token_failed(self):
        url = "/accounts/token/refresh/"
        data = {
            "refresh": "asdsadsdsadsa",
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 401)

    def test_verify_success(self):
        url = "/accounts/verify/"
        data = {
            "email": self.email,
            "otp": "otp",
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
