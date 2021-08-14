// 柯里化:把接受多个参数的函数，变换成接受一个单一参数的函数，并且返回接受剩下参数的新函数

function curry(func) {
    return function curried(...args1) {
        if(args1.length >= func.length){ // Function.length 属性指明函数的形参个数
            return func.apply(this, args1)
        }else {
            return function (...args2) {
                return curried.apply(this,args1.concat(args2))
            }
        }
    }
}


