from django.contrib import admin
from api.migrations.models import Product
from api.migrations.models import Category

admin.site.register(Product)
admin.site.register(Category)