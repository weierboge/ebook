# 快速上手

本章节将帮助你快速创建并部署一本属于自己的电子书。

## 第一步：克隆或下载模板

你可以通过以下两种方式获取这个模板：

1. **使用 Git 克隆**（推荐）：
   ```bash
   git clone https://github.com/username/weierboge-ebook.git
   cd weierboge-ebook
   ```

2. **直接下载**：
   - 访问 GitHub 仓库页面
   - 点击 "Code" 按钮
   - 选择 "Download ZIP"
   - 解压下载的文件

## 第二步：安装依赖

如果你已经安装了 Node.js，可以运行以下命令安装依赖：

```bash
npm install
```

如果你不懂编程，不用担心！你可以跳过这一步，直接在 GitHub 上编辑文件。

## 第三步：修改内容

所有的内容都在 `docs` 目录下：

- `docs/README.md`：首页内容
- `docs/guide/`：指南目录，包含所有指南内容

你只需要编辑这些 Markdown 文件，就可以更新电子书的内容。

### Markdown 基础语法

如果你不熟悉 Markdown，以下是一些基础语法：

```markdown
# 一级标题
## 二级标题
### 三级标题

- 无序列表项
- 另一个列表项

1. 有序列表项
2. 另一个有序列表项

**粗体文本**
*斜体文本*

[链接文本](链接地址)

![图片描述](图片地址)

> 引用文本

```

## 第四步：预览电子书

如果你已经安装了依赖，可以运行以下命令在本地预览电子书：

```bash
npm run dev
```

然后在浏览器中访问 `http://localhost:8080` 即可预览电子书。

## 第五步：部署到 GitHub Pages

1. 在 GitHub 上创建一个新的仓库
2. 将你的代码推送到这个仓库
3. 在仓库设置中启用 GitHub Pages

或者，你可以使用以下命令自动部署：

```bash
npm run build
npm run deploy
```

## 添加新章节

要添加新章节，只需在 `docs` 目录下创建新的 Markdown 文件，然后在 `.vuepress/config.js` 中更新侧边栏配置。

例如，如果你想添加一个名为 "高级技巧" 的新章节：

1. 创建文件 `docs/guide/advanced.md`
2. 在 `.vuepress/config.js` 中更新 `sidebar` 配置：

```js
sidebar: {
  '/guide/': [
    {
      title: '指南',
      collapsable: false,
      children: [
        '',
        'getting-started',
        'structure',
        'advanced' // 新添加的章节
      ]
    }
  ]
}
```

## 下一步

现在你已经了解了如何创建和部署电子书，接下来可以查看 [目录结构](./structure.md) 章节，了解这个模板的文件结构。