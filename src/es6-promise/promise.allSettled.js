/*
* 参数：一个可迭代的对象，例如Array，其中每个成员都是Promise。
* 返回值：
*   返回一个在所有给定的promise都已经fulfilled或rejected后的promise，
*   并带有一个对象数组，每个对象表示对应的promise结果。
*   对于每个结果对象，都有一个 status 字符串。
*   如果它的值为 fulfilled，则结果对象上存在一个 value 。
*   如果值为 rejected，则存在一个 reason 。
*   value（或 reason ）反映了每个 promise 决议（或拒绝）的值。
* */

const formatSettledResult = (success, value) =>
  success
    ? { status: 'fulfilled', value }
    : { status: 'rejected', reason: value }

function promiseAllSettled (iterators) {
  const promises = Array.from(iterators)
  const num = promises.length
  const settledList = new Array(num)
  // 计数器：标记所有实例（fulfilled 和 rejected）的个数
  let settledNum = 0
  return new Promise(resolve => {
    promises.forEach((promise, index) => {
      promise
        .then(value => {
          settledList[index] = formatSettledResult(true, value)
          if (++settledNum === num) {
            resolve(settledList)
          }
        })
        .catch(error => {
          settledList[index] = formatSettledResult(false, error)
          if (++settledNum === num) {
            resolve(settledList)
          }
        })
    })
  })
}
