from django.urls import path
from .views import CollectorView

urlpatterns = [
    path('', CollectorView.as_view())
]
