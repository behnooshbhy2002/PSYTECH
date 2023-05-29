from django.contrib.auth import get_user_model
from django.test import TestCase

from accounts.models import Psychologist, Disease

User = get_user_model()


class TestPsycho(TestCase):
    def setUp(self):
        self.disease_1 = Disease.objects.create(title='disease 1')
        self.disease_2 = Disease.objects.create(title='disease 2')
        self.disease_3 = Disease.objects.create(title='disease 3')
        simple_psychologists = [
            {
                "email": "email",
                "password": "password",
                "full_name": "psychologist",
                "phone_number": "09121234567",
                "is_verified": True,
                "gender": "F",
                "is_active": True,
                "medical_number": "123123",
                "specialist": "12312321",
                "rate": 1.5,
                "rate_counter": 2,
                "diseases": self.disease_1,
                "address": "address",
                "experience": 15,
            },
            {
                "email": "email2",
                "password": "passwo2rd",
                "full_name": "psycholo2gist",
                "phone_number": "19121234567",
                "is_verified": True,
                "gender": "F",
                "is_active": True,
                "medical_number": "123123",
                "specialist": "12312321",
                "rate": 1.5,
                "rate_counter": 2,
                "diseases": self.disease_2,
                "address": "address",
                "experience": 15,
            },
            {
                "email": "em3ail",
                "password": "passw3ord",
                "full_name": "psychologist3",
                "phone_number": "39121234567",
                "is_verified": True,
                "gender": "M",
                "is_active": True,
                "medical_number": "123123",
                "specialist": "12312321",
                "rate": 1.5,
                "rate_counter": 2,
                "diseases": self.disease_3,
                "address": "address",
                "experience": 15,
            },
            {
                "email": "email4",
                "password": "password4",
                "full_name": "psychologist4",
                "phone_number": "49121234567",
                "is_verified": True,
                "gender": "M",
                "is_active": False,
                "medical_number": "123123",
                "specialist": "12312321",
                "rate": 1.5,
                "rate_counter": 2,
                "diseases": self.disease_2,
                "address": "address",
                "experience": 15,
            },
        ]
        for psychologist in simple_psychologists:
            disease = psychologist.pop("diseases", None)
            obj = Psychologist.objects.create(**psychologist)
            obj.diseases.add(disease)
            obj.save()

    def test_get_psychologist_list_unauthorization_success(self):
        url = "/accounts/psychologists_list/"
        res = self.client.get(url)
        self.assertTrue(res.status_code == 200)

    def test_get_psychologist_list_success(self):
        url = "/accounts/psychologists_list/"
        res = self.client.get(url)
        self.assertTrue(res.status_code == 200)
        self.assertTrue(Psychologist.objects.filter(is_active=True).count() == len(res.data))

    def test_get_psychologist_search_unauthorization_success(self):
        url = f"/accounts/search_psychologist/?searchParams={self.disease_1.id}"
        res = self.client.get(url)
        self.assertTrue(res.status_code == 200)

    def test_get_psychologist_search_success(self):
        url = f"/accounts/search_psychologist/?searchParams={self.disease_1.id}"
        res = self.client.get(url)
        self.assertTrue(res.status_code == 200)
        self.assertTrue(
            Psychologist.objects.filter(diseases__id=self.disease_1.id, is_active=True).count() == len(res.data)
        )

    def test_post_psychologist_filter_unauthorization_success(self):
        url = f"/accounts/filter_psychologist/"
        data = {
            "disease_id": self.disease_1.id
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)

    def test_post_psychologist_filter_success(self):
        url = f"/accounts/filter_psychologist/"
        data = {
            "disease_id": self.disease_1.id
        }
        res = self.client.post(url, data)
        self.assertTrue(res.status_code == 200)
        self.assertTrue(
            Psychologist.objects.filter(diseases__id=self.disease_1.id, is_active=True).count() == len(res.data)
        )

    def test_get_psychologist_active_success(self):
        url = f"/accounts/active_psychologist/"
        res = self.client.get(url)
        self.assertTrue(res.status_code == 200)
        self.assertTrue(
            Psychologist.objects.filter(is_active=False).count() == len(res.data)
        )

    def test_post_psychologist_active_success(self):
        url = f"/accounts/active_psychologist/"
        psy = Psychologist.objects.first()
        psy.is_active = False
        psy.save()
        data = {
            "pk": psy.id
        }
        res = self.client.post(url,data)
        self.assertTrue(res.status_code == 200)
        psy.refresh_from_db()
        self.assertTrue(psy.is_active)
