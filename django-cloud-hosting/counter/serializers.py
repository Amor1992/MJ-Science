from rest_framework import serializers
from .models import Counter


class CounterSerializer(serializers.ModelSerializer):
    """计数器序列化器"""

    class Meta:
        model = Counter
        fields = ['key', 'value', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
