/**
 * 工厂模式
 */

function createPerson(name, age, height, address) {
  var p = {};

  p.name = name;
  p.age = age;
  p.height = height;
  p.address = address;

  p.eating = function () {
    console.log(this.name + "在吃东西");
  };

  p.running = function () {
    console.log(this.name + "在运行");
  };

  return p;
}

// 通过这种方式创建的对象有个很大的缺点 函数方法会直接暴露出来

const person = createPerson("zepp", 18);

console.log(person);
