# 太阳系互动游戏 - 部署指南

## 🚀 快速分享给微信朋友的方法

### 方法1：GitHub Pages（推荐新手，免费+稳定）

#### 步骤1：注册GitHub账号
1. 访问 https://github.com/
2. 点击 "Sign up" 注册账号
3. 验证邮箱

#### 步骤2：创建新仓库
1. 点击右上角 "+" → "New repository"
2. Repository name: `solar-system-game`（任意名字）
3. 选择 "Public"（公开）
4. 点击 "Create repository"

#### 步骤3：上传文件
**方式A：通过网页上传（最简单）**
1. 在仓库页面点击 "uploading an existing file"
2. 拖拽 `solar-system-enhanced.html` 文件
3. 在 "Commit changes" 栏输入：`Initial commit`
4. 点击 "Commit changes"

**方式B：通过Git命令行**
```bash
cd /home/admin/clawd
git init
git add solar-system-enhanced.html
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/你的用户名/solar-system-game.git
git push -u origin main
```

#### 步骤4：启用GitHub Pages
1. 进入仓库页面
2. 点击 "Settings"（设置）
3. 左侧菜单找到 "Pages"
4. 在 "Build and deployment" 下选择：
   - Source: `Deploy from a branch`
   - Branch: `main` → `/ (root)`
5. 点击 "Save"
6. 等待1-2分钟，刷新页面，会看到类似：
   ```
   🌐 Your site is live at: https://你的用户名.github.io/solar-system-game/
   ```

#### 步骤5：在微信中分享
直接复制这个链接到微信：
```
https://你的用户名.github.io/solar-system-game/solar-system-enhanced.html
```

---

### 方法2：Vercel（最快，免费，全球CDN）

#### 步骤1：注册Vercel
1. 访问 https://vercel.com/
2. 点击 "Sign Up"
3. 用GitHub账号登录（推荐）

#### 步骤2：安装Vercel CLI
```bash
npm install -g vercel
```

#### 步骤3：部署
```bash
cd /home/admin/clawd
vercel login
# 按提示用GitHub登录
vercel --prod
# 按回车使用默认配置
# 部署完成后会显示：
# 📦 Preview: https://xxx.vercel.app
# 🌐 Production: https://xxx.vercel.app
```

#### 步骤4：在微信中分享
复制链接：
```
https://你的项目名.vercel.app/solar-system-enhanced.html
```

---

### 方法3：Cloudflare Pages（推荐，免费+国内访问快）

#### 步骤1：注册Cloudflare
1. 访问 https://pages.cloudflare.com/
2. 点击 "Create account" → 用GitHub或邮箱注册

#### 步骤2：创建项目
1. 点击 "Create a project"
2. 选择 "Upload assets"（上传文件）
3. 拖拽 `solar-system-enhanced.html` 文件
4. Project name: `solar-system-game`
5. 点击 "Create project"

#### 步骤3：获取链接
部署完成后会显示：
```
https://你的项目名.pages.dev
```
访问：`https://你的项目名.pages.dev/solar-system-enhanced.html`

---

## 📱 注册微信小程序详细步骤

### 一、注册小程序

#### 1. 准备材料
- 国内手机号（未注册过微信个人号）
- QQ邮箱或企业邮箱
- 身份证

#### 2. 开始注册
1. 访问：https://mp.weixin.qq.com/
2. 点击右上角 "立即注册"
3. 选择 "小程序"
4. 填写账号信息：
   ```
   账号名称：小学生科学实验室（建议包含关键词）
   小程序简介：通过互动游戏学习科学知识
   服务类目：教育 > 基础教育
   ```

#### 3. 选择主体类型
- **个人**：最简单，30元认证费
- **企业**：需要营业执照，300元认证费

#### 4. 实名认证
- 用微信扫码绑定管理员账号
- 填写管理员信息
- 进行人脸识别

### 二、使用Webview加载你的HTML

#### 1. 下载微信开发者工具
- 访问：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html
- 下载对应系统版本

#### 2. 创建小程序项目
1. 打开微信开发者工具
2. 点击 "+" 创建项目
3. AppID：在微信公众平台 → 开发 → 开发管理 → 开发者ID
4. 项目名称：`solar-system-game`
5. 开发模式：小程序
6. 后端服务：不使用云服务

