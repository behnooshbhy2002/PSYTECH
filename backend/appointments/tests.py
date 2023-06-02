from django.contrib.auth import get_user_model
from django.test import TestCase

from accounts.models import Psychologist, Patient
from appointments.models import Request, MedicalRecorder

User = get_user_model()


class TestAppointments(TestCase):

    def setUp(self):
        self.email = "test@doomain.com"
        self.password = "test"
        self.user = User.objects.create_superuser(
            email=self.email,
            password=self.password,
            phone_number="09162545454"
        )

    def test_get_request_list(self):
        sender = Patient.objects.create(
            email='client@gmail.com',
            password="password",
            phone_number="09162545424"
        )

        psychologist_data = {
            'full_name': "ali",
            'medical_number': "213123",
            'phone_number': "09286856333",
            'email': "adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
        }
        psychologist = Psychologist.objects.create(**psychologist_data)

        request = Request.objects.create(sender=sender, receiver=psychologist, accept_status=False)

        url = f"/appointments/request_list/?id={psychologist.id}"
        res = self.client.get(url)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.data), Request.objects.filter(receiver=psychologist, accept_status=False).count())

    def test_submit_request(self):
        url = "/appointments/request_list/"
        sender = Patient.objects.create(
            email='sender@gmail.com',
            password="password",
            phone_number="09162345424"
        )
        receiver_data = {
            'full_name': "reza",
            'medical_number': "2133123",
            'phone_number': "09233856333",
            'email': "2adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
        }
        receiver = Psychologist.objects.create(**receiver_data)
        request = Request.objects.create(sender=sender, receiver=receiver, accept_status=False)
        data = {
            "pk": request.id,
            "sender": sender.id,
            "receiver": receiver.id,
            "accept_status": True,
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)

    def test_medical_record_view(self):
        url = "/appointments/medical_recorder/"
        patient = Patient.objects.create(
            email='sender@gmail.com',
            password="password",
            phone_number="09162345424"
        )
        psychologist_data = {
            'full_name': "reza",
            'medical_number': "2133123",
            'phone_number': "09233856333",
            'email': "2adsad@sadsad.com",
            'gender': "F",
            'password': "1234",
        }
        psychologist = Psychologist.objects.create(**psychologist_data)
        record = MedicalRecorder.objects.create(doctor=psychologist, patient=patient)
        data = {
            "id_psychologist": psychologist.id,
            "id_patient": patient.id
        }
        res = self.client.post(url, data)
        self.assertEqual(res.status_code, 200)
        self.assertIn("medical_record", res.data)
        self.assertIn("session_list", res.data)
