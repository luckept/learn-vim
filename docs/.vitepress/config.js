import { defineConfig } from 'vitepress'

const themeConfig = {
  logo: '/logo.svg',
  head: [
    ['link', {
      href: '/logo.svg'
    }],
  ],
  socialLinks: [
    { icon: 'github', link: 'https://github.com/luckept' },
  ],
  footer: {
    message: 'Released under the MIT License.',
    copyright: 'Copyright © 2022-present Luckept'
  },
  sidebar: {
    '/vim/': [
      {
        text: 'VIM 篇',
        items: [
          { text: '1、存活下来', link: '/vim/living.md' },
        ]
      }
    ]
  }
}

export default defineConfig({
  title: 'Learn Vim',
  description: '上手 vim',
  lastUpdated: true,
  themeConfig,
  appearance: false,
  base: '/learn-vim/',
})

