/**
 * 工厂模式创建对象有一个比较大的问题 对象的类型都是Object类型
 *
 * 构造函数 通常是我们在创建对象时会调用的函数
 *
 * js中构造函数也是一个普通的函数 从表现形式来说和普通的函数没有任何区别
 * 如果一个普通函数被new来调用了 那么这个函数就称之为构造函数
 */

function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj1 = new Person(1, 1);
const obj2 = new Person(1, 1);

console.log(obj1 === obj2); // false
