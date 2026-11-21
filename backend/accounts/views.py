from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegisterSerializer, TeacherRegisterSerializer
from .models import Register, TeacherRegister

# Create your views here.

@api_view(['POST'])
def student_register(request):
    serializer = RegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration successful"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def student_login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user = Register.objects.get(username=username)
    except Register.DoesNotExist:
        return Response({"message": "Invalid Username"}, status=status.HTTP_400_BAD_REQUEST)

    if user.password != password:
        return Response({"message": "Invalid Password"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "Login Successful"}, status=status.HTTP_200_OK)

@api_view(['POST'])
def teacher_register(request):
    serializer = TeacherRegisterSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({"message": "Registration Successful"}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['POST'])
def teacher_login(request):
    username = request.data.get("username")
    password = request.data.get("password")

    try:
        user =  TeacherRegister.objects.get(username=username)
    except TeacherRegister.DoesNotExist:
        return Response({"message": "Invalid Username"}, status=status.HTTP_400_BAD_REQUEST)
    if user.password != password:
        return Response({"message": "Invalid Password"}, status=status.HTTP_400_BAD_REQUEST)

    return Response({"message": "Login Successful"}, status=status.HTTP_200_OK)