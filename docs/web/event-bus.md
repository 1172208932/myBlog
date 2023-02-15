# NewBlue(EventBus)


## 前言

### 说明

简单的发布订阅通信类（[类似eventemitter3](https://github.com/primus/eventemitter3)）

## 如何应用？

### 📦 Install

```bash
yarn add @newblue/event-bus
```

[gitlab代码](http://10.30.100.65/-/ide/project/tv-template/pages-template/tree/master/-/packages/event-bus/src/index.ts/)

### Usage

```js
import EventBus from '@newblue/event-bus';
```

## Contribute

1. `yarn dev` to develop package
2. `cd test && yarn && yarn dev` to develop test

## Publish

```bash
npm run pub
```

## 技术

### 技术栈：

rollup/ts/...

### 🔨 示例

```js
    componentDidMount() {
        EventBus.on('BEGIN', this.immediatelyBegin, this);
    }
    componentWillUnmount() {
        EventBus.off('BEGIN', this.immediatelyBegin);
    }

    // other class
    EventBus.fire('BEGIN')
```
