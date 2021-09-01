// 发布者、订阅者模式
// 发布者被命名为一个Observer的类
// 属性：
//      name: 当前发布者的名称
//      state: 发布者的状态
//      subjects: 订阅者数组
// 方法有：
//      attach: 添加订阅者
//      setState: 用来修改对应状态并且通知给订阅者

class Observer {
    constructor(name, state) {
        this.name = name;
        this.state = state;
        this.subjects = [];
    }
    // 给当前发布者添加订阅者
    attach(subject) {
        this.subjects.push(subject);
    }
    // 修改发布者的状态
    setState(newState) {
        let prevState = this.state;
        this.state = newState;
        this.subjects.forEach((item) => item.watch(newState, prevState));
    }
}

// 实现一个订阅者
// 属性：
//      name: 订阅者的名称
//      target: 订阅的发布者实例
// 方法：
//      watch: 接受发布者通知的回调方法
class Subject {
    constructor(name, target) {
        this.name = name;
        this.target = target;
    }
    // 发布者状态变化是，订阅者触发的回调方法
    watch(newState, prevState) {
        console.log(
            `${this.name}监听到${this.target.name}，从${prevState}变成了${newState}`
        );
    }
}

// 实现调用
const ob = new Observer("发布者", "1111");
const sb1 = new Subject("订阅者1", ob);
const sb2 = new Subject("订阅者2", ob);

ob.attach(sb1);
ob.attach(sb2);

ob.setState("2222");