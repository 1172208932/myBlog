# NewBlue(wxpage)

## 前言

### 说明

微信登录方法封装

## 如何应用？

### 📦 Install

```bash
yarn add @newblue/wxpage
npm install @newblue/wxpage --registry=http://10.200.37.236:4873/
```

### Usage

```js
    import {
        autoLogin, // 微信登录方法
        getWxToken, // 获取微信token
        getAccessToken // 获取AccessToken

    } from '@newblue/wxpage';
```

## Publish

```bash
npm run pub
```

## 技术

### 技术栈：

rollup/ts/...

### 🔨 示例

```js
    autoLogin(264612);

    
    const token =  getWxToken()
    const accessToken = getAccessToken()
```

## 仓库地址

http://10.30.100.65/tv-template/pages-template
[gitlab代码](http://10.30.100.65/-/ide/project/tv-template/pages-template/tree/master/-/packages/wxpage/src/index.ts/)

##  ⚠注意

 安装包依赖
```json
    "axios": "^0.27.2",
```
