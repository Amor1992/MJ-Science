from django.db import models


class Counter(models.Model):
    """
    计数器模型
    用于存储不同类型的计数值
    """
    key = models.CharField(max_length=100, unique=True, verbose_name='计数器键')
    value = models.IntegerField(default=0, verbose_name='计数值')
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='创建时间')
    updated_at = models.DateTimeField(auto_now=True, verbose_name='更新时间')

    class Meta:
        db_table = 'counter'
        verbose_name = '计数器'
        verbose_name_plural = '计数器'

    def __str__(self):
        return f'{self.key}: {self.value}'
