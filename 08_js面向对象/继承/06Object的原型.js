/**
 * 上面说到原型链查找机制
 *
 * 但是也不能无限查找 这不就无限递归套娃了么
 *
 * [Object: null prototype] {}就是顶层原型
 *
 * 这个对象有两个特殊点:
 * - 该对象不再继续有原型属性(其实是: 该对象由原型属性 但是它的原型属性已经指向null了) 也就是已经是顶层原型
 * - 该对象上有很多的默认方法
 */

// const obj = {};

// 通过查看obj的隐式原型
// console.log(obj.__proto__); // [Object: null prototype] {}
// console.log(obj.__proto__.__proto__); // null;
// console.log(obj.__proto__.__proto__.__proto__); // TypeError: Cannot read property '__proto__' of null

const foo = new Object();
// console.log(foo.__proto__);
// console.log(Object.prototype);
// console.log(Object.__proto__);
// console.log(foo.__proto__ === Object.prototype);
// console.log(foo.__proto__.__proto__);

// 查看基类上的方法
// console.log(Object.getOwnPropertyDescriptors(Object.prototype));
// console.log(Object.getOwnPropertyDescriptors(Object));

// 实现继承
const obj1 = {};
obj1.__proto__ = foo;

console.log(obj1.__proto__.__proto__);
