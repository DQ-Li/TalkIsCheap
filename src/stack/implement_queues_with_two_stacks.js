var CQueue = function() {
    // 存数据：往stackA里push
    // 取数据：从stackB里pop，stackB里没有了再从stackA里pop出来，push进stackB，再pop
    this.stackA = []
    this.stackB = []
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    // 存数据
    this.stackA.push(value)
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    // 取数据
    if(!this.stackB.length){
        if(!this.stackA.length){
            return -1
        }else{
            while(this.stackA.length){
                this.stackB.push(this.stackA.pop())
            }
        }
    }
    return this.stackB.pop()
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */