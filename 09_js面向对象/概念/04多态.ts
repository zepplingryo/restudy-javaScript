/**
 * 继承是多态的前提
 * 必须有重写
 * 必须有父类引用
 * 当对不同的数据类型执行统一操作时 如果表现出来的行为不一样时 那么就是多态的体现
 */
// @ts-nocheck
class Shape {
  getArea() {}
}

class Rectangle extends Shape {
  getArea() {
    return "1";
  }
}

class Circle extends Shape {
  getArea() {
    return "2";
  }
}

const r = new Rectangle();
const c = new Circle();

function calcArea(shape: Shape) {
  console.log(shape.getArea());
}

calcArea(r);
calcArea(c);
