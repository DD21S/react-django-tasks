from django.db import models

# Create your models here.

class Task(models.Model):

    class Meta:
        verbose_name = "Task"
        verbose_name_plural = "Tasks"

    def __str__(self):
        return self.name

    LOW = 'LO'
    MEDIUM = 'MD'
    HIGH = 'HI'
    IMPORTANCE_CHOICES = [
        (LOW, 'Low'),
        (MEDIUM, 'Medium'),
        (HIGH, 'High'),
    ]

    name = models.CharField(max_length=30)
    description=models.TextField(max_length=100, blank=True)
    importance = models.CharField(
        max_length=2,
        choices=IMPORTANCE_CHOICES,
        default=LOW,
    )
    is_completed=models.BooleanField(default=False)
