# NewBlue(wx-utils)

## 前言

### 说明

微信分享方法封装

## 如何应用？

### 📦 Install

```bash
yarn add @newblue/wx-utils
npm install @newblue/wx-utils --registry=http://10.200.37.236:4873/
```

### Usage

```js
    import {
        wxShare //微信分享初始化
    } from '@newblue/event-count-down';
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
       wxShare(
        true,
        "2021浙江省“体坛十佳”候选人物",
        "为自己心目中的浙江“体坛英雄”投票",
        "2021浙江省“体坛十佳”候选人物",
        "https://mhudong.cztv.com/264665",
        "https://ohudong.cztv.com/1/264665/images/share.jpg"
      );
```

## 仓库地址

-  http://10.30.100.65/tv-template/pages-template

- [代码](http://10.30.100.65/-/ide/project/tv-template/pages-template/tree/master/-/packages/wx-utils/src/index.ts/)

##  ⚠注意

 安装包依赖
```json
    "axios": "^0.27.2",
    "weixin-js-sdk": "^1.6.0"
```
