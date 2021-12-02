/**
 * 首先我用构造函数创建一个实例对象
 */
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person(1, 2);

// 此时我想查找这个实例对象上的属性
// 这个显然是一个[[get]]操作
// 如果没有找到 这个时候就会去原型(__proto__)对象上查找
// 但是想一下 原型对象他也是一个对象啊
// 这个对象他也是有自己的__proto__属性
// 所以一直沿着原型的尽头这里可能是(Object基类)来查找 如果连Object都没找到则返回undfined
// 于是乎这就是原型链(prototype chain)的查找机制
p1.__proto__.__proto__.info = { address: "sbr" };
console.log(p1.info);
console.log(Object.__proto__);
