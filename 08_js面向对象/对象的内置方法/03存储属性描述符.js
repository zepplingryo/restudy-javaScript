/**
 * 存储属性(Accessor访问器 Properties) 描述符(Descriptor)
 *
 * [[Configurable]]: 属性是否可以通过delete删除属性 是否可以删除他的特性 或是否可以将他修改为存取属性描述符
 * 当我们直接在一个对象上定义某个属性时 这个属性的[[Configurable]]为true
 * 当我们通过属性描述符定义一个属性时 这个属性的[[Configurable]]为false
 *
 * [[Enumerable]]: 表示属性是否可以通过for in或者Object.keys()返回该属性
 * 当我们直接在一个对象上定义某个属性时 这个属性的[[Enumerable]]为true
 * 当我们通过属性描述符定义一个属性时 这个属性的[[Enumerable]]默认为false
 *
 * [[get]]: 获取属性时会自信的函数 默认为undfined
 * [[set]]: 设置属性时会执行的函数 默认为undfined
 */

const obj = { name: "zepplingryo", type: "object", age: 1, _where: "" };

// 什么时候需要getter和setter呢?
// 1. 创建私有属性 不对外报漏
// 2. 如果我们希望截获某个属性他访问和设置的过程 也会使用存储属性描述符

Object.defineProperty(obj, "where", {
  enumerable: true,
  configurable: true,
  get: function () {
    foo();
    return this._where;
  },
  set: function (val) {
    bar();
    this._where = val;
  },
});

console.log(obj);

function foo() {
  console.log("获取一次where的值");
}

function bar() {
  console.log("设置一次where的值");
}

obj.where = "sbr";
