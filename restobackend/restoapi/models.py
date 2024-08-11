from typing import Any
from django.db import models
from django.contrib.auth.models import User


class MenuItem(models.Model):
    CATEGORY_CHOICES = [
        ('Lunch', 'Lunch'),
        ('Dinner', 'Dinner'),
        ('Drinks', 'Drinks')
    ]

    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=6, decimal_places=2, default=0)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)

    def __str__(self):
        return self.name
    
class Event(models.Model):
    title = models.CharField(max_length=100, verbose_name='event')
    description = models.TextField()
    image = models.ImageField(upload_to='events/')
    date = models.DateField()
    time = models.TimeField()
    location = models.TextField(max_length=100)

    def __str__(self):
        return f"{self.title} on {self.date} at {self.location}"
    
class Product(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    image = models.ImageField(upload_to='products/')
    price = models.DecimalField(max_digits=6, decimal_places=2)
    stock = models.IntegerField()

    def __str__(self):
        return self.name
    
class Reservation(models.Model):
    NUMBER_OF_PEOPLE = [
        (1, '1 person'),
        (2, '2 people'),
        (3, '3 people'),
        (4, '4 people'),
        (5, '5 people'),
        (6, '6 people'),
        (7, '7 people'),
        (8, '8 people'),
        (9, '9 people'),
        (10, '10+ people'),
    ]

    user = models.ForeignKey(User,on_delete=models.CASCADE)
    number_of_people = models.IntegerField(choices=NUMBER_OF_PEOPLE)
    reservation_date = models.DateField()
    
    def __str__(self):
        return f"{self.user.username} - {self.reservation_date} {self.reservation_time} for {self.number_of_people} people"
    

class JobApplication(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    cover_letter = models.TextField()
    resume = models.FileField(upload_to='resumes/')
    application = models.FileField(upload_to='application/')

    def __str__(self):
        return f"Application from {self.name}"
    
class ContactMessage(models.Model):
    GENERAL_INQUIRY = '1'
    PRESS_INQUIRY = '2'
    REASONS = [
        (GENERAL_INQUIRY, 'General_Inquiry'),
        (PRESS_INQUIRY, 'Press_Inquiry'),
    ]
        
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone_number = models.CharField(max_length=15)
    reason = models.CharField(max_length=2, choices=REASONS, default=GENERAL_INQUIRY)
    message = models.TextField()

    def __str__(self):
        return f"Message from {self.name}"
    
class EmailSignup(models.Model):
    first_name = models.CharField(max_length=100)
    second_name = models.CharField(max_length=100)
    email = models.EmailField()
    signup_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.email
