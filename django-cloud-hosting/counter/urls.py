from django.urls import path
from .views import counter_view

urlpatterns = [
    path('count', counter_view, name='counter'),
]
