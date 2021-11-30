/**
 * 多态指不同数据类型的实体提供统一接口 或使用一个单一的符号来表示多个不同的类型
 *
 * 非常的抽象
 *
 * 个人总结 对不同的数据类型进行一样的操作表现出不同的行为就是多态的体现
 */

function calcArea() {
  console.log(foo.getArea());
}

var obj1 = {
  name: "foo",
  getArea() {
    return 1000;
  },
};

class Person {
  getArea() {
    return 1000;
  }
}

var p = new Person();

calcArea(obj1);
calcArea(p);
