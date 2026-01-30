from django.contrib import admin
from .models import Counter


@admin.register(Counter)
class CounterAdmin(admin.ModelAdmin):
    list_display = ['key', 'value', 'created_at', 'updated_at']
    list_filter = ['created_at', 'updated_at']
    search_fields = ['key']
    readonly_fields = ['created_at', 'updated_at']
