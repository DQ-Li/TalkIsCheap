/*
* 函数防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
*
* timer只能在setTimeout的父级作用域中，这样才是同一个timer
* 并且为了方便防抖函数的调用和回调函数fn的传参问题，我们应该用闭包来解决
* */

function debounce (fn, delay = 500) {
  // 创建一个标记用来存放定时器的返回值
  let timeout = null
  return function () {
    // 每当用户输入的时候把前一个 setTimeout clear 掉
    clearTimeout(timeout)
    // 然后又创建一个 setTimeout，重新计算时间
    timeout = setTimeout(() => {
      fn.apply(this, arguments)
    }, delay)
  }
}

// 使用
function sayHi () {
  console.log('防抖成功')
}

const inp = document.getElementById('inp')
const testFn = debounce(sayHi, 1000)
// addEventListener 可以使 testFn 里的this指向绑定的元素
inp.addEventListener('click', testFn)
