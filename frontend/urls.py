from django.urls.conf import path


from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('customer',index),
    path('librarian',index),
    
]
