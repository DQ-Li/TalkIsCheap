## 题记

一些面试常见的手撕代码题，持续更新中。。。



### 目录以及巨人的肩膀

#### 1. JavaScript

- 深拷贝（解决循环引用的问题）

- 7 种继承方式
  - [JavaScript Guidebook - 原型链](https://tsejx.github.io/javascript-guidebook/object-oriented-programming/inheritance/prototype-chain)
- new
- 函数柯里化
- 防抖
- 节流
  - [第 3 题：什么是防抖和节流？有什么区别？如何实现？ #5](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/5)
- call/apply
- bind
    - [如何手写call、apply、bind？](https://segmentfault.com/a/1190000018832498)
- instanceof
    - [JS总结笔记（@神三元灵魂之问上）](https://juejin.cn/post/6844904078254817288#heading-5)

#### 2. ES6

- Promise 以及 Promise.prototype.then(), Promise.prototype.finally() 和 Promise.prototype.catch()
  - Promise.prototype.finally()
    - 由于无法知道`promise`的最终状态，所以`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。
    - 与`Promise.resolve(2).then(() => {}, () => {})` （resolved的结果为`undefined`）不同，`Promise.resolve(2).finally(() => {}) `，resolved的结果为 2。
  - [promise原理—一步一步实现一个promise](https://juejin.cn/post/6844903831881400333)
  - [32 个手撕 JS 让你彻底摆脱初级前端](https://mp.weixin.qq.com/s/eO18fhQ81CBMgQYBKyO8jg)
- Promise.all()
  - [致全网那些所谓的手写Promise.all](https://zhuanlan.zhihu.com/p/362648760?utm_source=wechat_session&utm_medium=social&utm_oi=637909224051707904)
- Promise.allSettled()
  - [「全」手写Promise的相关方法](https://juejin.cn/post/6844904020029472776#heading-10)
- Promise.any()
- Promise.race()

#### 3. vue
- 发布订阅的通用实现
    - [【vue系列】从发布订阅模式解读，到vue响应式原理实现（包含vue3.0）](https://juejin.cn/post/6854573219970564104#heading-3)

