// 递归遍历对象，解决循环引用问题

/*
* 1.是不是基本数据类型 直接返回，其他需要创建新的结构
* 2.循环引用的问题  weakmap
* 3.symbol的问题   用  Reflect.ownKeys() 获取所有的键值
*   Reflect.ownKeys()返回数组，包含对象自身的所有属性，不管属性名是Symbol或字符串，也不管是否可枚举
*/

function deepClone (target) {
  const map = new WeakMap()
  function clone (target) {
    if (typeof target !== 'object' || target === 'null') return target
    if (map.has(target)) return map.get(target)

    const cloneTarget = target instanceof Array ? [] : {}
    map.set(target, cloneTarget)

    Reflect.ownKeys(target).forEach(key => {
      if(typeof target[key] !== 'object' || target[key] === 'null'){
        cloneTarget[key] = target[key]
      }else{
        cloneTarget[key] = deepClone(target[key])
      }
    })
    return cloneTarget

  }
  return clone(target)
}

