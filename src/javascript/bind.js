// Function.prototype.bind(this, arg1, arg2, …)
// 可以绑定this，并且传入参数，方式与call相同，但是不会执行，返回已绑定this的新函数

Function.prototype.myBind = function (context = window, ...args) {
    context = context || window
    return (...newArgs) => {
        this.apply(context, [...args, ...newArgs])
    }
}