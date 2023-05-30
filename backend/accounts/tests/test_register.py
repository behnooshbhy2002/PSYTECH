from django.contrib.auth import get_user_model
from django.test import TestCase

User = get_user_model()


class TestRegister(TestCase):

    def test_register_patient_success(self):
        url = "/accounts/register/"
        data = {
            'full_name': "ali",
            'medical_number': "21312",
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
            'medical_number': "213123",
            'phone_number': "09127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("phone_number", res.data)


class TestRegisterPsychologist(TestCase):

    def test_register_psychologist_success(self):
        url = "/accounts/register_psychologist/"
        data = {
            'full_name': "ali",
            'medical_number': "123123",
            'phone_number': "9127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'specialist': "specialist",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("successfully", res.data)

    def test_register_psychologist_invalid_phone_failed(self):
        url = "/accounts/register_psychologist/"
        data = {
            'full_name': "ali",
            'medical_number': "1231232",
            'phone_number': "09127856321",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
            'confirm_password': "1234"
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertIn("phone_number", res.data)