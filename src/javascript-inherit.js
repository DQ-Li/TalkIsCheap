
// 1.原型链
/*
* 将子类的原型对象指向父类的实例
* 优点：
*   继承了父类的模板，又继承了父类的原型对象
* 缺点:
*   (1) 在包含有引用类型的数据时，会被所有的实例对象所共享，容易造成修改的混乱
*   (2) 无法实现多继承(因为已经指定了原型对象了)
*   (3) 还有就是在创建子类的时候不能向父类传递参数
* */

function Parent1() {
    this.name = 'parent';
    this.sex = 'boy';
}

function Child1() {
    this.name = 'child';
}

Child1.prototype = new Parent1();

// 2.构造函数继承
/*
* 在子类构造函数内部使用call或apply来调用父类构造函数，复制父类的实例属性给子类
* 优点：
*   (1) 解决了原型链继承中子类实例共享父类引用对象的问题
*   (2) 实现多继承
*   (3) 创建子类实例时，可以向父类传递参数
* 缺点：
*   (1) 只能继承父类的实例属性和方法，不能继承父类原型的属性和方法
*   (2) 无法实现复用，每个子类都有父类实例函数的副本，影响性能
*
* */

function Parent2(name) {
    this.name = name;
}

function Child2(name) {
    Parent2.call(this,'child');
}

// 3.组合继承
/*
* 将原型链继承与构造函数继承组合在一起
* 通过借用构造函数的方式来实现类型的 属性的继承
* 通过将子类型的原型设置为父类型的实例来实现 方法的继承
* 优点：
*   解决了上面的两种模式单独使用时的问题
* 缺点：
*   无论什么情况下，都会调用两次父类构造函数
*
* */

function Parent3(name) {
    this.name = name;
}

Parent3.prototype.sayName = function () {
    console.log(this.name);
};

function Child3(name, age) {
    Parent3.call(this, name); // 第二次调用 Parent()，可以传参
    this.age = age;
}
Child3.prototype = new Parent3(); // 第一次调用 Parent()，继承父类型的原型的属性和方法 以及 复用
Child3.prototype.constructor = Child3;

// 4.原型式继承
/*
* 基于已有的对象来创建新的对象
* ECMAScript 5 通过新增  Object.create() 方法规范化了原型式继承
* 这个方法接收两个参数：一个用作新对象原型的对象和一个为新对象定义额外属性的对象（可选）
* 缺点：
*   与原型链方式相同，引用类型值的属性始终都会共享相应的值
* */

const friendship1 = {
    name:'unnamed',
    friends:['Amy','Ben','Tom']
};

let uzi1 = Object.create(friendship);
uzi1.name = 'Uzi';
uzi1.friends.push('Peter');

// 5.寄生式继承
/*
* 创建一个仅用于封装继承过程的函数，在函数内部以某种方式增强对象
* 主要考虑对象而不是自定义类型和构造函数
* 缺点：
*   没有办法实现函数的复用；这一点与借用构造函数模式类似
* */

function creator(origin) {
    let clone = Object.create(origin);
    clone.sayHi = function() {
        console.log('Hello Parasitic Inheritance');
    };
    return clone;
}

const friendship2 = {
    name:'unnamed',
    friends:['Amy','Ben','Tom']
};

let uzi2 = creator(friendship2);

// 6.寄生组合式继承
/*
* 使用寄生式继承来继承父类型的原型，然后再将结果指定给子类型的原型
* 组合继承的缺点就是使用父类型的实例做为子类型的原型，导致添加了不必要的原型属性
* 寄生式组合继承的方式是使用父类型的原型的副本来作为子类型的原型，这样就避免了创建不必要的属性
*
* */
function inherit(children,parent) {
    let prototype = Object.create(parent.prototype);
    prototype.constructor = children;
    children.prototype = prototype;
}

function Parent4(name) {
    this.name = name;
}
Parent4.prototype.sayName = function () {
    console.log(this.name);
};

function Child4(name,age) {
    Parent4.call(this, name);
    this.age = age;
}

inherit(Child4,Parent4);

// 7.class继承
/*
* 在class 中继承主要是依靠两个东西：extends super
*
* */
class Parent5 {
    constructor(name){
        this.name = name;
    }
    getName() {
        console.log(this.name);
    }
}

class Child5 extends Parent5{
    constructor(name){
        super(name);
        this.sex = 'boy';
    }
}

