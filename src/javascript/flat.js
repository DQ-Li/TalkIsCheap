// forEach(), filter(), reduce(), every() 和some() 都会跳过空位


const flat = arr => {
    return arr.reduce((pre,cur) => {
        return pre.concat(Array.isArray(cur) ? flat(cur) : cur)
    }, [])
}