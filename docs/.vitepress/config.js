import { defineConfig } from 'vitepress'

const themeConfig = {
  logo: '/logo.png',
  socialLinks: [
    { icon: 'github', link: 'https://github.com/luckept/learn-vim' },
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
          { text: '1、走出舒适区，存活下来', link: '/vim/living.md' },
        ]
      }
    ]
  }
}

export default defineConfig({
  title: 'Learn Vim',
  themeConfig,
  appearance: false,
  // base: '/learn-vim/',
})

