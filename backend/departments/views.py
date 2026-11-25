from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import DepartmentSerializer
from .models import Department

# Create your views here.

@api_view(['GET'])
def department(request):
    departments = Department.objects.all()
    serializer = DepartmentSerializer(departments, many=True)

    return Response(serializer.data)