import{_ as a,M as t,p,q as e,R as n,t as o,N as c,a1 as i}from"./framework-c4f3d865.js";const l={},u=i(`<h1 id="h5-打开点播页" tabindex="-1"><a class="header-anchor" href="#h5-打开点播页" aria-hidden="true">#</a> H5 打开点播页</h1><h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用" aria-hidden="true">#</a> 引用</h2><h3 id="再html中引人jsbridge个文件" tabindex="-1"><a class="header-anchor" href="#再html中引人jsbridge个文件" aria-hidden="true">#</a> 再html中引人jsbridge个文件</h3><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code>    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ohudong.cztv.com/1/263328/js/callApp.js?v=20220119000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
 <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://ohudong.cztv.com/1/263328/js/callUpApp.js?v=20220119000<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code> <span class="token keyword">const</span> <span class="token function-variable function">openTvApp</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token comment">// window.location.replace(&#39;https://mhudong.cztv.com/download/index.html&#39;)</span>
      <span class="token comment">// window.callUpApp(appurl)</span>
      <span class="token keyword">var</span> iosScheme <span class="token operator">=</span> <span class="token punctuation">{</span>
        protocol<span class="token operator">:</span> <span class="token string">&quot;ChinaBlueTV&quot;</span><span class="token punctuation">,</span>
        host<span class="token operator">:</span> <span class="token string">&quot;CallingAppFlag&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> androidScheme <span class="token operator">=</span> <span class="token punctuation">{</span>
        protocol<span class="token operator">:</span> <span class="token string">&quot;chinablue&quot;</span><span class="token punctuation">,</span>
        host<span class="token operator">:</span> <span class="token string">&quot;cztvrouter&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> tempUserAgent <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>

      <span class="token keyword">var</span> option <span class="token operator">=</span> <span class="token punctuation">{</span>
        scheme<span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>tempUserAgent<span class="token punctuation">)</span> <span class="token operator">?</span> iosScheme <span class="token operator">:</span> androidScheme<span class="token punctuation">,</span>
        intent<span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token keyword">package</span><span class="token operator">:</span> <span class="token string">&quot;com.chinablue.tv&quot;</span><span class="token punctuation">,</span>
          scheme<span class="token operator">:</span> <span class="token string">&quot;chinablue&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        universal<span class="token operator">:</span> <span class="token punctuation">{</span>
          host<span class="token operator">:</span> <span class="token string">&quot;mhudong.cztv.com/download/index.html&quot;</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        appstore<span class="token operator">:</span> <span class="token string">&quot;https://itunes.apple.com/cn/app/zhong-guo-lantv/id988616225?mt=8&quot;</span><span class="token punctuation">,</span>
        yingyongbao<span class="token operator">:</span> <span class="token string">&quot;https://a.app.qq.com/o/simple.jsp?pkgname=com.chinablue.tv&quot;</span><span class="token punctuation">,</span>
        fallback<span class="token operator">:</span> <span class="token string">&quot;https://mhudong.cztv.com/download/index.html&quot;</span><span class="token punctuation">,</span>
        timeout<span class="token operator">:</span> <span class="token number">3000</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>

      <span class="token comment">//打开当前视频对应点播页</span>
      <span class="token keyword">function</span> <span class="token function">openCurVideoApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> config <span class="token operator">=</span> <span class="token function">getCurVideoConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token function">callUpApp</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>


      <span class="token comment">//返回当前视频参数</span>
      <span class="token keyword">function</span> <span class="token function">getCurVideoConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">var</span> base64 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Base64</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> video_id <span class="token operator">=</span> base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token number">1315868</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 直播间ID</span>
        <span class="token keyword">var</span> type <span class="token operator">=</span> base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token number">0</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> video_title <span class="token operator">=</span> base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token string">&#39;“兔”露新声，越歌春韵！浙江卫视新春佳节晚会连台！&#39;</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">//1代表点播，999代表</span>
        <span class="token keyword">var</span> detail_type <span class="token operator">=</span> base64<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> ua <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent <span class="token operator">||</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> isAndroid <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> config<span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
          config <span class="token operator">=</span> <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            param<span class="token operator">:</span> <span class="token punctuation">{</span>
              detail_type<span class="token operator">:</span> detail_type<span class="token punctuation">,</span>
              video_id<span class="token operator">:</span> video_id<span class="token punctuation">,</span>
              video_title<span class="token operator">:</span> video_title<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
          config <span class="token operator">=</span> <span class="token punctuation">{</span>
            path<span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
            param<span class="token operator">:</span> <span class="token punctuation">{</span>
              videoDetailType<span class="token operator">:</span> <span class="token string">&quot;MQ==&quot;</span><span class="token punctuation">,</span>
              video_id<span class="token operator">:</span> video_id<span class="token punctuation">,</span>
              video_title<span class="token operator">:</span> video_title<span class="token punctuation">,</span>
              type<span class="token operator">:</span> type<span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>

        <span class="token keyword">return</span> config<span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">function</span> <span class="token function">callUpApp</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;***开始调起lib***&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">var</span> lib <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CallApp</span><span class="token punctuation">(</span>option<span class="token punctuation">)</span><span class="token punctuation">;</span>
        lib<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">var</span> ua <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>userAgent <span class="token operator">||</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> isAndroid <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">android</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">var</span> isIos <span class="token operator">=</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">iphone|ipad|ipod</span><span class="token regex-delimiter">/</span><span class="token regex-flags">i</span></span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span>ua<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>isAndroid<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        window<span class="token punctuation">.</span>location<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token string">&#39;http://tv.cztv.com/vplay/1315868.html&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">openCurVideoApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="注意" tabindex="-1"><a class="header-anchor" href="#注意" aria-hidden="true">#</a> 注意 ⚡</h2>`,7),r=n("li",null,"注意参数 直播间ID （video_id） 标题（video_title） 必填",-1),k={href:"http://10.30.100.65/-/ide/project/tv-template/vite-game-template/tree/feature-%E9%A3%9E%E9%B8%9Fapp-zxx/-/src/views/game/index.vue/",target:"_blank",rel:"noopener noreferrer"};function d(v,m){const s=t("ExternalLinkIcon");return p(),e("div",null,[u,n("ul",null,[r,n("li",null,[n("a",k,[o("参考项目"),c(s)])])])])}const g=a(l,[["render",d],["__file","callUpApp.html.vue"]]);export{g as default};