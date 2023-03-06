from django.db import models

# Create your models here.

class Collector(models.Model):
    name = models.CharField(max_length=30, unique=True)
    status = models.BooleanField(null=False, default=False)

class Achievement(models.Model):
    collector = models.ForeignKey(Collector, on_delete=models.CASCADE)
    name = models.CharField(max_length=30, unique=True)
    description = models.CharField(max_length=160)
    max_level = models.IntegerField(null=False, default=1)
    max_score = models.IntegerField(null=False, default=1)
    created_at = models.DateTimeField(auto_now_add=True)

