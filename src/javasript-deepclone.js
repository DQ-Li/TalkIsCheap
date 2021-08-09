// 递归遍历对象，解决循环引用问题

/*
* 解决循环引用问题，我们需要一个存储容器存放当前对象和拷贝对象的对应关系
* 适合用key-value的数据结构进行存储，也就是map
* 当进行拷贝当前对象的时候，我们先查找存储容器是否已经拷贝过当前对象
* 如果已经拷贝过，那么直接把返回，没有的话则是继续拷贝
*
*
*/

function deepClone(target) {
    const map = new Map();
    function clone(target) {
        if(isObject(target)){
            let cloneTarget = isArray(target) ? [] : {};
            if(map.get(target)){
                return map.get(target)
            }
            map.set(target,cloneTarget);
            for(const key in target){
                cloneTarget[key] = target[key];
            }
            return cloneTarget;
        }else {
            return target;
        }
    }
    return clone(target);
}