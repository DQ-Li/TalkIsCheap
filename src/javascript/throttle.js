// 节流：高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
// 思路：每次触发事件时都判断当前是否有等待执行的延时函数

// 方法一：定时器方法
function throttle1 (fn, delay = 500) {
  // 通过闭包保存一个标记
  let tag = true;
  return (...args) => {
    // 在函数开头判断标记是否为true
    if (tag){
      // 立即设置为false
      tag = false;
      fn.apply(this, args);
      // 将外部传入的函数的执行放在setTimeout中
      setTimeout(() => {
        // 最后在setTimeout执行完毕后再把标记设置为true(关键)表示可以执行下一次循环了。
        tag = true;
      }, delay);
    }
  }
}

// 方法二：时间戳方法(更准确)
function throttle2 (fn, delay = 500) {
  let pre = 0;
  return (...args) => {
    let now = new Date().getTime();
    if(now - pre > delay){
      fn.apply(this, args);
      pre = now;
    }
  };
}


// 使用
function sayHi (e) {
  console.log(e.target.innerWidth, e.target.innerHeight)
}
window.addEventListener('resize', throttle1(sayHi))
