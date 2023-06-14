import { defineUserConfig, defaultTheme } from 'vuepress'

let navbar2D = [
  {
    text: '2Ddemo',
    children: [  {
      text: '跑酷小游戏',
      link: '/2Ddemo/running.md'
    },{
      text: '新春飞兔',
      link: '/2Ddemo/flybird.md'
    },
    {
      text: '飞鸟',
      link: '/2Ddemo/flybird2.md'
    }
    ,
    {
      text: '炮台小游戏',
      link: '/2Ddemo/niuniu.md'
    }
    ,
    {
      text: 'pixi滤镜',
      link: '/2Ddemo/pixi滤镜.md'
    }
    ,
    {
      text: '贪吃蛇小游戏',
      link: '/2Ddemo/snake.md'
    }
  ],
  }
]

let navbar3D = [
  {
    text: '3Ddemo',
    children: [{
      text: '雨滴滤镜',
      link: '/3Ddemo/雨滴滤镜.md'
    },
    {
      text: 'threejs模型替换',
      link: '/3Ddemo/threejs模型.md'
    }
  ],
  }
]

export default defineUserConfig({
  base: '/myBlog/',
  lang: 'zh-CN',
  title: '张晓旭静态站点',
  description: 'newblue',
  head: [
    ['link', { rel: 'icon', href: '//yun.duiba.com.cn/aurora/assets/9b645f401dbde698763c10d933d3e25c534c1f02.jpeg' }],
    // ['base', { href: 'https://ohudong.cztv.com' }]
  ],
  theme: defaultTheme({
    logo: '//yun.duiba.com.cn/aurora/assets/9b645f401dbde698763c10d933d3e25c534c1f02.jpeg',
    repo: 'https://github.com/1172208932/myBlog',
    // 默认主题配置
    navbar: [
      {
        text: '前端相关',
        link: '/web',
      },
      {
        text: '2D',
        link: '/2Ddemo',
      },
      {
        text: '3D',
        link: '/3Ddemo',
      }

    ],
    sidebar: {
      '/2Ddemo': navbar2D,
      '/2Ddemo/': navbar2D,
      '/3Ddemo': navbar3D,
      '/3Ddemo/': navbar3D,
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
        },
        {
          text: '八股文',
          children: [{
            text: '面向对象',
            link: '/web/base/面向对象.md'
          },
          {
            text: '实现一个Promise',
            link: '/web/base/实现一个Promise.md'
          }, {
            text: '网络',
            link: '/web/base/网络.md'
          }, {
            text: 'es6',
            link: '/web/base/es6.md'
          }, {
            text: 'Generator 和 Async',
            link: '/web/base/generator & async await.md'
          }, {
            text: 'node',
            link: '/web/base/node.md'
          }, {
            text: 'PromiseA+规范',
            link: '/web/base/PromiseA+规范.md'
          }, {
            text: 'this',
            link: '/web/base/this.md'
          }, {
            text: 'ts相关',
            link: '/web/base/ts相关.md'
          }, {
            text: 'Vuecli',
            link: '/web/base/Vuecli.md'
          }, {
            text: 'VueRouter',
            link: '/web/base/VueRouter.md'
          }
          ],
        }
      ]
    }
  }),
})