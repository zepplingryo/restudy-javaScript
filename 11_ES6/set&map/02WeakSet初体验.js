// 0. 内置类
class MyWeakSet extends WeakSet {}

const weak = new MyWeakSet();

// 1. 只能存放引用数据类型   Invalid value used in weak set
// weak.add(10);

// weakset对对象是一个弱引用
let obj = {
  name: "lin",
  friend: {
    name: "zepp",
  },
};

/**
 * weakset 中存储对象是一种弱引用
 */
const set = new Set();
const weaks = new WeakSet();

set.add(obj);
weaks.add(obj);

function setObj() {
  obj = null;
}

console.log("set", set);
console.log("weak", weaks);

// 当我们把obj 手动释放掉以后 set可以为我们保存着原来的obj信息 但是weakset不会为我们保存信息

// weakset 不是可迭代对象 而且api少得可怜

/**
 * weakset 的应用场景
 */
const personSet = new WeakSet();
class Person {
  constructor() {
    personSet.add(this);
  }

  running() {
    if (!personSet.has(this))
      throw new Error("不能通过非构造函数创建的对象来调用running方法");
    console.log("running");
  }
}

const p = new Person();
p.running();

// p = null

p.running.call({ name: "zepp" });
