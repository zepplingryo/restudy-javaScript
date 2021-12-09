/**
 * AMD 全程 Asynchronous Module Definition(异步代码定义)的缩写
 * 它采用的是异步加载模块
 * 事实AMD的规范还要遭遇CJS 但是目前使用量就很小了
 *
 * 实现AMD规范的库有require.js 和 curl.js
 */

define(function () {
  const name = "zzepp";
  console.log(name);

  return {
    name,
  };
});
