from django.shortcuts import render
from rest_framework import generics
from .serializers import CollectorSerializer
from .models import Collector

# Create your views here.
# class CollectorView(generics.ListAPIView):
class CollectorView(generics.ListCreateAPIView):
    queryset = Collector.objects.all()
    serializer_class = CollectorSerializer
