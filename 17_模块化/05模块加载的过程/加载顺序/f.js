console.log("f");

require("./a");

// b引用c 但是c已经被加载过了 所以说 loaded 属性为false 就不会再进行加载
// node查找机制就采用的是深度优先搜索(沿着一条路走到底 然后进行回溯) 广度优先搜索(把f.js用到文件都先便利一边)
require("./b");
