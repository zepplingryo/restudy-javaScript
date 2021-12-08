const master = require("./master.js");

console.log(master);

// 测试是否引用同一个对象

setTimeout(function () {
  console.log(master);
}, 2000);
