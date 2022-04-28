from django.test import TestCase

from rest_framework import status
from rest_framework.test import APITestCase
from rest_framework.test import APIClient

from .models import Task

# Create your tests here.

class TaskModelTestCase(TestCase):
    def setUp(self):
        self.task = Task.objects.create(
            name="Buy potatoes",
            description="Buy the potatoes Joe requested.",
            importance="HI",
            is_completed=False
        )
        self.task_without_description = Task.objects.create(
            name="Buy potatoes",
            importance="HI",
            is_completed=False
        )

    def test_creating_task(self):
        self.assertEqual(self.task.name, "Buy potatoes")
        self.assertEqual(self.task.description, 
                        "Buy the potatoes Joe requested.")
        self.assertEqual(self.task.importance, "HI")
        self.assertEqual(self.task.is_completed, False)

    def test_creating_task_without_description(self):
        self.assertEqual(self.task_without_description.description, "")

    def test_changing_state(self):
        self.task.is_completed = True

        self.assertEqual(self.task.is_completed, True)

class TaskAPITestCase(APITestCase):
    def setUp(self):
        self.task = Task.objects.create(
            name="Buy potatoes",
            importance="HI",
            is_completed=False
        )
        self.client = APIClient()

    def test_get_list(self):
        response = self.client.get('/api/tasks/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_post(self):
        response = self.client.post('/api/tasks/', {
            "name": "Buy potatoes",
            "description": "",
            "importance": "LO",
            "is_completed": False
        }, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_get_detail(self):
        response = self.client.get('/api/tasks/1/')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_put(self):
        response = self.client.put('/api/tasks/1/', {
            "name": "Buy potatoes",
            "description": "",
            "importance": "LO",
            "is_completed": False
        }, format='json')

        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_delete(self):
        response = self.client.delete('/api/tasks/1')

        self.assertEqual(response.status_code, status.HTTP_301_MOVED_PERMANENTLY)
