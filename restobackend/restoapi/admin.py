from django.contrib import admin
from unfold.admin import ModelAdmin
from django.contrib.auth.models import User
from .models import Event, EmailSignup, Product,ContactMessage,MenuItem,Reservation,JobApplication

@admin.action(description='Mark the selected items as Lunch')
def make_lunch(modeladmin, request, queryset):
    queryset.update(category='Lunch')

@admin.action(description='Mark the selected items as Dinner')
def make_dinner(modeladmin, request,queryset):
    queryset.update(category='Dinner')

@admin.action(description='Mark the selected items as Drinks')
def make_drinks(modeladmin, request, queryset):
    queryset.update(category='Drinks')


@admin.register(MenuItem)
class MenuItemAdmin(ModelAdmin):
    actions = [make_lunch, make_dinner, make_drinks]

@admin.register(Event)
class EventAdmin(ModelAdmin):
    pass

@admin.register(EmailSignup)
class EmailSignupAdmin(ModelAdmin):
    pass

@admin.register(Product)
class ProductAdmin(ModelAdmin):
    pass

@admin.register(ContactMessage)
class ContactMessageAdmin(ModelAdmin):
    pass

@admin.register(Reservation)
class ReservationAdmin(ModelAdmin):
    pass

@admin.register(JobApplication)
class JobApplicationAdmin(ModelAdmin):
    pass