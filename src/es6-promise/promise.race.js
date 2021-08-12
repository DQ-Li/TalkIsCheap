/*
* 参数：iterable，可迭代对象。
* 返回值：
*   一个待定的 Promise
*   只要给定的迭代中的一个promise解决或拒绝
*   就采用第一个promise的值作为它的值
*   从而异步地解析或拒绝
*
* */
function promiseRace (promises) {
  return new Promise((resolve, reject) => {
    for (const item of promises) {
      Promise.resolve(item).then(
        value => resolve(value),
        reason => reject(reason)
      )
    }
  })
}
