import { defineUserConfig, defaultTheme } from 'vuepress'
export default defineUserConfig({
  base: '/newblue-prerss/',
  lang: 'zh-CN',
  title: 'newblue web group',
  description: 'newblue',
  head: [
    ['link', { rel: 'icon', href: '/newblue-prerss/newBlue.png' }],
    // ['base', { href: 'https://ohudong.cztv.com' }]
  ],
  theme: defaultTheme({
    logo: '/newBlue.png',
    repo: 'https://github.com/1172208932/newblue-prerss',
    // 默认主题配置
    navbar: [
      {
        text: '游戏demo',
        link: '/game',
      },
      {
        text: '前端相关',
        link: '/web',
      }
    ],
    sidebar: {
      '/game': [
        {
          text: '游戏demo',
          children: [{
            text: '新春飞兔',
            link: '/demo/flybird.md'
          }],
        }
      ],
      '/demo/': [
        {
          text: '游戏demo',
          children: [{
            text: '新春飞兔',
            link: '/demo/flybird.md'
          }],
        }
      ],
      '/web': [
        {
          text: '常用包与逻辑',
          children: [{
            text: '微信方法',
            link: '/web/wx-utils.md'
          },
          {
            text: 'H5跳转点播',
            link: '/web/callUpApp.md'
          }, {
            text: '新蓝网内部Axios二次封装',
            link: '/web/nb-axios.md'
          }, {
            text: '微信登录方法',
            link: '/web/wxpage.md'
          }, {
            text: '客户端常用方法',
            link: '/web/cztv-api.md'
          }, {
            text: '发布订阅通信类',
            link: '/web/event-bus.md'
          }
          ],
        }
      ]
    }
  }),
})