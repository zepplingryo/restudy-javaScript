// 工厂函数
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const obj1 = new Person(1, 1);
const obj2 = new Person(1, 1);

console.log(obj1 === obj2); // false

/**
 * 缺点: 1.没有对应的类型 Person类 但是我写的有对应的类型
 */
