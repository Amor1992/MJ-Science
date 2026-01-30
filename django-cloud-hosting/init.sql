-- 初始化脚本（如果需要）
-- Django会自动创建表结构，无需手动执行此脚本

-- 创建数据库（如果尚未创建）
CREATE DATABASE IF NOT EXISTS mydb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

USE mydb;

-- 计数器表示例（会被Django自动创建）
-- CREATE TABLE IF NOT EXISTS counter (
--     id BIGINT AUTO_INCREMENT PRIMARY KEY,
--     key VARCHAR(100) UNIQUE NOT NULL,
--     value INT DEFAULT 0,
--     created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
--     updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
--     INDEX idx_key (key)
-- ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
