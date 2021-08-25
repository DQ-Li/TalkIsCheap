
class Event {
    constructor(){
        this.handlers = {}
    }

    // 订阅事件
    on(eventType, handler){
        let self = this
        if(!(eventType in self.handlers)){
            self.handlers[eventType] = []
        }
        self.handlers[eventType].push(handler)
        return self
    }

    // 触发事件（发布事件）
    emit(eventType){
        let self = this
        let handlerArgs = Array.prototype.slice.call(arguments,1)
        for(let i=0; i<self.handlers[eventType].length; i++){
            self.handlers[eventType][i].apply(self,handlerArgs)
        }
        return self
    }

    // 删除事件
    off(eventType,handler){
        let currentEvent = this.handlers[eventType]
        if(currentEvent){
            for(let i=currentEvent.length - 1; i>=0; i--){
                if(currentEvent[i] === handler){
                    currentEvent.splice(i, 1)
                }
            }
        }
        return this
    }
}