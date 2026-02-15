# GitHub Pages 启用指南

## 📌 启用步骤

### 方法一：通过 GitHub 网站界面（推荐）

1. **进入仓库设置**
   - 访问：https://github.com/Amor1992/MJ-Science/settings
   - 或者在仓库页面点击 "Settings" 标签

2. **找到 Pages 设置**
   - 在左侧菜单找到 "Pages"
   - 点击进入

3. **配置 Pages**
   - **Source** 选择：Deploy from a branch
   - **Branch** 选择：`main`
   - **Folder** 选择：`/` (根目录)
   - 点击 **Save**

4. **等待部署**
   - GitHub 会自动部署（通常需要 1-3 分钟）
   - 部署成功后，会显示访问链接

5. **访问网站**
   - 访问：https://amor1992.github.io/MJ-Science/
   - 或者在 Pages 设置页面查看链接

### 方法二：通过 GitHub CLI

```bash
# 安装 GitHub CLI（如果还没安装）
# macOS
brew install gh

# 登录
gh auth login

# 启用 Pages（从 main 分支）
gh api \
  -X POST \
  -H "Accept: application/vnd.github.v3+json" \
  repos/Amor1992/MJ-Science/pages \
  -f source[branch]=main \
  -f source[path]=/
```

## 🔗 访问链接

启用成功后，可以通过以下链接访问：

- **主站**：https://amor1992.github.io/MJ-Science/
- **太阳系探险**：https://amor1992.github.io/MJ-Science/astronomy/solar-system-enhanced.html
- **跷跷板平衡**：https://amor1992.github.io/MJ-Science/physics/balancing-act.html
- **面积建造者**：https://amor1992.github.io/MJ-Science/mathematics/area-builder.html

## 📊 部署状态查看

### 查看部署状态
- 访问：https://github.com/Amor1992/MJ-Science/deployments

### 查看构建日志
- 如果部署失败，可以在 Actions 标签查看详细日志
- 访问：https://github.com/Amor1992/MJ-Science/actions

## 🔄 自动部署

启用 GitHub Pages 后，每次推送到 `main` 分支，GitHub 会自动：

1. 检测到新的提交
2. 自动构建和部署网站
3. 通常 1-3 分钟内完成部署

### 工作流程

```
本地修改 → git add → git commit → git push
                                            ↓
                                    GitHub 自动触发 Pages 部署
                                            ↓
                                    1-3 分钟后部署完成
                                            ↓
                                    新内容上线
```

## 🛠️ 常见问题

### Q: 部署失败怎么办？

**A:** 检查以下几点：
1. 确保仓库是公开的（Public）
2. 检查是否有构建错误
3. 查看 Actions 标签的详细日志
4. 确保文件路径正确

### Q: 如何自定义域名？

**A:**
1. 在 Pages 设置页面找到 "Custom domain"
2. 输入你的域名（如：mj-science.com）
3. 配置 DNS 记录（CNAME）
4. GitHub 会提供 SSL 证书

### Q: 如何强制重新部署？

**A:** 最简单的方法是：
```bash
# 创建一个空提交触发重新部署
git commit --allow-empty -m "Trigger Pages rebuild"
git push
```

## 📝 注意事项

1. **首次部署**可能需要 3-5 分钟
2. **缓存问题**：如果更新后看不到新内容，可以硬刷新（Ctrl+Shift+R 或 Cmd+Shift+R）
3. **404 错误**：检查文件名和路径是否正确
4. **样式问题**：确保所有 CSS 文件都已提交

## 🎉 完成！

现在你的科学实验平台已经上线了！🎊

- 访问链接：https://amor1992.github.io/MJ-Science/
- 分享给孩子们，让他们开始探索科学的乐趣吧！
