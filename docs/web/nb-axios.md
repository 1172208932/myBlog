# NewBlue(nb-axios)[新蓝网内部Axios二次封装]

### 说明

新蓝网axios请求二次封装

## 如何应用？

### 📦 Install

```bash
npm install @newblue/nb-axios --registry=http://10.200.37.236:4873/
```

### 异步请求使用方法
```js
import NbRequest from "nb-axios";

NbRequest.request(method, url, params = {}, headers = {})

// get方法
NbRequest.get(url, params, headers = {})

// post方法
NbRequest.post(url, params, headers = {})
```

### 所有入参
```ruby
* @param {*} url 请求url 【必填】
* @param {*} method 请求方法
* @param {*} [params={}] 请求数据
* @param {*} [headers={}] 请求头
* @param {boolean} [needQs=false] 请求数据是否需要qs序列化
* @param {string} [contentType='json'] 请求头类型 值为[json]或者[formData]，默认为json
* @param {string} [responseType='json'] 返回数据类型 默认为json
* @param {*} timeout 超时时间
* @param {*} [AxiosOptions={}] axios的官方配置 填写后会覆盖上面的入参
```

### 默认配置
```js
timeout='30秒'
method='POST'
retryTimes = 3 //重新请求次数
retryDelay=1000 //重新发起请求的延迟时间
```

### 额外入参说明
```
AxiosOptions参数新增了以下两个字段，用于控制发起重复请求的次数和delay
retryTimes = 3 //重新请求次数
retryDelay=1000 //重新发起请求的延迟时间
```

### 常见问题
- 如何安装
`npm install nb-axios --registry http://10.200.37.236:4873`
- 是否有引入其他库的Loading或者Toast组件
暂时没有，所以请求结束后也没有自动关闭弹窗等功能
- 如何登录npm
`npm adduser --registry http://10.200.37.236:4873`
- 如何发布npm包
`npm publish --registry http://10.200.37.236:4873`

### 仓库地址

http://10.30.100.65/tv-template/pages-template
[gitlab代码](http://10.30.100.65/-/ide/project/tv-template/pages-template/tree/master/-/packages/nb-axios/src/utils/request.js/)