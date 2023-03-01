# VueRouter

1. vue router 从列表 浏览了一段时间 , 点击进了一个详情页, 然后返回的时候, 我期望回到列表页还是停留在原来的浏览位置, 你可以怎么做?

* keep-alive
* localStorage/sessionStorage + scrollTop +  scrollTo
* scrollBehavior

2. router-view是什么?

类似于动态的组件.

找到当前路径对应的component, 并展示出来.


1. 异步加载about.vue

首屏 app.js chunk-vendors 2.4MB 159kB
About about.js 21kB

2. 同步加载about.vue

首屏 app.js chunk-vendors 2.4MB 180KB
About  


### 导航守卫的执行顺序

1. [组件] 前一个组件的beforeRouteLeave
2. [全局] router.beforeEach
3. [路由参数变化] beforeRouteUpdate
4. [配置文件里] beforeEnter
5. [组件] beforeRouteEnter
6. [全局] afterEach

### scollBehavior生效的条件

1. 浏览器支持的History api
2. 点击浏览器的返回/前进按钮
3. router-link是不可以触发的

## Vue 路由及异步组件

### 背景

ssr

www.lubai.com/index => php服务器 => index.html
            /parent => php服务器 => parent.html


            location.href = xxxx/parent;

php 服务端代码 -> jquery -> 

服务器渲染的多页应用

缺点：
1. 维护特别麻烦
2. 服务器压力大
3. 没有前后端分离, 协作流程不清晰

优点:
1. SEO效果好, 因为是已经完全渲染好的页面
2. 用户看到首屏的耗时会比较小.


现在的前端状况, 其实是有点从服务端渲染的多页 -> 单页应用 -> ssr

### 现阶段的路由

单页应用 spa

不仅在页面的交互中是不刷新页面的, 就连页面跳转(router.push)也是不刷新页面.


www.lubai.com/index => cdn => index.html app.js
www.lubai.com/list => cdn => list.js

webpack => 将静态文件.js img html .css 上传到oss => cdn

### 前端路由的特性

1. 根据不同的url渲染不同的内容
2. 不刷新页面



### Hash路由原理及其实现

1. 面试

* hash路由的改变, 会在url上有什么表现吗
  * 会添加#path
* 如何通过js监听hash路由改变呢?
  * window.addEventlistener('hashchange', function(){})
* 所以可以通过哪些方式来改变浏览器hash
  * a标签
  * js location.hash=''


1. 特性

* url中的hash值至少客户端/浏览器端的一种状态, 向服务器发送请求的时候, hash部分是不会携带的
* hash值的更改, 并不会导致页面的刷新
* hash值的更改, 会在浏览器的访问历史中增加记录, 我们可以通过浏览器的回退、前进按钮来控制hash的切换
* hash值的更改, 通过hashchange事件

3. 例子

www.lubai.com/index.html/#/parent



<a href="#"></a>

location.hash = '#hash-change';

### history路由

hash虽然能解决问题, 但是带有#不太美观.

window.history.back();
window.history.forward();
go(number)
pushState 新增 => A B => A B C
replaceState 覆盖/代替 A B => A C

1. 可以使用Popstate事件来监听url变化
2. pushState和replaceState 并不会触发Popstate
3. 哪些情况会触发popstate呢?
   1. 浏览器的回退/前进按钮
   2. history back forward go

参数

1. state: 是一个对象, 是一个与指定网址相关的状态对象. 如果不需要, 可以填null
2. title: 新页面的标题, null
3. url: 新的网址, 必须与当前页面处在同一个域, 浏览器的地址栏会显示这个网址


部署history路由的时候, 要记住, 要使你路由中的所有Path都访问到index.html文件

www.lubai.com/green

www.lubai.com/index.html

nginx {

  location  /green  {
      index.html
  }
}


