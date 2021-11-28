/**
 * 函数原型上有一个属性叫constructor
 */
function foo() {}

// 当前是不可enum的
console.log(foo.prototype);
// console.log(Object.getOwnPropertyDescriptors(foo.prototype));

// 通过对象属性操作符使其可以访问到
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: true,
});
// 成功获取foo原型上属性 发现其有个属性名叫constructor 是一个函数
console.log(foo.prototype);

// 查看这个属性
console.log(foo.prototype.constructor); // [Function: foo]

// 意味着foo.prototype.constructor === foo函数本身
console.log(foo.prototype.constructor === foo); // true

console.log(foo.prototype.constructor.prototype.constructor); // [Function: foo] 搁这呢

/**
 * 我们可以添加一些属性
 */
foo.prototype.name = "fo0o";
var f1 = new foo();
console.log(f1.name);

/**
 * 直接修改prototype属性
 *
 * 这个其实就是指针被改变了
 */
function bar() {}
bar.prototype = {
  name: "bar",
  info: null,
  // 核心 我要是不这么干的话 就会给我指向Object基类
  constructor: bar,
};
const b1 = new bar();
console.log(b1.constructor);
console.log(b1.name, b1.info);

// 通过Object.definePrototype方式添加constructor
Object.defineProperty(foo.prototype, "constructor", {
  enumerable: false,
  configurable: true,
  writable: true,
  // 这个就是constructor 在以后通过foo函数创建的实例对象永远指向foo构造函数
  value: foo,
});
