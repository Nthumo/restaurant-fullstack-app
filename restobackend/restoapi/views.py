from rest_framework import viewsets, generics
from django.contrib.auth.models import User
from rest_framework_simplejwt.tokens import RefreshToken
from .models import Event, EmailSignup, Product, ContactMessage, JobApplication, MenuItem, Reservation
from .serializers import (EventSerializer, EmailSignupSerializer, ProductSerializer, 
                          ContactMessageSerializer, JobApplicationSerializer, MenuItemSerializer,
                          ReservationSerializer, UserSerializer)
from rest_framework.permissions import IsAuthenticated, AllowAny
from .permissions import IsAdminOrReadOnly,IsAuthenticatedOrReadOnly


class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAdminOrReadOnly] #allow only the administrators to add events

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny] #allow anybody to signup

    def create(self, request, *args, **kwargs):
        response = super().create(request, *args, **kwargs)
        user = User.objects.get(username=response.data['username'])
        refresh = RefreshToken.for_user(user)
        response.data['refresh']=str(refresh)
        response.data['access'] = str(refresh.acces_token)
        return response

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminOrReadOnly]

class ContactMessageViewSet(viewsets.ModelViewSet):
    queryset = ContactMessage.objects.all()
    serializer_class = ContactMessageSerializer
    permission_classes = [AllowAny]  #allow anybody to send a message

class JobApplicationViewSet(viewsets.ModelViewSet):
    queryset = JobApplication.objects.all()
    serializer_class = JobApplicationSerializer
    permission_classes = [AllowAny] #allow anybody to make a job application

class MenuItemViewSet(viewsets.ModelViewSet):
    queryset = MenuItem.objects.all()
    serializer_class = MenuItemSerializer
    permission_classes = [IsAdminOrReadOnly] #allow only the administrator to add menu items

class ReservationViewSet(viewsets.ModelViewSet):
    queryset = Reservation.objects.all()
    serializer_class = ReservationSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]  #allow only the authenticated user can POST/make a reservation

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class EmailSignupViewSet(viewsets.ModelViewSet):
    queryset = EmailSignup.objects.all()
    serializer_class = EmailSignupSerializer
    permission_classes = [AllowAny]

#Create logout view to implement token blacklisting on logout
    