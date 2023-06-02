from django.contrib.auth import get_user_model
from django.test import TestCase

from accounts.models import Psychologist
from appointments.models import Request

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
        sender = User.objects.create(
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

        request = Request.objects.create(sender=sender, receiver=psychologist, accept_status=True)

        url = f"/appointments/request_list/?id={psychologist.id}"
        res = self.client.get(url)
        self.assertEqual(res.status_code, 200)
        self.assertEqual(len(res.data), Request.objects.filter(receiver=psychologist).count())

    def test_submit_request(self):
        url = "/appointments/request_list/"
        sender = User.objects.create(
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
