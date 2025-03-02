module.exports = {
  title: '韦二伯格的电子书',
  description: '开源电子书模板',
  base: '/仓库名/', // 请替换为您实际的GitHub仓库名称
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
      { text: '第一章', link: '/chapter1/' },
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
      ],
      '/chapter1/': [
        {
          title: '第一章：入门基础',
          collapsable: false,
          children: [
            ''
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