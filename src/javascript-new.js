// 因为 new 是关键字，所以无法直接覆盖，所以我们写一个函数，来模拟 new 的效果

/*
* 1.首先创建一个空对象
* 2.把函数的prototype对象设置为对象的原型
* 3.让函数的this指向这个对象，执行构造函数的代码（为这个新对象添加属性）
* 4.判断函数的返回值类型，如果是值类型，返回创建的对象；
*   如果是引用类型，就返回这个引用类型的对象。
*
* */

function _new (constructor, ...arg) {
  if (typeof constructor !== 'function') {
    throw new Error('type error')
  }

  const obj = Object.create(constructor)
  const result = constructor.apply(obj, arg)

  return (typeof result === 'object') ? result : obj
}
