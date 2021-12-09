/**
 * 使用另外一个模块导出的对象 那么就要进行导入require
 *
 * require函数会返回一个对象
 *
 * 返回的对象就是module.exports赋值的对象
 */
const b = require("./b");

console.log(b);

// console.log(sum(1, 2));
