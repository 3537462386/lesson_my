// 定义 (封装了) 了人这个类
// 两种类的封装写法
// js 正宗的写法 效果一样
// es5  基于对象的原型式的
// let obj = {}   Object (构造函数) Object.prototype  new Object()
// obj.__proto__ 这个对象的原型
function Person (name,age) {
    this.name = name ;
    this.age = age ;
}
// 函数都有一个prototype  对象
// 函数也是对象
Person.prototype = {
    sayHi() {
        console.log('hello');
    }
}
// es6+ 面向对象式， 传统的java，c++ class  关键字
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}