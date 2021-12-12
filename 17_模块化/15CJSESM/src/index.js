// import { name } from "./bar.js";

// console.log(name);

/**
 * 能不能相互调用? (分场景 node 浏览器 webpack)
 *
 * 浏览器肯定不能 因为没有定义mudoles这个对象 就等于undfined.xxx
 *
 * node(13以后可以)
 *
 * 平时开发在 webpack 中 是可以的 这我只能说webpack是基于node的 本身就可以实现module.exports 然后webpack也实现了esmodule
 *
 * 这个是可行的 但是不推荐呢
 *
 */

let res = `123`
  .split("")
  .reverse()
  .forEach((r) => {
    res += r;
  });
console.log(res);
