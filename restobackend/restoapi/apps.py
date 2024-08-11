from django.apps import AppConfig


class RestoapiConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'restoapi'

    def read(self):
        import restoapi.signals