/**
 * 模块的加载过程
 *
 * 1. 当foo中的代码第一次被加载到内存中就会运行的
 *
 * 2. 模块被多次引入 会进行缓存 最终只加载一次
 *
 * 为什么只会加载一次呢?
 * 这是因为每个模块对象module都有一个属性 loaded
 * false便是还没有被加载
 *
 * 3. 如果有循环引用 加载顺序是什么? (就是有多个模块应用着同一个模块)
 * 这就是一个典型的图结构
 */

console.log("start");

// foo模块被加载到内存中
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");
require("./bar");

console.log("end");
