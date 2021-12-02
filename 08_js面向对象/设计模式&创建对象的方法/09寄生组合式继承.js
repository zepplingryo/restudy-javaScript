function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.eating = function () {
  console.log("eating");
};

function Student(name, age, son, score) {
  Person.call(this, name, age);
  this.son = son;
  this.score = score;
}

Student.prototype.studying = function () {
  console.log("studying");
};

// // 改写Student原型 导致Student没有自己的原型 但是顺着原型找只能找到Person的原型
// Student.prototype = Object.create(Person.prototype);

// // 让Student赋值为自己的原型
// Object.defineProperty(Student.prototype, "constructor", {
//   enumerable: false,
//   configurable: true,
//   writable: true,
//   value: Student,
// });

inheritPrototype(Student, Person);

const stu = new Student(1, 2, 3, 4);
console.log(stu); // stu.constructor.name (这里认为类型是 Person)

/**
 * 这种方式还是有点小瑕疵
 */

// 实现一个工具函数进行封装继承
function inheritPrototype(Sub, Super) {
  // 改写Student原型 导致Student没有自己的原型 但是顺着原型找只能找到Person的原型
  Sub.prototype = Object.create(Super.prototype);

  // 让Student赋值为自己的原型
  Object.defineProperty(Sub.prototype, "constructor", {
    enumerable: false,
    configurable: true,
    writable: true,
    value: Sub,
  });
}

function createObject() {
  function Fn() {}
  Fn.prototype = o;
  return new Fn();
}
