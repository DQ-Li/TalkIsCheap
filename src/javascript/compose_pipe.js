// js高级进阶之compose函数和pipe函数
/*
* compose函数指的是对要嵌套执行的函数进行平铺，嵌套执行指的是一个函数的返回结果作为另一个函数的执行参数。
* 核心思想是专注于函数执行过程，隔离数据的影响。
* compose函数是从右向左去实现的数据执行流，而从左向右的数据执行流就是pipe函数了
*
* */

const compose = function (){
    let args = [].slice.call(arguments);
    return function (x){
        return args.reduceRight((res, cb) => cb(res),x);
    }
}

const pipe = function (...args){
    return function (x){
        return args.reduce((res, cb) => cb(res),x);
    }
}

let add = x => x+1;
let multiple = x => x*10;

let fn1 = compose(add,multiple);
let fn2 = pipe(multiple,add);
console.log(fn1(1));
console.log(fn2(1));