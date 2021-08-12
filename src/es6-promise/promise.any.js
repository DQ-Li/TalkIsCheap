/*
* 本质上，这个方法和Promise.all()是相反的。
* 如果传入的实例中，有任一实例变为fulfilled，那么它返回的 promise 实例状态立即变为fulfilled；
* 如果所有实例均变为rejected，那么它返回的 promise 实例状态为rejected。
*
* */

function promiseAny (iterators) {
  const promises = Array.from(iterators)
  const num = promises.length
  const rejectedList = new Array(num)
  // 计数器，标记 rejected 的实例个数
  let rejectedCount = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(value => resolve(value))
        .catch(error => {
          rejectedList[index] = error
          if (++rejectedCount === num) {
            reject(rejectedList)
          }
        })
    })
  })
}
