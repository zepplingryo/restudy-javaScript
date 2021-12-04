/**
 * 之前我们希望获取js全局执行环境
 *
 * 不同环境获取的方式不一样的
 *
 * 比如在浏览器中可以通过this window来获取
 *
 * 在node中需要通过global来获取
 *
 * 这就造成了一个弊端
 *
 * 即: node环境下和window环境下没有一个统一的API访问到全局
 */

// ES11 以前
// let myGlobal = undefined;
// if (window !== undefined) {
//   myGlobal = window;
// } else {
//   myGlobal = global;
// }

// 浏览器
// console.log(this);
// console.log(window)

// node
// console.log(global);

// now
console.log(globalThis);
