var obj = {
  name: "zepp",
  age: 18,
};

// 原型继承函数
// function createObject(o) {
//   var newObj = {};
//   Object.setPrototypeOf(newObj, o);
//   return newObj;
// }

// dc实现
// function createObject(o) {
//   function Fn() {}
//   Fn.prototype = o;
//   var newObj = new Fn();
//   return newObj;
// }

//es6
var indo = Object.create(obj);

var info = createObject(obj);
console.log(info.name);
console.log(info.__proto__);
