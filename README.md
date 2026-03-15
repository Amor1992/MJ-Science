# 🧪 MJ-Science - 互动科学实验平台
> amorMJ 专属为了孩子们创作
> 为一二年级孩子设计的互动式科学实验学习平台，基于 PhET Interactive Simulations 设计理念

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![GitHub stars](https://img.shields.io/github/stars/Amor1992/MJ-Science?style=social)](https://github.com/Amor1992/MJ-Science/stargazers)

## ✨ 特性

### 🎮 核心功能
- **互动实验**：拖拽、点击、滑动等直观交互
- **实时反馈**：即时响应，强化因果认知
- **游戏化学习**：收集星星、挑战模式、成就系统
- **进度保存**：localStorage 自动保存学习进度
- **响应式设计**：支持桌面和移动设备（iPad、手机）

### 🎨 最新优化
- **统一 UI 设计风格**：卡片式布局、圆角、半透明效果
- **星星奖励系统**：完成挑战获得星星，激励学习
- **进度追踪**：自动保存学习进度和成就
- **完整音效系统**：实时音效生成，增强沉浸感
- **挑战模式**：目标驱动学习，培养目标感
- **响应式设计**：完美支持桌面、平板和手机

### 📚 已实现实验（10个）+ 1个游戏

#### 🚀 天文科学
- **[太阳系探险](astronomy/solar-system-enhanced.html)** ⭐⭐⭐
  - 拖拽行星到正确轨道
  - 学习太阳系结构和开普勒定律
  - 微观视角：行星运动和轨迹显示
  - 支持实验模式和慢动作

#### ⚡ 物理科学
- **[平衡跷跷板](physics/balancing-act.html)** ⭐⭐⭐
  - 通过跷跷板游戏学习平衡、力矩和杠杆原理
  - 实时力矩对比面板（左侧 vs 右侧）
  - 拖拽不同质量物体到跷跷板
  - 完美平衡时获得星星奖励
  - 支持 6 个砝码物体

- **[力与运动基础](physics/forces-motion.html)** ⭐⭐⭐
  - 拔河比赛：调整双方人数和推力，实时速度表
  - 推箱子：施加推力，调节摩擦系数，选择不同表面
  - 支持5种表面：冰面、木板、沙地、地毯、橡胶
  - 实时显示净力、加速度、速度

#### 🔢 数学科普
- **[面积建造者](mathematics/area-builder.html)** ⭐⭐⭐
  - 用彩色方块自由搭建形状
  - 实时计算面积和周长
  - 方块序号显示，清晰看到计数过程
  - 挑战模式：完成指定面积目标
  - 进度条和接近目标提示

- **[分数配对](mathematics/fraction-matcher.html)** ⭐⭐⭐
  - 配对相同大小的分数图形或数字
  - 8个难度等级
  - 学习等价分数：1/2 = 2/4 = 3/6
  - 支持图形和数字两种表示方式

- **[建造分数](mathematics/build-fraction.html)** ⭐⭐
  - 8个关卡，每个目标不同的分数值
  - 用彩色积木建造出目标分数（圆形、扇形）
  - 学习分数组成：1/2, 1/4, 1/3, 2/3, 1/5, 2/5, 3/5, 1/10
  - 实时显示已选积木的总和
  - 实时比较与目标分数的大小关系
  - 友好的提示系统，解释每关的目标
  - 可多次选择积木，点击"检查"按钮验证

- **[分数入门](mathematics/fractions-intro.html)** ⭐⭐（开发中）
  - 通过分披萨、分巧克力等生活场景理解分数
  - 图形 + 数字 + 文字三重显示

#### ⚡ 电学实验
- **[气球与静电](electricity/balloons-static.html)** ⭐⭐⭐
  - 拖拽气球在毛衣上摩擦产生静电
  - 观察气球吸引墙壁或排斥其他气球
  - 微观视角：电荷分布可视化（正负离子）
  - 三个挑战任务：摩擦毛衣、贴到墙壁、让气球互相排斥
  - 实时电量显示和物理效果
  - 学习同种电荷相斥、异种电荷相吸

#### 🧊 物质科学
- **[物质状态基础](matter/states-of-matter.html)** ⭐⭐⭐
  - 观察物质在固态、液态、气态下的行为
  - 三种物质：水、氖、氧（不同的熔点和沸点）
  - 温度滑块（-200°C 到 200°C）
  - 宏观/微观双视角切换
  - 微观视角：原子/分子运动和排列方式
  - 相变动画和音效

#### 🎮 游戏乐园
- **[推箱子](games/sokoban.html)** ⭐⭐⭐
  - 8个精心设计的关卡
  - 撤销功能，无限尝试
  - 步数统计和最佳记录
  - 星星评分系统
  - 支持键盘和触摸操作

- **[飞机大战](games/plane-war.html)** ⭐⭐⭐
  - 三种难度：简单、中等、困难
  - 实时射击和碰撞检测
  - 分数系统和生命值
  - 最高分记录（按难度保存）
  - 流畅的动画和音效
  - 支持键盘（方向键/WASD）和触摸操作

## 🎨 设计理念

### 视觉风格
- **深色太空主题**：渐变紫色背景 + 闪烁星星
- **统一 UI 设计**：卡片式布局、圆角、半透明效果
- **清晰的信息层级**：标题、提示、状态指示器

### 交互设计
- **直观操作**：拖拽为主，符合低龄儿童认知特点
- **即时反馈**：操作后立即看到结果
- **视觉引导**：悬停预览、高亮显示、动画过渡

### 激励系统
- ⭐ **星星收集**：完成实验获得星星
- 🏅 **勋章奖励**：动画庆祝效果
- 🎯 **挑战模式**：目标驱动学习
- 💾 **进度保存**：localStorage 持久化

## 🛠️ 技术栈

### 前端
- **HTML5**：语义化结构
- **CSS3**：Flexbox、Grid、动画、渐变
- **JavaScript (Vanilla)**：无框架，轻量高效
- **Canvas 2D**：高性能图形渲染
- **Web Audio API**：实时音效生成

### 核心算法
- **物理引擎**：力矩计算、碰撞检测
- **周长算法**：边界检测、邻居判定
- **面积计算**：方块计数、形状分析
- **状态管理**：游戏状态机、事件系统

## 📁 项目结构

```
MJ-Science/
├── index.html                              # 首页导航
├── IMPLEMENTATION_PLAN.md                 # 实现计划
├── astronomy/                             # 天文科学
│   └── solar-system-enhanced.html      # 太阳系探险
├── physics/                               # 物理科学
│   └── balancing-act.html                 # 平衡跷跷板
├── mathematics/                           # 数学科普
│   └── area-builder.html                  # 面积建造者
├── electricity/                           # 电学实验
│   └── balloons-static.html              # 气球与静电（开发中）
├── matter/                                # 物质科学
│   └── states-of-matter.html           # 物质状态基础（开发中）
├── test-balancing.html                    # 测试页面
├── test-cache.html                        # 缓存测试工具
└── django-cloud-hosting/                # Django 云托管模板（可选）
```

### 新增文件说明
- **index.html** - 首页导航，统一入口
- **IMPLEMENTATION_PLAN.md** - 完整实现计划
- **astronomy/** - 天文科学目录（含太阳系探险）
- **physics/** - 物理科学目录（含跷跷板平衡实验）
- **mathematics/** - 数学科普目录（含面积建造者）
- **test-balancing.html** - 跷跷板平衡测试页面
- **test-cache.html** - localStorage 缓存测试工具

## 🚀 快速开始

### 本地运行
```bash
# 启动本地服务器
cd ~/Desktop/MJ/MJ-Science
python3 -m http.server 8000

# 访问
open http://localhost:8000
```

### GitHub Pages（推荐）
1. 推送到 GitHub
2. 在仓库设置中启用 GitHub Pages
3. 选择 `main` 分支，`/` 根目录
4. 访问 `https://amor1992.github.io/MJ-Science/`

## 📖 使用指南

### 对学生
1. 选择感兴趣的实验
2. 阅读实验说明和提示
3. 完成挑战收集星星
4. 探索不同模式（自由模式 vs 挑战模式）

### 对家长/老师
1. **自由模式**：让孩子自由探索，激发好奇心
2. **挑战模式**：设置目标，培养目标感
3. **观察进度**：查看星星总数和完成记录
4. **引导学习**：解释实验背后的科学原理

## 🔬 教育价值

### 核心概念
- **物理**：力矩、平衡、杠杆、摩擦力、惯性
- **数学**：面积、周长、分数、等价分数
- **天文**：太阳系、行星运动、轨道
- **化学**：物质状态、相变、分子运动
- **电学**：静电、电荷、吸引排斥

### 认知能力
- **观察推理**：观察现象 → 提出假设 → 实验验证
- **比例推理**：比较不同情况，发现规律
- **空间想象**：三维转二维的映射
- **因果认知**：理解动作和结果的因果关系

## 🎯 待开发功能

### 短期
- [ ] 剩余 6 个实验的开发
- [ ] 实验之间的关联推荐
- [ ] 详细的教学说明页面
- [ ] 难度自适应调整

### 长期
- [ ] 用户账户系统
- [ ] 学习报告生成
- [ ] 多语言支持（英文）
- [ ] 微信小程序版本
- [ ] AI 辅助导师

## 🤝 贡献

欢迎贡献代码、修复 bug、提出建议！

### 如何贡献
1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

### 开发计划
详见 [IMPLEMENTATION_PLAN.md](IMPLEMENTATION_PLAN.md)

## 📄 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 👨‍👤 作者

[MJ-Science](https://github.com/Amor1992/MJ-Science) by Amor1992

## 🙏 致谢

- [PhET Interactive Simulations](https://phet.colorado.edu/) - 设计理念启发
- 一二年级的小朋友们 - 灵感来源和目标用户

---

**🎓 让学习像游戏一样有趣！**

> Built with ❤️ for young scientists
