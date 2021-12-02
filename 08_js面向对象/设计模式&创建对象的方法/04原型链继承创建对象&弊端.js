/**
 * 复用代码
 */

/**
 * 原型链继承的弊端:
 *
 * 1. 不能获取全部的方法或属性 因为有些属性和方法在原型上
 * 2. 共用某个属性 如给1添加了属性 但是同时也给2添加了 但是2不想有这个属性
 * 3. 在前面实现类的过程中没有传递参数
 */
// 父类提供公共方法和属性
function Person() {
  this.name = "zepp";
  this.friends = [];
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};

// 子类: 特有方法和属性
function Student() {
  this.son = 111;
}

// 构建person实例
var p = new Person();
// 将父类的实例给子类
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + "studying");
};

const s1 = new Student();
const s2 = new Student();

s1.friends.push("1");
console.log(s2.friends);
