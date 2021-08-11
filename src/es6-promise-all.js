function promiseAll(promises) {
    // 保存回调结果的数组
    let result = [];
    // 累加器，用来判断执行方法队列是否执行完成
    let count = 0;

    // all 方法也返回一个promise对象
    return new Promise((resolve, reject) => {

        // 处理空 promises 的情况
        if(promises.length === 0){
            resolve(result);
        }

        function pushResult(index, value) {
            result[index] = value;
            count++;

            // 如果累加器和执行的任务列表长度相等，则说明已经完成了整个任务
            if(count == promises.length){
                resolve(result);
            }
        }

        // 循环处理要执行的任务
        promises.forEach((task, index) => {
            if(task instanceof Promise){
                task.then(value => pushResult(index, value), reason => reject(reason));
            }else {
                pushResult(index, promises[index]);
            }
        })


    })
}