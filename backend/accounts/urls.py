from django.urls import path
from .views import student_register, student_login, teacher_register, teacher_login

urlpatterns = [
    path('student/register/', student_register, name="student_register"),
    path('student/login/', student_login, name="student_login"),
    path('teacher/register/', teacher_register, name="teacher_register"),
    path('teacher/login/', teacher_login, name="teacher_login"),
]