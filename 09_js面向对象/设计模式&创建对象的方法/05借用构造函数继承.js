/**
 * 为了解决原型链继承中存在的问题 开发人员提供了一种新技术 constructor stealing 借用构造函数
 */

function Person(name, age) {
  // Student.name 变 化
  this.info = "zepp";
  this.friends = [];
}

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};

function Student(name, age, son) {
  this.son = son;

  // 核心
  Person.call(this);
}

var p = new Person();
Student.prototype = p;

Student.prototype.studying = function () {
  console.log(this.name + "studying");
};

const s1 = new Student("1", 2, 3);
const s2 = new Student(3, 3, 3);

s1.friends.push("1");
console.log(s2.friends);

/**
 * Person类被调用至少两次
 *
 * 子类原型上会多一些属性 但是这些属性没有存在的必要
 */
