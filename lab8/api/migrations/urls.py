from django.contrib import admin
from django.urls import path, include
from . import views as main_views
from api.migrations import views as api_views

urlpatterns = [
    path('products/', api_views.product_list),
    path('products/<int:product_id>/', api_views.product_detail),
    path('categories/', api_views.category_list),
    path('categories/<int:category_id>/', api_views.category_detail),
    path('categories/<int:category_id>/products', api_views.products_by_category),
]
