from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods
import json
from .models import Counter


@csrf_exempt
@require_http_methods(["POST", "GET"])
def counter_view(request):
    """
    计数器API接口

    支持的action:
    - inc: 增加计数
    - dec: 减少计数
    - get: 获取当前值（GET请求或POST with action=get）
    - reset: 重置计数器
    - set: 设置指定值（需要value参数）
    """
    result = {'code': 0, 'msg': 'success', 'data': None}

    try:
        # 获取计数器键（默认为'default'）
        if request.method == 'GET':
            counter_key = request.GET.get('key', 'default')
            action = request.GET.get('action', 'get')
        else:
            data = json.loads(request.body)
            counter_key = data.get('key', 'default')
            action = data.get('action', 'inc')

        # 获取或创建计数器
        counter, created = Counter.objects.get_or_create(
            key=counter_key,
            defaults={'value': 0}
        )

        # 执行相应操作
        if action == 'inc':
            counter.value += 1
            counter.save()
            result['msg'] = '计数成功'

        elif action == 'dec':
            counter.value -= 1
            counter.save()
            result['msg'] = '减计成功'

        elif action == 'get':
            pass  # 只获取值，不修改

        elif action == 'reset':
            counter.value = 0
            counter.save()
            result['msg'] = '重置成功'

        elif action == 'set':
            new_value = data.get('value', 0)
            counter.value = int(new_value)
            counter.save()
            result['msg'] = '设置成功'

        else:
            result['code'] = 400
            result['msg'] = f'未知的action: {action}'
            return JsonResponse(result, status=400)

        # 返回结果
        result['data'] = {
            'key': counter.key,
            'value': counter.value,
            'updated_at': counter.updated_at.strftime('%Y-%m-%d %H:%M:%S')
        }

        return JsonResponse(result)

    except Exception as e:
        result['code'] = 500
        result['msg'] = str(e)
        return JsonResponse(result, status=500)
