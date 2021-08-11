const PENDING = 'PENDING'; // 进行中
const FULFILLED = 'FULFILLED'; // 已成功
const REJECTED = 'REJECTED'; // 已失败

class MyPromise {
    constructor(exector) {
        // 初始化状态
        this.status = PENDING; // 状态
        this.value = undefined;
        this.reason = undefined;
        // Promise resolve时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
        this.onFulfilledCallbacks = [];
        // Promise reject时的回调函数集，因为在Promise结束之前有可能有多个回调添加到它上面
        this.onRejectedCallbacks = [];

        const resolve = value => {
            // 只有进行中状态才能更改状态
            if (this.status === PENDING) {
                this.status = FULFILLED;
                this.value = value;
                // 成功态函数依次执行
                this.onFulfilledCallbacks.forEach(fn => fn(this.value));
            }
        }

        const reject = reason => {
            // 只有进行中状态才能更改状态
            if (this.status === PENDING) {
                this.status = REJECTED;
                this.reason = reason;
                // 失败态函数依次执行
                this.onRejectedCallbacks.forEach(fn => fn(this.reason))
            }
        }

        try {
            // 立即执行executor
            // 把内部的resolve和reject传入executor，用户可调用resolve和reject
            exector(resolve, reject);
        } catch (e) {
            // executor执行出错，把错误内容reject抛出去
            reject(e);
        }
    }

    // onFulfilled  onRejected 为调用者传进来的 成功和失败的回调
    then(onFulfilled, onRejected) {
        // onFulfilled 和 onRejected应为函数
        onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
        onRejected = typeof onRejected === 'function' ? onRejected :
            reason => { throw new Error(reason instanceof Error ? reason.message : reason) }
        // 保存this
        const self = this;
        return new MyPromise((resolve, reject) => {
            // 如果上面的executor是一个异步的，执行then的时候 status一定是pending
            if (self.status === PENDING) {
                // 将调用者的回调包装后注册进promise的回调队列
                self.onFulfilledCallbacks.push(() => {
                    try {
                        const result = onFulfilled(self.value);
                        // then里面的回调如果是异步的promise，则等待异步执行完后，再进入new Promise的then中注册的回调
                        // 如果是同步的，直接进入 new Promise 的then中注册的回调
                        // 如果 result 是 Promise，result.then 也是 Promise
                        result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
                    } catch (e) {
                        reject(e);
                    }
                });

                self.onRejectedCallbacks.push(() => {
                    // 以下同理
                    try {
                        const result = onRejected(self.reason);
                        // 不同点：此时是reject
                        result instanceof MyPromise ? result.then(resolve, reject) : reject(result);
                    } catch (e) {
                        reject(e);
                    }
                })
                //如果executor是同步的， 则执行then的时候 status 为 resolved 或者 rejected
            } else if (self.status === FULFILLED) {
                // 如果promise1(此处即为this/self)的状态已经确定并且是resolved，我们调用 onFulfilled
                // 因为考虑到有可能throw，所以我们将其包在try/catch块里
                try {
                    const result = onFulfilled(self.value);
                    // 如果 onFulfilled 的返回值是一个Promise对象，直接取它的结果做为 new Promise 的结果
                    // 否则，以它的返回值做为 new Promise 的结果
                    result instanceof MyPromise ? result.then(resolve, reject) : resolve(result);
                } catch (e) {
                    // 如果出错，以捕获到的错误做为 new Promise 的结果
                    reject(e);
                }
            } else if (self.status === REJECTED) {
                try {
                    const result = onRejected(self.reason);
                    result instanceof MyPromise ? result.then(resolve, reject) : reject(result);
                } catch (e) {
                    reject(e);
                }
            }
        });
    }

    catch(onRejected) {
        return this.then(null, onRejected);
    }

}

