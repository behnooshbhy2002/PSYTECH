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
