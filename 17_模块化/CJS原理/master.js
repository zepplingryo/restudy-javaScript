const info = {
  name: "zepplin",
  foo: (x, y) => x + y,
};

// 当我们把一个对象赋值给module.exports 这个行为就相当于这个info对象被我导出了

// info内存地址是0x100 foo函数对象内存地址是0xabc

//module.exports是根据我们导出的对象来决定 导出的是谁 报漏的就是谁
module.exports = info;

setTimeout(() => {
  info.name = "info";
}, 1000);

//require函数实现
function require() {
  // 查找返回的对象
  // 将这个对象返回 所以说本质就是都引用着同一对象 而不是深拷贝一个对象
  return module.exports;
}

// 类似于下面这种
const obj1 = { name: "info" };
const obj2 = obj1;
