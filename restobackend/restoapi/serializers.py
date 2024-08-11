from rest_framework import serializers
from django.contrib.auth.models import User
from .models import MenuItem,EmailSignup,Event,ContactMessage,JobApplication,Product,Reservation


class MenuItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = MenuItem
        fields = '__all__'

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
        extra_kwargs = {'password': {'write_only': True}}
    def create(self, validated_data):
        user = User.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password']
        )
        return user

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = ['title', 'description', 'location']

    def create(self, validated_data):
        event = Event.objects.create(**validated_data)
        return event

class ContactMessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ContactMessage
        fields = '__all__'

class JobApplicationSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobApplication
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Reservation
        fields = '__all__'
        read_only_field = ['user']
    
    def creat(self, validated_data):
        request = self.context.get('request')
        user = request.user
        return Reservation.objects.create(user=user, **validated_data)
    

class EmailSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = EmailSignup
        fields = ['first_name', 'second_name', 'email']