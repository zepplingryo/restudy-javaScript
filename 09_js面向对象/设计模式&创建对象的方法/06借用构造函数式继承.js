/**
 * 核心就是父类原型直接赋值给子类
 *
 * 但是这种方式创建对象从面相对象角度而言是不正确的
 */
function Person(name, age) {
  this.info = "zepp";
  this.friends = [];
}

function Student(name, age, son) {
  this.son = son;
  Person.call(this);
}

Student.prototype = Person.prototype;

Person.prototype.eating = function () {
  console.log(this.name + "eating");
};

Student.prototype.studying = function () {
  console.log(this.name + "studying");
};

const s1 = new Student("1", 2, 3);
const s2 = new Student(3, 3, 3);

s1.friends.push("1");
console.log(s2.friends);
