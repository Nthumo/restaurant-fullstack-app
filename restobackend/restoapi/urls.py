from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import(EventViewSet, MenuItemViewSet, EmailSignupViewSet, ProductViewSet,
                 ContactMessageViewSet, ReservationViewSet, JobApplicationViewSet, UserViewSet)
from django.conf.urls.static import static
from django.conf import settings

router = DefaultRouter()
router.register(r'menu-items', MenuItemViewSet)
router.register(r'events', EventViewSet)
router.register(r'register', UserViewSet)
router.register(r'products', ProductViewSet)
router.register(r'contact-messages', ContactMessageViewSet)
router.register(r'reservations', ReservationViewSet)
router.register(r'job-application', JobApplicationViewSet)
router.register(r'email-signup', EmailSignupViewSet)

urlpatterns = [
    path('', include(router.urls)),
    #path('create-product/', ProductView.as_view(), name="product"),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)