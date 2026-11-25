from django.urls import path
from .views import department

urlpatterns = [
    path("", department, name="department")
]