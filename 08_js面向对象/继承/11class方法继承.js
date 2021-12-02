class P {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  studying() {
    return this.name + "studying";
  }

  handle() {
    console.log("处理逻辑");
  }

  static staticMethods() {
    console.log("子类调用父类静态方法");
  }
}

class C extends P {
  constructor(name, age, son) {
    super(name, age);
    this.son = son;
  }

  // 父类方法重写
  studying() {
    return this.name + "coding";
  }

  handle() {
    // 调用父类的方法 复用父类中的处理逻辑
    super.handle();
    console.log("123");
  }

  // 静态方法的重写
  static staticMethods() {
    super.staticMethods();
    console.log("456");
  }
}

const c1 = new C(1, 2, 3);

// 方法的继承
console.log(c1.studying());

c1.handle();

C.staticMethods();
