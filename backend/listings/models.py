from django.db import models
from django.utils import timezone

# Create your models here.
class listing(models.Model):
    title = models.CharField(max_length=150)
    description = models.TextField(null=True,blank=True)
    choices_area = (
        ('Inner London','Inner London'),
        ('Outer London','Outer London'),
    )
    area = models.CharField(max_length=20,blank=True,null=True,choices=choices_area)
    borough = models.CharField(max_length=50,blank=True,null=True)
    choices_listing_type = (
        ('House','House'),
        ('Apartment','Apartment'),
        ('Office','Office'),
    )
    listing_type = models.CharField(max_length=20,choices=choices_listing_type)
    choices_property_status = (
        ('Sale,Sale'),
        ('Rent,Rent')
    )
    property_status = models.CharField(max_length=20,blank=True,null=True,choices=choices_property_status)
    price = models.DecimalField( max_digits=50,decimal_places=0)
    choices_rental_frequency = (
        ('Month','Month'),
        ('Week','Week'),
        ('Day','Day'),
    )
    rental_frequency = models.CharField(max_length=20,blank=True,null=True,choices=choices_area)
    rooms = models.IntegerField(blank=True,null=True)
    furnished = models.BooleanField(default=False)
    pool = models.BooleanField(default=False)
    elevator = models.BooleanField(default=False)
    cctv = models.BooleanField(default=False)
    parking = models.BooleanField(default=False)
    date_posting = models.DateTimeField(default=timezone.now)

