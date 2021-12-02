/**
 * 之前es5构造函数可以直接进行传递参数 但是现在不行了 那怎么办呢?
 *
 * 通过类的构造函数进行传递参数
 *
 * constructor会在被传递参数时被调用 同时一个类只有一个构造函数
 */
class P {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._immer = "str";
  }
  /**
   * class中的方法定义
   */
  running() {
    return `${this.name} running`;
  }

  // 类的访问器方法
  get immer() {
    return this._immer;
  }

  set immer(val) {
    this._immer = val;
  }

  // 类的静态方法(类方法): 所谓静态方法就是不需要new出来 而是需要直接可以通过P.xxx来访问的方法
  static createPerson() {
    return new P();
  }
}

const p1 = new P(1, 2);
console.log(p1.immer);
console.log((p1.immer = "qqq"));
console.log(Object.getOwnPropertyDescriptors(P.prototype));
