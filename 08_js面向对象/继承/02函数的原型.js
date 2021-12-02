/**
 * js中函数也是一个对象
 *
 * 函数作为对象来说 它也是有自己的[[prototyoe]]隐式原型
 *
 * 同时由于函数内部机制问题
 *
 * 函数内部还有一个属性叫做 prototype 这个东西叫做显示原型
 */
function foo() {}

console.log(foo.__proto__); // {}

const f1 = new foo();
const f2 = new foo();

console.log(f1.__proto__ === foo.prototype); //true new出来的对象(实例)隐式原型 === 构造函数 显示原型
console.log(f2.__proto__ === foo.prototype); //true
console.log(f2.__proto__ === f1.__proto__); //true 都是继承与同一个构造函数

// 给原型直接添加属性
f2.__proto__.name = "foo";

// 因为和上面那行等价
foo.prototype.name = "bar";

// 不过在真实开发中我们要使用下面这种 因为更加清晰 直接给一个类去修改 比 直接给一个对象要修改要好

console.log(f1.name);
console.log(f2.name);
