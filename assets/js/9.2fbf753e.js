(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{372:function(e,s,t){"use strict";t.r(s);var r=t(45),n=Object(r.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"promisea-规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promisea-规范"}},[e._v("#")]),e._v(" PromiseA+规范")]),e._v(" "),t("p",[e._v("讲解PromiseA+规范前, 咱们先来了解一下这些术语, 以便在后续提到的时候有明确且统一的概念.")]),e._v(" "),t("h2",{attrs:{id:"术语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#术语"}},[e._v("#")]),e._v(" 术语")]),e._v(" "),t("ol",[t("li",[e._v("promise 是一个有then方法的对象或者是函数，行为遵循本规范")]),e._v(" "),t("li",[e._v("thenable 是一个有then方法的对象或者是函数")]),e._v(" "),t("li",[e._v("value 是promise状态成功时的值，也就是resolve的参数, 包括各种数据类型, 也包括undefined/thenable或者是 promise")]),e._v(" "),t("li",[e._v("reason 是promise状态失败时的值, 也就是reject的参数, 表示拒绝的原因")]),e._v(" "),t("li",[e._v("exception 是一个使用throw抛出的异常值")])]),e._v(" "),t("h2",{attrs:{id:"规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#规范"}},[e._v("#")]),e._v(" 规范")]),e._v(" "),t("p",[e._v("接下来分几部分来讲解PromiseA+规范.")]),e._v(" "),t("h3",{attrs:{id:"promise-states"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#promise-states"}},[e._v("#")]),e._v(" Promise States")]),e._v(" "),t("p",[e._v("promise应该有三种状态. 要注意他们之间的流转关系.")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("pending")]),e._v(" "),t("p",[e._v("1.1 初始的状态, 可改变.\n1.2 一个promise在resolve或者reject前都处于这个状态。\n1.3 可以通过 resolve -> fulfilled 状态;\n1.4 可以通过 reject -> rejected 状态;")])]),e._v(" "),t("li",[t("p",[e._v("fulfilled")]),e._v(" "),t("p",[e._v("2.1 最终态, 不可变.\n2.2 一个promise被resolve后会变成这个状态.\n2.3 必须拥有一个value值")])]),e._v(" "),t("li",[t("p",[e._v("rejected")]),e._v(" "),t("p",[e._v("3.1 最终态, 不可变.\n3.2 一个promise被reject后会变成这个状态\n3.3 必须拥有一个reason")])])]),e._v(" "),t("p",[e._v("Tips: 总结一下, 就是promise的状态流转是这样的")]),e._v(" "),t("p",[e._v("pending -> resolve(value) -> fulfilled\npending -> reject(reason) -> rejected")]),e._v(" "),t("p",[e._v("看一下图, 可能会更清晰一点, https://www.processon.com/diagraming/606569d1e401fd13004977d2")]),e._v(" "),t("h3",{attrs:{id:"then"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#then"}},[e._v("#")]),e._v(" then")]),e._v(" "),t("p",[e._v("promise应该提供一个then方法, 用来访问最终的结果, 无论是value还是reason.")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("promise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("onFulfilled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" onRejected"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("ol",[t("li",[t("p",[e._v("参数要求")]),e._v(" "),t("p",[e._v("1.1 onFulfilled 必须是函数类型, 如果不是函数, 应该被忽略.\n1.2 onRejected 必须是函数类型, 如果不是函数, 应该被忽略.")])]),e._v(" "),t("li",[t("p",[e._v("onFulfilled 特性")]),e._v(" "),t("p",[e._v("2.1 在promise变成 fulfilled 时，应该调用 onFulfilled, 参数是value\n2.2 在promise变成 fulfilled 之前, 不应该被调用.\n2.3 只能被调用一次(所以在实现的时候需要一个变量来限制执行次数)")])]),e._v(" "),t("li",[t("p",[e._v("onRejected 特性")]),e._v(" "),t("p",[e._v("3.1 在promise变成 rejected 时，应该调用 onRejected, 参数是reason\n3.2 在promise变成 rejected 之前, 不应该被调用.\n3.3 只能被调用一次(所以在实现的时候需要一个变量来限制执行次数)")])]),e._v(" "),t("li",[t("p",[e._v("onFulfilled 和 onRejected 应该是微任务")]),e._v(" "),t("p",[e._v("这里用queueMicrotask来实现微任务的调用.")])]),e._v(" "),t("li",[t("p",[e._v("then方法可以被调用多次")]),e._v(" "),t("p",[e._v("5.1 promise状态变成 fulfilled 后，所有的 onFulfilled 回调都需要按照then的顺序执行, 也就是按照注册顺序执行(所以在实现的时候需要一个数组来存放多个onFulfilled的回调)\n5.2 promise状态变成 rejected 后，所有的 onRejected 回调都需要按照then的顺序执行, 也就是按照注册顺序执行(所以在实现的时候需要一个数组来存放多个onRejected的回调)")])]),e._v(" "),t("li",[t("p",[e._v("返回值")]),e._v(" "),t("p",[e._v("then 应该返回一个promise")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[e._v("promise2 "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" promise1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("then")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("onFulfilled"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" onRejected"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])])]),t("p",[e._v("6.1 onFulfilled 或 onRejected 执行的结果为x, 调用 resolvePromise( 这里大家可能难以理解, 可以先保留疑问, 下面详细讲一下resolvePromise是什么东西 )\n6.2 如果 onFulfilled 或者 onRejected 执行时抛出异常e, promise2 需要被 reject\n6.3 如果 onFulfilled 不是一个函数, promise2 以 promise1 的 value 触发 fulfilled\n6.4 如果 onRejected 不是一个函数, promise2 以 promise1 的 reason 触发 rejected")])]),e._v(" "),t("li",[t("p",[e._v("resolvePromise")]),e._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("resolvePromise")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("promise2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" resolve"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" reject"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])]),t("p",[e._v("7.1 如果 promise2 和 x 相等，那么 reject TypeError\n7.2 如果 x 是一个 promsie\n如果x是pending态，那么promise必须要在pending,直到 x 变成 fulfilled or rejected.\n如果 x 被 fulfilled, fulfill promise with the same value.\n如果 x 被 rejected, reject promise with the same reason.\n7.3 如果 x 是一个 object 或者 是一个 function\nlet then = x.then.\n如果 x.then 这步出错，那么 reject promise with e as the reason.\n如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)\nresolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);\nrejectPromise 的 入参是 r, reject promise with r.\n如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略。\n如果调用then抛出异常e\n如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略\n则，reject promise with e as the reason\n如果 then 不是一个function. fulfill promise with x.")]),e._v(" "),t("p",[e._v("这段描述看起来非常的空洞乏味, 最重要的是看不懂！ 所以待会实现代码的时候, 同学们注意一下resolvePromise函数具体的实现, 结合代码来看会好很多.")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);