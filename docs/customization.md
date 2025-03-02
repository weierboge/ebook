# 自定义样式

本指南将帮助您了解如何自定义电子书的外观和风格。

## 修改主题颜色

您可以通过编辑 `assets/css/style.css` 文件中的 CSS 变量来修改电子书的主题颜色：

```css
:root {
  --theme-color: #42b983; /* 主题颜色 */
  --text-color-base: #2c3e50; /* 基本文本颜色 */
  --text-color-secondary: #476582; /* 次要文本颜色 */
  --border-color: #eaecef; /* 边框颜色 */
  --code-bg-color: #f8f8f8; /* 代码背景颜色 */
  --heading-color: #2c3e50; /* 标题颜色 */
}
```

只需修改这些变量的值，整个电子书的颜色方案就会相应变化。

## 自定义 Logo

您可以在 `index.html` 文件中修改电子书的名称和仓库链接：

```javascript
window.$docsify = {
  name: '开源电子书', // 修改为您的电子书名称
  repo: 'weierboge/ebook', // 修改为您的仓库地址
  // 其他配置...
}
```

## 添加自定义插件

您可以通过在 `index.html` 文件中添加更多的 Docsify 插件来扩展功能：

```html
<!-- 添加新插件 -->
<script src="https://cdn.jsdelivr.net/npm/docsify-plugin-name/dist/plugin.min.js"></script>
```

然后在配置中启用该插件：

```javascript
window.$docsify = {
  // 现有配置...
  pluginName: {
    // 插件配置
  }
}
```

## 自定义页脚

您可以修改 `index.html` 文件中的页脚内容：

```javascript
plugins: [
  function(hook) {
    var footer = [
      '<hr/>',
      '<footer>',
      '<span>您的自定义页脚内容</span>',
      '</footer>'
    ].join('');

    hook.afterEach(function(html) {
      return html + footer;
    });
  }
]
```

## 添加自定义样式

您可以在 `assets/css/style.css` 文件中添加自定义 CSS 规则：

```css
/* 自定义样式示例 */
.custom-class {
  color: red;
  font-weight: bold;
}
```

然后在 Markdown 文件中使用该样式：

```markdown
<div class="custom-class">这是自定义样式的文本</div>
```

## 响应式设计调整

本电子书模板已经内置了响应式设计，但您可以根据需要进一步调整：

```css
/* 在 assets/css/style.css 中修改或添加媒体查询 */
@media screen and (max-width: 480px) {
  /* 手机屏幕的样式 */
  .content {
    padding: 0.8rem;
  }
}

@media screen and (min-width: 1200px) {
  /* 大屏幕的样式 */
  .content {
    max-width: 900px;
    margin: 0 auto;
  }
}
```

## 深色模式自定义

您可以自定义深色模式的颜色方案：

```css
/* 在 assets/css/style.css 中修改深色模式变量 */
@media (prefers-color-scheme: dark) {
  :root {
    --theme-color: #3eaf7c; /* 深色模式下的主题颜色 */
    --text-color-base: #c8c8c8; /* 深色模式下的文本颜色 */
    /* 其他深色模式变量... */
  }
}
```

## 下一步

查看 [部署指南](deployment.md) 了解如何将您的电子书部署到网络上。