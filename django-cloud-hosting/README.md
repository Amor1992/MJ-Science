# Django 计数器 API - 微信云托管

这是一个简单的Django计数器API，用于微信小程序后端服务，支持MySQL数据库读写。

## 📦 功能特性

- ✅ 计数器增减操作
- ✅ 多个独立计数器（通过key区分）
- ✅ 重置和设置指定值
- ✅ RESTful API设计
- ✅ 支持微信云托管MySQL

## 🚀 快速开始

### 1. 本地开发

```bash
# 安装依赖
pip install -r requirements.txt

# 配置环境变量
cp .env.example .env
# 编辑.env文件，填入你的数据库配置

# 执行数据库迁移
python manage.py makemigrations
python manage.py migrate

# 创建超级用户（可选）
python manage.py createsuperuser

# 运行开发服务器
python manage.py runserver
```

### 2. API接口

#### 获取计数（GET请求）
```
GET /api/count?key=default&action=get
```

响应：
```json
{
  "code": 0,
  "msg": "success",
  "data": {
    "key": "default",
    "value": 5,
    "updated_at": "2024-01-30 10:30:00"
  }
}
```

#### 增加计数（POST请求）
```
POST /api/count
Content-Type: application/json

{
  "action": "inc",
  "key": "default"
}
```

#### 减少计数
```json
{
  "action": "dec",
  "key": "default"
}
```

#### 重置计数
```json
{
  "action": "reset",
  "key": "default"
}
```

#### 设置指定值
```json
{
  "action": "set",
  "key": "default",
  "value": 100
}
```

### 3. 微信小程序调用

```javascript
// 增加计数
wx.cloud.callContainer({
  config: {
    env: 'prod-8gzcmg9d2da78ad2'
  },
  path: '/api/count',
  header: {
    'X-WX-SERVICE': 'django-51zq',
    'Content-Type': 'application/json'
  },
  method: 'POST',
  data: {
    action: 'inc',
    key: 'default'
  },
  success(res) {
    console.log('计数结果:', res.data);
  },
  fail(err) {
    console.error('请求失败:', err);
  }
});
```

## 🏗️ 部署到微信云托管

### 方式1：通过控制台部署

1. 登录[微信云托管控制台](https://console.cloud.tencent.com/tcb)
2. 选择你的环境：`prod-8gzcmg9d2da78ad2`
3. 点击"新建服务"
4. 服务名称：`django-51zq`
5. 选择"代码仓库"或"直接上传代码包"
6. 配置环境变量：
   ```
   DJANGO_SECRET_KEY=your-secret-key
   DEBUG=False
   ALLOWED_HOSTS=*
   MYSQL_HOST=your-mysql-host
   MYSQL_PORT=3306
   MYSQL_DATABASE=mydb
   MYSQL_USERNAME=your-username
   MYSQL_PASSWORD=your-password
   ```
7. 端口配置：`8080`
8. 点击"部署"

### 方式2：使用CLI工具

```bash
# 安装云托管CLI
npm install -g @cloudbase/cli

# 登录
cloudbase login

# 部署
cloudbase deploy
```

### 自动执行数据库迁移

云托管支持在容器启动时执行命令。可以在Dockerfile中添加：

```dockerfile
# 启动前执行迁移
CMD sh -c "python manage.py migrate --noinput && gunicorn mysite.wsgi:application --bind 0.0.0.0:8080 --workers 2"
```

## 📊 数据库管理

### 使用Django Admin

1. 创建超级用户：
```bash
python manage.py createsuperuser
```

2. 访问：`https://your-domain.com/admin`
3. 登录后可以管理计数器数据

### 查看数据库

```sql
-- 查看所有计数器
SELECT * FROM counter;

-- 查看特定计数器
SELECT * FROM counter WHERE key = 'default';

-- 重置计数器
UPDATE counter SET value = 0 WHERE key = 'default';
```

## 🔧 配置说明

### 环境变量

| 变量名 | 说明 | 必填 | 默认值 |
|--------|------|------|--------|
| DJANGO_SECRET_KEY | Django密钥 | 是 | - |
| DEBUG | 调试模式 | 否 | False |
| ALLOWED_HOSTS | 允许的域名 | 否 | * |
| MYSQL_HOST | MySQL主机地址 | 是 | - |
| MYSQL_PORT | MySQL端口 | 否 | 3306 |
| MYSQL_DATABASE | 数据库名称 | 是 | - |
| MYSQL_USERNAME | 数据库用户名 | 是 | - |
| MYSQL_PASSWORD | 数据库密码 | 是 | - |

### 云托管MySQL配置

1. 在微信云托管控制台创建MySQL实例
2. 获取连接信息：
   - 内网地址：`xxx.mysql.tcloudbase.com`
   - 端口：`3306`
   - 数据库名：`mydb`
   - 用户名：`root`
   - 密码：在控制台设置
3. 将这些信息配置到环境变量中

## 📝 项目结构

```
django-cloud-hosting/
├── manage.py              # Django管理脚本
├── requirements.txt        # Python依赖
├── Dockerfile              # Docker镜像配置
├── .dockerignore          # Docker忽略文件
├── .env.example           # 环境变量模板
├── init.sql               # 初始化SQL
├── mysite/                # Django项目配置
│   ├── __init__.py
│   ├── settings.py        # 项目设置
│   ├── urls.py           # URL路由
│   └── wsgi.py           # WSGI配置
└── counter/               # 计数器应用
    ├── __init__.py
    ├── apps.py
    ├── models.py         # 数据模型
    ├── views.py          # API视图
    ├── urls.py           # URL配置
    ├── serializers.py    # 序列化器
    └── admin.py          # Admin配置
```

## 🎯 使用场景

### 1. 页面访问计数
```javascript
wx.cloud.callContainer({
  path: '/api/count',
  method: 'POST',
  data: {
    action: 'inc',
    key: 'page_views'
  }
});
```

### 2. 用户互动统计
```javascript
// 点赞
wx.cloud.callContainer({
  path: '/api/count',
  method: 'POST',
  data: {
    action: 'inc',
    key: `post_${postId}_likes`
  }
});
```

### 3. 游戏分数记录
```javascript
// 保存最高分
wx.cloud.callContainer({
  path: '/api/count',
  method: 'POST',
  data: {
    action: 'set',
    key: `user_${userId}_highscore`,
    value: score
  }
});
```

## 🐛 常见问题

### Q: 部署后无法访问数据库？
A: 检查环境变量是否正确配置，特别是数据库地址和密码。

### Q: 如何查看日志？
A: 在微信云托管控制台的"日志"中查看容器日志。

### Q: 如何进行数据库迁移？
A: 方式1：在部署时添加启动命令自动迁移；方式2：进入容器手动执行迁移。

### Q: API返回500错误？
A: 查看控制台日志，可能是数据库连接失败或代码错误。

## 📞 技术支持

如有问题，请查看：
- [微信云托管文档](https://cloud.tencent.com/document/product/1243)
- [Django官方文档](https://docs.djangoproject.com/)
- [Django REST Framework文档](https://www.django-rest-framework.org/)

## 📄 License

MIT
