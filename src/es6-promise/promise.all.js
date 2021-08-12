/*
* Promise.all的完成体应该符合以下特征：
*   1. 输入为Iterator类型的参数，可以是Array，Map， Set，String等
*   2. 若输入的可迭代数据里不是Promise，则也需要原样输出
*   3. 返回一个Promise实例，可以调用then和catch方法
*   4. 输出在then里体现为保持原顺序的数组
*   5. 输出在catch体现为最早的reject返回值
*   6. 空 promises 参数， resolve返回空数组
*
* */
function promiseAll (iterators) {
  const promises = Array.from(iterators)
  const num = promises.length
  // 保存回调结果的数组
  const resultList = new Array(num)
  // 计数器，标记 fulfilled 的实例个数
  let fulfilledNum = 0

  // all 方法也返回一个promise对象
  return new Promise((resolve, reject) => {
    // 处理空 promises 的情况
    if (num === 0) {
      resolve(resultList)
    }

    promises.forEach((item, index) => {
      // 包一层，以兼容非promise的情况
      // 如果 Promise.resolve 参数是一个 promise，那么将返回这个 promise
      Promise.resolve(item)
        .then((value) => {
          resultList[index] = value
          if (++fulfilledNum === num) {
            resolve(resultList)
          }
        })
        .catch(reason => {
          reject(reason)
        })
    })
  })
}
