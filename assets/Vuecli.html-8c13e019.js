import{_ as t,M as o,p as c,q as i,R as n,t as e,N as s,a1 as p}from"./framework-c4f3d865.js";const l={},r=n("h1",{id:"vue-cli",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue-cli","aria-hidden":"true"},"#"),e(" vue-cli")],-1),d={href:"https://cli.vuejs.org/zh/",target:"_blank",rel:"noopener noreferrer"},u=n("blockquote",null,[n("p",null,"如果不熟悉 vue-cli 的同学，没关系...")],-1),k={href:"https://github.com/vuejs/vue-cli",target:"_blank",rel:"noopener noreferrer"},v=p('<h2 id="原理" tabindex="-1"><a class="header-anchor" href="#原理" aria-hidden="true">#</a> 原理</h2><p>这种工具最初诞生的目的都是为了创建一个模版项目，从这一点出发，想想把大象装进冰箱需要几步呢？</p><p><img src="https://gitee.com/isysc/image-bed/raw/master/20210711/cVUf1XvL^g9J.gif" alt="大象进冰箱啦～"></p><p>单纯基于模版创建一个项目，实现套路各异，本质上还是大象进冰箱，就那么几步，只是具体实现方式各异而已</p><p>大体的流程：</p><h5 id="_1-要有一个模版项目" tabindex="-1"><a class="header-anchor" href="#_1-要有一个模版项目" aria-hidden="true">#</a> 1. 要有一个模版项目</h5><p>这个比较容易理解，跑 <code>cli</code> 最终会生成一个初始化的项目，这其实是定义好的模版项目，社区方案，有些是写在 <code>cli</code> 内部的，<code>vue-cli</code> 的方式是把模版发布到 <code>github</code> 这类平台，然后通过 <code>download-git-repo</code> 去远程拉取</p>',7),m={href:"https://github.com/vuejs-templates",target:"_blank",rel:"noopener noreferrer"},b=p('<h5 id="_2-给用户一个友好的交互" tabindex="-1"><a class="header-anchor" href="#_2-给用户一个友好的交互" aria-hidden="true">#</a> 2. 给用户一个友好的交互</h5><p>一般就是一些互动式的交互，询问一些配置项，然后最终会根据这些配置项去选择对应的模版，并做一些相应的改动</p><h5 id="_3-输出到目标目录-安装依赖-运行起来" tabindex="-1"><a class="header-anchor" href="#_3-输出到目标目录-安装依赖-运行起来" aria-hidden="true">#</a> 3. 输出到目标目录，安装依赖，运行起来</h5><p>这个就不多说了</p><blockquote><p>而这，单单只是一个脚手架工具，起了一个初始化模版项目而已</p></blockquote><p>现在的 <code>vue-cli</code> 是提供完整工具链的工具，几乎包含了所有基于 <code>vue</code> 开发涉及的功能</p><p>这种方式也是社区目前推崇的，同类型的，比如 <code>create-react-app</code>, <code>angular-cli</code> 等</p><h3 id="想清楚这件事儿" tabindex="-1"><a class="header-anchor" href="#想清楚这件事儿" aria-hidden="true">#</a> 想清楚这件事儿</h3><p>现在，我们不谈架构和具体实现，单纯康康这件事儿，大致确定我们的目标（产品需求）</p><p>1、肯定还是要初始化一个项目模版的，但是模版要多元化，可配置，可丰富（生态）</p><p>2、模版项目里不应该再有乱七八糟的 <code>webpack</code>, <code>rollup</code>, <code>babel</code> 等配置，不需要用户去承担维护，说白了，给用户一个黑盒，用就行（高大上的说法 -- 开箱即用）</p><p>3、用户还是有特定的场景需要去配置，比如加个 <code>webpack</code> 的 <code>loader</code> 处理某些文件等，这种时候不需要去 <code>eject</code> （不是黑 <code>create-react-app</code>）</p><p>4、总结一下，就是要做到用户在使用体感上「傻瓜式」、「零成本」、「易拓展」、「可定制」</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/16/167b74a45d034c6d~tplv-t2oaga2asx-watermark.awebp" alt="哈哈哈哈"></p><p>好！</p><p>这个活儿，我接了！！</p><p>不要慌，首先搬出神特么的架构图</p>',17),g={href:"https://imgtu.com/i/fvdtUI",target:"_blank",rel:"noopener noreferrer"},h=n("img",{src:"https://z3.ax1x.com/2021/08/21/fvdtUI.png",alt:"fvdtUI.png"},null,-1),f=p(`<p>我们给上边的要求转换成「程序员语言」</p><blockquote><p>不一定是 <code>vue-cli</code> 的实现套路，所以，假设我们的 <code>cli</code> 工具叫 <code>蛋蛋</code></p></blockquote><p>1、<code>cli</code> 命令加个参数，比如这样</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">dd</span> create <span class="token parameter variable">-template</span><span class="token operator">=</span>default
<span class="token function">dd</span> create <span class="token parameter variable">-template</span><span class="token operator">=</span>typescript
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>然后就通过这个 <code>template</code> 拿到参数，然后动态的拼一个远程地址</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> remoteRepoUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">https://dd.com/lib/template/dd-templates/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>template<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，通过去拉代码下来...</p><blockquote><p>当然这里顺带就把所有的这种交互式的配置项一把梭封装了，会玩儿的还可以给整成可视化的（<code>vue-cli</code> 已支持）</p></blockquote><p>2、模版里面不再保留 <code>webpack</code> 这类配置文件，统一抽一个 <code>service</code> 模块出来，通过这个 <code>service</code> 模块来启动、调试、打包、测试等</p><p>这其实也不新鲜，对面的 <code>react</code> 不就这么搞的么，所以，这样我们生成的项目，一看 <code>package.json</code> 中的命令，就这样了</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token string-property property">&quot;start&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dd-service start&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dd-service build&quot;</span><span class="token punctuation">,</span>
  <span class="token string-property property">&quot;eject&quot;</span><span class="token operator">:</span> <span class="token string">&quot;dd-service what fuck?&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样的好处是啥，抛开高端用词，本质就是用户不需要去维护这种业务之外的东西，不然还搞 <code>webpack</code>，很闹心的，这就交给专门维护 <code>service</code> 模块的同学了，对用户来说工作仅仅就是根据需要升级这个包的版本了</p><p>但是！</p><p>这样也造就了一个问题，这对用户来说，底层的配置项就是一个黑盒了，总有那么三三两两的需求，我确实需要去增加/修改一些配置，肿么办？肿么办？</p><p>难道，你要我 <code>eject</code>? （真不是黑）</p><p>当当当当！（脑补音效）</p><p>插件机制啊，还记得我上节课，啥课来着，给大家讲了插件机制吗？</p><p>3、好，设计一个插件机制</p><p>插件机制现在是运用广泛的一项基础技术，在我们身边的技术栈随处可见</p><p><code>vue-cli</code>, <code>umi</code>, <code>babel</code>, <code>webpack</code>, <code>rollup</code>...</p><p>继续，还是尝试把复杂的东西说简单一点，什么是插件机制？</p><blockquote><p>本质上，就是对外暴露出可定制化拓展内部能力的机制</p></blockquote><p>还是装大象的问题，我们也抛开架构和具体实现，康康怎么回事儿？</p><p>1、对外，对外，说明外部可注册插件</p><p>2、对内，插件是对能力的拓展和升级</p><p>3、定制化，说明用户是可以随心所欲的进行能力拓展，但是有边界，边界在于内部暴力出多少能力给外边去操作</p><p><img src="https://p1-jj.byteimg.com/tos-cn-i-t2oaga2asx/gold-user-assets/2018/12/16/167b74a45d1e5f29~tplv-t2oaga2asx-watermark.awebp" alt="一顿操作"></p><p>「程序员语言」</p><p>1、注册机制</p><p>五花八门，挑个好用、你喜欢的就行～</p><blockquote><p>还是强调一下，不一定是 <code>vue-cli</code>的实现，所以我们的 <code>cli</code> 工具还是叫蛋蛋～</p></blockquote><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 比如，用户可以提供一个配置文件 dd.config.js</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;ddPlugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;service&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// your service</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;presets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token comment">// your presets</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用户可以通过这种方式去引入、并使用某些能力，比较复杂的最好还是分个类，做到物以类聚（单一）</p><p>2、提供一套写插件机制的套路</p><p>一般来说，插件都是有自己固定写法的，每家厂牌的风格不一样，比如 <code>webpack</code> 的插件和 <code>babel</code> 的插件，写法就完全不一样</p><blockquote><p>还是强调一下，不一定是 <code>vue-cli</code>的实现，所以我们的 <code>cli</code> 工具还是叫蛋蛋～</p></blockquote><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">// dd.clean.plugin.js</span>
module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">api<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// just do it! 鸿星尔克</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们就这样，然后在 <code>api</code> 上做文章，说白了就是在这个上边挂一些能力，给外界进行拓展，比如想自定义一个命令 <code>clean</code></p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> rimraf <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;rimraf&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

module<span class="token punctuation">.</span><span class="token function-variable function">exports</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">api<span class="token punctuation">,</span> options</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  api<span class="token punctuation">.</span><span class="token function">registerCommand</span><span class="token punctuation">(</span><span class="token string">&#39;clean&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">rimraf</span><span class="token punctuation">(</span><span class="token string">&#39;./dist&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最后，控制边界，其实就是「约定大于配置」哀莫大于心死～</p><blockquote><p>api 暴露多少，就只能玩儿多少东西，边界是可控的</p></blockquote><p>剧终～</p>`,42);function _(q,j){const a=o("ExternalLinkIcon");return c(),i("div",null,[r,n("p",null,[n("a",d,[e("官方文档"),s(a)])]),u,n("p",null,[n("a",k,[e("源码"),s(a)])]),v,n("p",null,[n("a",m,[e("vue-templates"),s(a)])]),b,n("p",null,[n("a",g,[h,s(a)])]),f])}const y=t(l,[["render",_],["__file","Vuecli.html.vue"]]);export{y as default};