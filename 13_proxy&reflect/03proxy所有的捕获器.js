const info = {
  name: "zepp",
  age: 18,
};
const infoProxy = new Proxy(info, {
  // resvole 只有在get set中才会有
  get: function (target, key) {
    console.log(`监听到${target}的${key}属性被访问${target[key]}`, target);
    return `访问了${target[key]}`;
  },
  set: function (target, key, newVal) {
    target[key] = newVal;
  },

  // 监听 in 捕获器
  has: function (target, key) {
    console.log(`监听到对象的in操作`);
    return key in target;
  },

  // delect 捕获器
  deleteProperty: function (target, key) {
    console.log("删除目标的属性");
    delete target[key];
  },

  // ................ 犀牛书写的很全
});

// 原来我们使用in操作符访问Object.definPrototype对象时 访问不到
// 现在我们用代理对象访问就能访问到 只要对补货器属性进行设置
"age" in infoProxy;

delete info.name;
