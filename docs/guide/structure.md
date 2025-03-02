# 目录结构

本章节将介绍韦二伯格开源电子书模板的目录结构，帮助你更好地理解和使用这个模板。

## 整体结构

```
.
├── docs                    # 文档目录
│   ├── .vuepress          # VuePress 配置目录
│   │   ├── config.js      # VuePress 配置文件
│   │   ├── dist           # 构建输出目录
│   │   └── public         # 静态资源目录
│   ├── README.md          # 首页
│   └── guide              # 指南目录
│       ├── README.md      # 指南首页
│       ├── getting-started.md  # 快速上手
│       └── structure.md   # 目录结构（本文件）
└── package.json          # 项目配置文件
```

## 关键文件说明

### package.json

这是项目的配置文件，定义了项目的依赖和可用的命令。主要包含：

- **scripts**: 定义了可以运行的命令，如 `dev`、`build` 和 `deploy`
- **devDependencies**: 项目的开发依赖，包括 VuePress 和各种插件

### docs/.vuepress/config.js

这是 VuePress 的核心配置文件，控制着整个电子书的外观和行为：

- **title**: 电子书的标题
- **description**: 电子书的描述
- **themeConfig**: 主题配置，包括导航栏、侧边栏、仓库链接等
- **plugins**: 使用的插件列表

### docs/README.md

这是电子书的首页，使用 YAML front matter 配置首页的布局和内容：

```yaml
---
home: true
heroImage: /logo.png
heroText: 韦二伯格的开源电子书模板
tagline: 一个简洁、优美、功能强大的开源电子书模板
actionText: 快速上手 →
actionLink: /guide/
---
```

### docs/guide/README.md

这是指南的首页，介绍了电子书模板的基本概念和优势。

### docs/guide/getting-started.md

快速上手指南，帮助用户从零开始创建自己的电子书。

## 如何添加内容

### 添加新页面

1. 在 `docs` 目录下创建新的 Markdown 文件
2. 在文件开头添加标题（使用 `# 标题` 格式）
3. 编写内容
4. 在 `.vuepress/config.js` 中更新侧边栏配置，将新页面添加到导航中

### 添加图片

1. 将图片文件放在 `docs/.vuepress/public` 目录下
2. 在 Markdown 文件中使用相对路径引用图片：`![图片描述](/图片名称.png)`

### 添加新章节

如果你想添加一个全新的章节（如"高级功能