#### 3. 配置业务域名
1. 登录微信公众平台
2. 开发 → 开发管理 → 开发设置 → 业务域名
3. 添加你的域名（必须HTTPS）：
   ```
   你的用户名.github.io
   或
   你的项目名.vercel.app
   ```

#### 4. 编写小程序代码

创建以下文件结构：
```
solar-system-game/
├── app.js
├── app.json
├── app.wxss
└── pages/
    └── index/
        ├── index.js
        ├── index.wxml
        ├── index.wxss
        └── index.json
```

**app.json**:
```json
{
  "pages": [
    "pages/index/index"
  ],
  "window": {
    "navigationBarTitleText": "太阳系探险"
  }
}
```

**app.js**:
```javascript
App({
  onLaunch() {
    console.log('小程序启动');
  }
});
```

**pages/index/index.js**:
```javascript
Page({
  data: {
    url: 'https://你的用户名.github.io/solar-system-game/solar-system-enhanced.html'
  },

  onLoad() {
    // 可以在这里处理参数
  },

  onShareAppMessage() {
    return {
      title: '来玩太阳系探险游戏！',
      path: '/pages/index/index'
    };
  }
});
```

**pages/index/index.wxml**:
```html
<view class="container">
  <web-view src="{{url}}"></web-view>
</view>
```

**pages/index/index.wxss**:
```css
.container {
  width: 100%;
  height: 100vh;
}
```

#### 5. 上传发布
1. 在开发者工具中点击 "上传"
2. 填写版本号和项目备注
3. 登录微信公众平台：版本管理 → 开发版本
4. 点击 "提交审核"
5. 审核通过后点击 "发布"

---

## 📝 公众号中推广小程序

### 方法1：文章中插入小程序卡片

在编辑公众号文章时：
1. 点击工具栏的 "小程序" 图标
2. 搜索你的小程序名称
3. 选择小程序路径：`pages/index/index`
4. 设置小程序标题和描述

### 方法2：使用超链接（需配置白名单）

1. 公众号后台 → 设置 → 公众号设置 → 功能设置
2. 在 "JS接口安全域名" 中添加你的域名
3. 在文章中插入链接（但仍会被微信拦截）

---

## 💡 推荐方案对比

| 方案 | 优点 | 缺点 | 适用场景 |
|------|------|------|----------|
| **GitHub Pages** | 免费、稳定、无需审核 | 国内访问较慢 | 个人博客、快速分享 |
| **Vercel** | 全球CDN、部署快 | 国内访问一般 | 面向国际用户 |
| **Cloudflare Pages** | 免费且国内快 | 需要注册 | 国内用户首选 |
| **微信小程序** | 无缝微信生态、可分享 | 需要审核、开发成本高 | 长期运营 |
| **H5链接** | 灵活 | 微信内体验差 | 非微信环境 |

---

## 🎯 我的建议

### 立即可用（今天）：
✅ 用GitHub Pages部署HTML
✅ 获得HTTPS链接，直接微信分享

### 短期规划（1周）：
✅ 注册个人小程序（30元）
✅ 用web-view加载HTML
✅ 朋友搜索小程序名即可体验

### 长期规划（1-3个月）：
✅ 学习Taro框架
✅ 转换为原生小程序
✅ 申请认证，开通支付功能
✅ 接入你现有的Python后端

---

## 🔧 常见问题

### Q: 域名需要备案吗？
A:
- GitHub Pages、Vercel：不需要
- 国内服务器（阿里云、腾讯云）：需要
- Cloudflare Pages：不需要

### Q: 微信小程序web-view有限制吗？
A:
- 必须HTTPS域名
- 域名需要在小程序后台配置
- 无法使用微信支付
- 性能不如原生

### Q: 个人小程序和企业小程序有什么区别？
A:
- 个人：30元/年，无法开通支付
- 企业：300元/年，可开通支付，更多API权限

### Q: 已冻结的公众号怎么办？
A:
- 先尝试申诉解冻
- 如果解冻失败，用家人身份证注册新号
- 但建议直接注册小程序，更灵活

---

## 📞 需要帮助？

如果部署过程中遇到问题，告诉我具体在哪一步卡住了，我会帮你解决！
