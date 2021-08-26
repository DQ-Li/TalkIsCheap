// Function.prototype.call(this, arg1, arg2, …..)
// 可以改变this，并且传入参数，立刻执行，返回函数返回值

Function.prototype.myCall = function(context = window, ...args){
    context = context || window // 参数默认值并不会排除null，所以重新赋值
    context.fn = this // this是调用call的函数
    const result = context.fn(...args)
    delete context.fn // 执行后删除新增属性
    return result
}


// 手写apply函数
// 可以改变this，并且传入参数，与call不同的是，传入的参数是数组或类数组，立刻执行，返回函数返回值
// 只需要把形参 “...args” 改为 “arg = []”