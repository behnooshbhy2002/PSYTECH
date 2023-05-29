from django.contrib.auth import get_user_model
from django.test import TestCase

User = get_user_model()


class TestRegister(TestCase):

    def test_register_patient_success(self):
        url = "/accounts/register/"
        data = {
            'full_name': "ali",
            'phone_number': "9127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("full_name", res.data)
        self.assertIn("phone_number", res.data)
        self.assertIn("gender", res.data)
        self.assertIn("password", res.data)

    def test_register_patient_invalid_phone_failed(self):
        url = "/accounts/register/"
        data = {
            'full_name': "ali",
            'phone_number': "09127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("phone_number", res.data)

    def test_register_patient_conf_pass_failed(self):
        url = "/accounts/register/"
        data = {
            'full_name': "ali",
            'phone_number': "9127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "12345",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 400)
        self.assertIn("confirm_password", res.data)


class TestRegisterPsychologist(TestCase):

    def test_register_psychologist_success(self):
        url = "/accounts/register_psychologist/"
        data = {
            'full_name': "ali",
            'phone_number': "9127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'specialist': "specialist",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("full_name", res.data)
        self.assertIn("phone_number", res.data)
        self.assertIn("gender", res.data)
        self.assertIn("specialist", res.data)
        self.assertIn("password", res.data)

    def test_register_psychologist_invalid_phone_failed(self):
        url = "/accounts/register_psychologist/"
        data = {
            'full_name': "ali",
            'phone_number': "09127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("phone_number", res.data)

    def test_register_psychologist_conf_pass_failed(self):
        url = "/accounts/register_psychologist/"
        data = {
            'full_name': "ali",
            'phone_number': "9127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "12345",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 400)
        self.assertIn("confirm_password", res.data)