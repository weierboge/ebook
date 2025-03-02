# 部署指南

本指南将帮助您将电子书部署到网络上，让更多人可以访问您的内容。

## 部署到 GitHub Pages

GitHub Pages 是部署电子书最简单的方式之一，完全免费且设置简单。

### 步骤 1：将代码推送到 GitHub

1. 在 GitHub 上创建一个新仓库（如果尚未创建）
2. 将您的电子书代码推送到该仓库：

```bash
# 初始化 Git 仓库（如果尚未初始化）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "初始提交"

# 添加远程仓库
git remote add origin https://github.com/您的用户名/您的仓库名.git

# 推送到 GitHub
git push -u origin main
```

### 步骤 2：配置 GitHub Pages

1. 在 GitHub 仓库页面，点击 "Settings"（设置）
2. 在左侧菜单中找到 "Pages"（页面）
3. 在 "Source"（源）部分，选择 "main" 分支
4. 点击 "Save"（保存）
5. 等待几分钟，您的电子书将在 `https://您的用户名.github.io/您的仓库名/` 上线

## 使用自定义域名

如果您有自己的域名，可以将其用于您的电子书：

1. 在 GitHub Pages 设置页面的 "Custom domain"（自定义域名）字段中输入您的域名
2. 点击 "Save"（保存）
3. 在您的域名注册商处，添加以下 DNS 记录：
   - 如果使用子域名（如 `docs.example.com`）：添加 CNAME 记录，指向 `您的用户名.github.io`
   - 如果使用根域名（如 `example.com`）：添加 A 记录，指向 GitHub Pages 的 IP 地址（可在 GitHub 文档中找到）

## 其他部署选项

### Netlify

Netlify 提供免费的静态网站托管，具有更多高级功能：

1. 在 [Netlify](https://www.netlify.com/) 上注册账号
2. 点击 "New site from Git"（从 Git 创建新站点）
3. 选择您的 GitHub 仓库
4. 配置构建设置（对于本电子书模板，通常不需要特殊配置）
5. 点击 "Deploy site"（部署站点）

### Vercel

Vercel 也是一个很好的选择：

1. 在 [Vercel](https://vercel.com/) 上注册账号
2. 导入您的 GitHub 仓库
3. 配置项目（对于本电子书模板，使用默认设置即可）
4. 点击 "Deploy"（部署）

## 部署后的维护

### 更新内容

当您更新电子书内容后，只需将更改推送到 GitHub 仓库，部署平台会自动更新您的网站：

```bash
git add .
git commit -m "更新内容"
git push
```

### 检查部署状态

- 在 GitHub 仓库页面，可以在 "Environments"（环境）部分查看部署状态
- 在 Netlify 或 Vercel 的控制面板中，可以查看详细的部署日志和状态

## 性能优化

为了提高电子书的加载速度，可以考虑以下优化：

1. **压缩图片**：使用工具如 [TinyPNG](https://tinypng.com/) 压缩图片
2. **使用 CDN**：GitHub Pages、Netlify 和 Vercel 都自带 CDN
3. **延迟加载**：对于大型电子书，考虑启用 Docsify 的延迟加载功能

## 下一步

查看 [常见问题](faq.md) 了解更多关于电子书维护和使用的信息。