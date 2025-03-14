from django.urls import path
from django.conf import settings
from django.conf.urls.static import static
from .views import *
urlpatterns = [
    path('',home,name='home'),
    path('listing/<int:id>/',listing,name='listing'),
    path('property',property,name='property'),
    path('about',about,name='about'),
    path('contact',contact,name='contact'),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)