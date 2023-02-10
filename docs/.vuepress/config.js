import { defineUserConfig, defaultTheme  } from 'vuepress'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
export default defineUserConfig({
  base:'/newblue-prerss/',
  lang: 'zh-CN',
  title: 'newblue web group',
  description: 'newblue',
//   head: [
//     ['base', { href: 'https://ohudong.cztv.com' }]
//   ],
  theme: defaultTheme({
    // 默认主题配置
    navbar: [
      {
        text: '游戏demo',
        link: '/game',
      },
    ],
    sidebar: {
        '/game':[
            {
                text:'游戏demo',
                children: [{
                    text:'新春飞兔',
                    link:'/demo/flybird.md'
                }],
            }
        ],
        '/demo/':[
            {
                text:'游戏demo',
                children: [{
                    text:'新春飞兔',
                    link:'/demo/flybird.md'
                }],
            }
        ]
    }
  }),
})