# 使用官方Python运行时
FROM python:3.11-slim

# 设置工作目录
WORKDIR /app

# 安装系统依赖
RUN apt-get update && apt-get install -y \
    default-libmysqlclient-dev \
    pkg-config \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# 复制依赖文件
COPY requirements.txt .

# 安装Python依赖
RUN pip install --no-cache-dir -r requirements.txt

# 复制项目文件
COPY . .

# 收集静态文件
RUN python manage.py collectstatic --noinput

# 暴露端口（云托管会自动配置）
EXPOSE 8080

# 使用gunicorn启动
CMD ["gunicorn", "mysite.wsgi:application", "--bind", "0.0.0.0:8080", "--workers", "2"]
