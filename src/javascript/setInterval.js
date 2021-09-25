// 基于 setTimeout 实现 setInterval
let timeMap = {}; // 可以有多个 timer
let id = 0; // 简单实现id唯一

const mySetInterval = (cb, time) => {
    let timeId = id++; // id自增

    const fn = () => {
        cb();
        timeMap[timeId] = setTimeout(() => {
            fn();
        }, time);
    };

    timeMap[timeId] = setTimeout(fn, time); // 开始
    return timeId; // 返回 timer 的唯一标识 id
};

const myClearInterval = (id) => {
    clearTimeout(timeMap[id]);
    delete timeMap[id];
}

const myId = mySetInterval(() => {
    console.log(new Date());
}, 1000);

setTimeout(() => { // 3秒后清除定时器
    myClearInterval(myId);
}, 3000);
