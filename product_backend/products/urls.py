from django.urls import path
from .views import RegisterView, LoginView, ProductListView

urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('products_list/', ProductListView.as_view(), name='product-list'),
]
