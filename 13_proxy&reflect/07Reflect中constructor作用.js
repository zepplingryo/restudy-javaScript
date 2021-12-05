function Person(name, age) {
  this.name = name;
  this.age = age;
}

function Student() {}

/**
 * 执行Person函数中的内容 但是创建出来的对象是student类型对象
 */

const s = Reflect.construct(Person, ["1", "2"], Student);

console.log(s); // Student { name: '1', age: '2' }
