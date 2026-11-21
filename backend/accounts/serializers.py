from rest_framework import serializers
from .models import Register, TeacherRegister

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Register
        fields = "__all__"

class TeacherRegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeacherRegister
        fields = "__all__"