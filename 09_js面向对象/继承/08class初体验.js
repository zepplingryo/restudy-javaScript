/**
 * 构造函数创建类 与普通函数过于类似
 *
 * Es6可以通过Class来定义类 但是类的本质依然是构造函数 原型链的语法糖而已
 */

// 类声明
class P {}

// 通过构造函数来看es6类的特点
function Person() {}

const p = new Person();

console.log(p.__proto__);
console.log(P.prototype);
console.log(typeof P); // function
console.log(typeof p);
