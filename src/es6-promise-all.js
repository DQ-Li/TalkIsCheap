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
function promiseAll (promises) {
  // all 方法也返回一个promise对象
  return new Promise((resolve, reject) => {
    // 保存回调结果的数组
    const result = []
    // 当前迭代的对象的下标
    let itelatorIndex = 0
    // 累加器，用来判断执行方法队列是否执行完成
    let count = 0
    for (const item of promises) {
      // 返回结果的下标
      let resultIndex = itelatorIndex
      itelatorIndex += 1
      // 包一层，以兼容非promise的情况
      Promise.resolve(item).then((value) => {
        result[resultIndex] = value
        count += 1
        if (count === itelatorIndex) {
          resolve(result)
        }
      })
        .catch(reason => {
          reject(reason)
        })
    }

    // 处理空 promises 的情况
    if (itelatorIndex === 0) {
      resolve(result)
    }
  })
}
