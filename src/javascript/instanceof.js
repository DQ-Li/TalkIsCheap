/*
* instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上
* */

function myInstanceof(left, right) {
    // 基本数据类型直接返回false
    if(typeof left !== 'object' || left === null) return false
    // getPrototypeOf 是 Object 对象自带的一个方法，能够拿到参数的原型对象
    let proto = Object.getPrototypeOf(left)
    while (true){
        //查找到尽头，还没找到
        if(proto === null ) return false
        //找到相同的原型对象
        if(proto === right.prototype) return true
        proto = Object.getPrototypeOf(proto)
    }
}