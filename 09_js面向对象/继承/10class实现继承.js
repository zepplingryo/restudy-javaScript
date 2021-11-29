/**
 * super
 *
 * 在子类中构造函数中使用this或者返回默认对象之前 必须先通过super调用父类构造函数
 *
 * super的使用位置有三个 子类的构造函数 实例方法 静态方法
 */
// class P {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// // 首先我们没有用继承 就会这样
// // Must call super constructor in derived class before accessing 'this' or returning from derived constructor
// // 在访问“this”或从派生构造函数返回之前，必须在派生类中调用超级构造函数
// class C extends P {
//   constructor(name, age, son) {
//     // js引擎在解析子类的时候就要要求 如果我们有实现继承 那么子类中的构造方法在使用this之前或者return必须要要先调用super
//     this.name = name;
//     this.age = age;
//     this.son = son;
//   }
// }

class P {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class C extends P {
  constructor(name, age, son) {
    super(name, age); // 相当于把这两个属性交给父类来处理
    this.son = son;
  }
}

const c1 = new C(1, 2, 3);
console.log(c1);
