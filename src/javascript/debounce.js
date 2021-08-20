/*
* 函数防抖：在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时
*
* timer只能在setTimeout的父级作用域中，这样才是同一个timer
* 并且为了方便防抖函数的调用和回调函数fn的传参问题，我们应该用闭包来解决
* */

function debounce(fn, delay = 500){
    let timer
    return function () {
        let context = this
        let args = arguments
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context,args)
        },delay)
    }
}