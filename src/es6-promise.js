const PENDING = "pending";
const RESOLVED = "resolved";
const REJECTED = "rejected";

class MyPromise {
    constructor(executor){
        // executor 是一个执行器，进入会立即执行
        // 并传入resolve和reject方法
        executor(this.resolve, this.reject)
    }
    // 初始化状态
    state = PENDING;

    // 用于保存 resolve 或者 rejected 传入的值
    value = null;

    // 用于保存 resolve 的回调函数
    resolvedCallbacks = [];

    // 用于保存 reject 的回调函数
    rejectedCallbacks = [];

    // 状态转变为 resolved 方法
    resolve = (value) => {
        // 判断传入元素是否为 Promise 值，如果是，则状态改变必须等待前一个状态改变后再进行改变
        if (value instanceof MyPromise) {
            return value.then(resolve, reject);
        }

        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变，
            if (this.state === PENDING) {
                // 修改状态
                this.state = RESOLVED;

                // 设置传入的值
                this.value = value;

                // 执行回调函数
                this.resolvedCallbacks.forEach(callback => {
                    callback(value);
                });
            }
        }, 0);
    }

    // 状态转变为 rejected 方法
     reject = (value) => {
        // 保证代码的执行顺序为本轮事件循环的末尾
        setTimeout(() => {
            // 只有状态为 pending 时才能转变
            if (this.state === PENDING) {
                // 修改状态
                this.state = REJECTED;

                // 设置传入的值
                this.value = value;

                // 执行回调函数
                this.rejectedCallbacks.forEach(callback => {
                    callback(value);
                });
            }
        }, 0);
    }

}

MyPromise.prototype.then = function(onResolved, onRejected) {
    // 首先判断两个参数是否为函数类型，因为这两个参数是可选参数
    onResolved =
        typeof onResolved === "function"
            ? onResolved
            : function(value) {
                return value;
            };

    onRejected =
        typeof onRejected === "function"
            ? onRejected
            : function(error) {
                throw error;
            };

    // 如果是等待状态，则将函数加入对应列表中
    if (this.state === PENDING) {
        this.resolvedCallbacks.push(onResolved);
        this.rejectedCallbacks.push(onRejected);
    }

    // 如果状态已经凝固，则直接执行对应状态的函数

    if (this.state === RESOLVED) {
        onResolved(this.value);
    }

    if (this.state === REJECTED) {
        onRejected(this.value);
    }
};
