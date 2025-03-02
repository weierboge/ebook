module.exports = {
  title: '韦二伯格的开源电子书模板',
  description: '一个基于VuePress的开源电子书模板，简洁、优美、功能强大',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '指南', link: '/guide/' },
      { text: 'GitHub', link: 'https://github.com/username/weierboge-ebook' }
    ],
    sidebar: {
      '/guide/': [
        {
          title: '指南',
          collapsable: false,
          children: [
            '',
            'getting-started',
            'structure'
          ]
        }
      ]
    },
    lastUpdated: '上次更新',
    smoothScroll: true,
    repo: 'username/weierboge-ebook',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '在 GitHub 上编辑此页'
  },
  plugins: [
    '@vuepress/back-to-top',
    '@vuepress/medium-zoom',
    '@vuepress/nprogress',
    '@vuepress/active-header-links',
    ['@vuepress/search', {
      searchMaxSuggestions: 10
    }]
  ]
}