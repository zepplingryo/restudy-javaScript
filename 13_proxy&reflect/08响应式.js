// !:$^:)#
const obj = {
  name: "zepp",
  age: 18,
};

// 将响应式函数放入一个类中 方便后续遍历
class Depend {
  constructor() {
    this.reactiveFnsArr = []; // 初始化收集依赖数组
  }

  // 收集依赖
  addDepend(fn) {
    this.reactiveFnsArr.push(fn);
  }

  // 通知响应式
  notify() {
    for (const fn of this.reactiveFnsArr) {
      fn();
    }
  }
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    return target[key];
  },
  set(target, key, newVal, receiver) {
    target[key] = newVal;
    const depend = getDepend(target, key);
    depend.notify();
  },
});

const depend = new Depend();

// 封装一个精准获取depend的函数

const targetWeakmap = new WeakMap();

const getDepend = (target, key) => {
  // 根据target对象获取map的过程
  let map = targetWeakmap.get(target);

  if (!map) {
    map = new Map();
    targetWeakmap.set(target, map);
  }

  // 根据key获取depend对象
  let depend = map.get(key);

  if (!depend) {
    depend = new Depend();
    map.set(key, depend);
  }

  return depend;
};

// 封装一个响应式函数
function watchFn(fn) {
  depend.addDepend(fn);
}

watchFn(function () {
  console.log(objProxy.name, "name---1");
});

objProxy.name = "zeppLin";

watchFn(function () {
  console.log(objProxy.name, "name---2");
});

watchFn(function () {
  console.log(objProxy.age, "age---1");
});

watchFn(function () {
  console.log(objProxy.age, "age---2");
});

// depend.notify();
