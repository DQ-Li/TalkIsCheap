
/**
 * 发布-订阅的通用全局实现
 * vue中的eventBus实现也是这样
 */
var Event = (function() { // 声明一个全局对象Event
    const handlers = {}

    // 缓存队列
    const listen = (eventType, fn) => {
        if(!handlers[eventType]) {
            handlers[eventType] = []
        }

        handlers[eventType].push(fn)
    }

    // 发布消息
    const trigger = (eventType, ...rest) => {
        const fns = handlers[eventType]

        if(fns && fns.length > 0) {
            fns.forEach(item => item(...rest))
        }
    }

    // 取消订阅事件
    const remove = (eventType, fn) => {
        const fns = handlers[eventType]
        if(fns){
            // 只传 eventType 时，移除该事件的所有监听者
            !fn && (fns.length = 0)

            const curIndex = fns.indexOf(fn)
            if (curIndex >= 0){
                fns.splice(curIndex, 1)
            }
        }
    }

    return {
        listen,
        trigger,
        remove
    }
})();

