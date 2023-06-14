import{_ as l,p as i,q as e,a1 as a}from"./framework-c4f3d865.js";const t={},o=a(`<h1 id="vuerouter" tabindex="-1"><a class="header-anchor" href="#vuerouter" aria-hidden="true">#</a> VueRouter</h1><ol><li>vue router 从列表 浏览了一段时间 , 点击进了一个详情页, 然后返回的时候, 我期望回到列表页还是停留在原来的浏览位置, 你可以怎么做?</li></ol><ul><li>keep-alive</li><li>localStorage/sessionStorage + scrollTop + scrollTo</li><li>scrollBehavior</li></ul><ol start="2"><li>router-view是什么?</li></ol><p>类似于动态的组件.</p><p>找到当前路径对应的component, 并展示出来.</p><ol><li>异步加载about.vue</li></ol><p>首屏 app.js chunk-vendors 2.4MB 159kB About about.js 21kB</p><ol start="2"><li>同步加载about.vue</li></ol><p>首屏 app.js chunk-vendors 2.4MB 180KB About</p><h3 id="导航守卫的执行顺序" tabindex="-1"><a class="header-anchor" href="#导航守卫的执行顺序" aria-hidden="true">#</a> 导航守卫的执行顺序</h3><ol><li>[组件] 前一个组件的beforeRouteLeave</li><li>[全局] router.beforeEach</li><li>[路由参数变化] beforeRouteUpdate</li><li>[配置文件里] beforeEnter</li><li>[组件] beforeRouteEnter</li><li>[全局] afterEach</li></ol><h3 id="scollbehavior生效的条件" tabindex="-1"><a class="header-anchor" href="#scollbehavior生效的条件" aria-hidden="true">#</a> scollBehavior生效的条件</h3><ol><li>浏览器支持的History api</li><li>点击浏览器的返回/前进按钮</li><li>router-link是不可以触发的</li></ol><h2 id="vue-路由及异步组件" tabindex="-1"><a class="header-anchor" href="#vue-路由及异步组件" aria-hidden="true">#</a> Vue 路由及异步组件</h2><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景" aria-hidden="true">#</a> 背景</h3><p>ssr</p><p>www.lubai.com/index =&gt; php服务器 =&gt; index.html /parent =&gt; php服务器 =&gt; parent.html</p><pre><code>        location.href = xxxx/parent;
</code></pre><p>php 服务端代码 -&gt; jquery -&gt;</p><p>服务器渲染的多页应用</p><p>缺点：</p><ol><li>维护特别麻烦</li><li>服务器压力大</li><li>没有前后端分离, 协作流程不清晰</li></ol><p>优点:</p><ol><li>SEO效果好, 因为是已经完全渲染好的页面</li><li>用户看到首屏的耗时会比较小.</li></ol><p>现在的前端状况, 其实是有点从服务端渲染的多页 -&gt; 单页应用 -&gt; ssr</p><h3 id="现阶段的路由" tabindex="-1"><a class="header-anchor" href="#现阶段的路由" aria-hidden="true">#</a> 现阶段的路由</h3><p>单页应用 spa</p><p>不仅在页面的交互中是不刷新页面的, 就连页面跳转(router.push)也是不刷新页面.</p><p>www.lubai.com/index =&gt; cdn =&gt; index.html app.js www.lubai.com/list =&gt; cdn =&gt; list.js</p><p>webpack =&gt; 将静态文件.js img html .css 上传到oss =&gt; cdn</p><h3 id="前端路由的特性" tabindex="-1"><a class="header-anchor" href="#前端路由的特性" aria-hidden="true">#</a> 前端路由的特性</h3><ol><li>根据不同的url渲染不同的内容</li><li>不刷新页面</li></ol><h3 id="hash路由原理及其实现" tabindex="-1"><a class="header-anchor" href="#hash路由原理及其实现" aria-hidden="true">#</a> Hash路由原理及其实现</h3><ol><li>面试</li></ol><ul><li>hash路由的改变, 会在url上有什么表现吗 <ul><li>会添加#path</li></ul></li><li>如何通过js监听hash路由改变呢? <ul><li>window.addEventlistener(&#39;hashchange&#39;, function(){})</li></ul></li><li>所以可以通过哪些方式来改变浏览器hash <ul><li>a标签</li><li>js location.hash=&#39;&#39;</li></ul></li></ul><ol><li>特性</li></ol><ul><li>url中的hash值至少客户端/浏览器端的一种状态, 向服务器发送请求的时候, hash部分是不会携带的</li><li>hash值的更改, 并不会导致页面的刷新</li><li>hash值的更改, 会在浏览器的访问历史中增加记录, 我们可以通过浏览器的回退、前进按钮来控制hash的切换</li><li>hash值的更改, 通过hashchange事件</li></ul><ol start="3"><li>例子</li></ol><p>www.lubai.com/index.html/#/parent</p><p><a href="#"></a></p><p>location.hash = &#39;#hash-change&#39;;</p><h3 id="history路由" tabindex="-1"><a class="header-anchor" href="#history路由" aria-hidden="true">#</a> history路由</h3><p>hash虽然能解决问题, 但是带有#不太美观.</p><p>window.history.back(); window.history.forward(); go(number) pushState 新增 =&gt; A B =&gt; A B C replaceState 覆盖/代替 A B =&gt; A C</p><ol><li>可以使用Popstate事件来监听url变化</li><li>pushState和replaceState 并不会触发Popstate</li><li>哪些情况会触发popstate呢? <ol><li>浏览器的回退/前进按钮</li><li>history back forward go</li></ol></li></ol><p>参数</p><ol><li>state: 是一个对象, 是一个与指定网址相关的状态对象. 如果不需要, 可以填null</li><li>title: 新页面的标题, null</li><li>url: 新的网址, 必须与当前页面处在同一个域, 浏览器的地址栏会显示这个网址</li></ol><p>部署history路由的时候, 要记住, 要使你路由中的所有Path都访问到index.html文件</p><p>www.lubai.com/green</p><p>www.lubai.com/index.html</p><p>nginx {</p><p>location /green { index.html } }</p>`,53),h=[o];function r(s,p){return i(),e("div",null,h)}const u=l(t,[["render",r],["__file","VueRouter.html.vue"]]);export{u as default};
