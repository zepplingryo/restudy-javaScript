/**
 * 首先跳转到继承部分/对象的原型
 */

/**
 * 构造函数的缺点:
 *
 * 当我们创建多个对象时 内部如果有函数对象 随之会创建多个函数对象 占用内存
 *
 * 一般来说值类型属性我们不能放到原型上 但是一些公共方法可以放到原型上 实现逻辑上的复用
 *
 * 同时在我们创建多个对象时 如果放到原型prototype上会根据原型的机制造成值属性无法复用
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.getInfo = function () {
  return this;
};

const obj1 = new Person(1, 1);
const obj2 = new Person(2, 2);

console.log(obj1.getInfo());
