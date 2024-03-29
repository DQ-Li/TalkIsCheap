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
  - [ES6 JS实现节流防抖](https://blog.csdn.net/qq_33763827/article/details/107704640)
- call/apply
- bind
    - [如何手写call、apply、bind？](https://segmentfault.com/a/1190000018832498)
- instanceof
    - [JS总结笔记（@神三元灵魂之问上）](https://juejin.cn/post/6844904078254817288#heading-5)
- Object.is
- Array.prototype.flat()
- 用setTimeout实现setInterval
  - [用setTimeout和clearTimeout简单实现setInterval与clearInterval](https://juejin.cn/post/6844903839934447629#heading-0)
- js设置/获取/删除cookie
  - [原生JAVASCRIPT操作cookie方法](https://blog.csdn.net/alokka/article/details/79472846)
- ajax
  - [ajax、axios、fetch的区别](https://juejin.cn/post/6844904036232069127)
- 对象构造树形结构
  - [JavaScript 构造树形结构的一种高效算法](https://www.cnblogs.com/lzkwin/p/12143458.html)
- 原生js对元素的拖拽和放下
- compose函数
  - [js高级进阶之compose函数和pipe函数](https://blog.csdn.net/weixin_40073115/article/details/103842925)
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
- 观察者模式
    - [【vue系列】从发布订阅模式解读，到vue响应式原理实现（包含vue3.0）](https://juejin.cn/post/6854573219970564104#heading-3)
- 发布订阅模式的实现
    - 虽然两种模式都存在订阅者和发布者（具体观察者可认为是订阅者、具体目标可认为是发布者），但是观察者模式是由具体目标调度的，而发布/订阅模式是统一由调度中心调的，所以观察者模式的订阅者与发布者之间是存在依赖的，而发布/订阅模式则不会。
- jsonp
    - [如何手写一个Jsonp方法](https://blog.csdn.net/weixin_40483654/article/details/106434990)
- 图片懒加载
  - [IntersectionObserver实现图片懒加载（滚动动画）](https://juejin.cn/post/6844903930183303181)

#### 4. 树
- 建立二叉搜索树
    - [JS实现二叉搜索树](https://blog.csdn.net/weixin_45752307/article/details/113348405)
- 根据中序+先序/后序 建树
    - [LeetCode 105](https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/solution/jian-dan-gan-jing-de-xie-fa-by-dokomzhu-25oi/)
- 二叉树的镜像

#### 5. 栈
- 用两个栈模拟队列
    - [剑指 Offer 09. 用两个栈实现队列](https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/solution/yong-liang-ge-zhan-shi-xian-yi-ge-dui-li-qmbm/)

#### 6. 排序
- 冒泡排序
- 选择排序
- 插入排序
- 希尔排序
- 快速排序
- 归并排序
    - [[20190306] 排序算法](https://www.yuque.com/ericlee/fontend/grk42m#9fe9c6eb)
- 堆排序

#### 7. 算法题
- 求两个日期中间的有效日期
    