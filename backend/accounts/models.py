from django.db import models

# Create your models here.

class Register(models.Model):
    username = models.CharField(max_length=200, unique=True)
    fullname = models.CharField(max_length=200)
    fathername = models.CharField(max_length=200)
    mothername = models.CharField(max_length=200)
    email = models.EmailField(max_length=254, unique=True)
    dob = models.DateField()
    GENDER_CHOICES = [("male", "Male"), ("female", "Female"), ("others", "Others")]
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username

class TeacherRegister(models.Model):
    username = models.CharField(max_length=200, unique=True)
    fullname = models.CharField(max_length=200)
    email = models.CharField(max_length=200, unique=True)
    dob = models.DateField()
    GENDER_CHOICES = [("male", "Male"), ("female", "Female"), ("others", "Others")]
    gender = models.CharField(max_length=50, choices=GENDER_CHOICES)
    SUBJECT_CHOICES = [("tamil", "Tamil"), ("english", "English"), ("maths", "Maths"), ("science", "Science"), ("social", "Social")]
    subject = models.CharField(max_length=50, choices=SUBJECT_CHOICES)
    password = models.CharField(max_length=50)

    def __str__(self):
        return self.username