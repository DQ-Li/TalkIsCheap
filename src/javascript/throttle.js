// 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 思路：每次触发事件时都判断当前是否有等待执行的延时函数

function throttle (fn, delay = 500) {
  // 通过闭包保存一个标记
  let tag = true
  return function () {
    // 在函数开头判断标记是否为true，不为true则return
    if (!tag) return
    // 立即设置为false
    tag = false
    // 将外部传入的函数的执行放在setTimeout中
    setTimeout(() => {
      // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
      // 当定时器没有执行的时候标记永远是false，在开头被return掉
      fn.apply(this, arguments)
      tag(true)
    }, delay)
  }
}

// 使用
function sayHi (e) {
  console.log(e.target.innerWidth, e.target.innerHeight)
}
window.addEventListener('resize', throttle(sayHi))
