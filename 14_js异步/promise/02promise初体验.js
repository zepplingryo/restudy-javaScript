/**
 * Promise是一个类
 *
 * 在通过new 创建promise对象时 我们需要传入一个回调函数 我们称之为 “executor”
 *
 * 这个回调函数会被立即执行 并且给传入另外两个回调函数resolve reject
 *
 * 当我们调用resolve回调函数时 回执行Promise对象的then方法传入的回调函数
 * 当我们调用reject回调函数时 回执行romise对象的catch方法传入的回调函数
 */

// Promise构造函数接受一个回调函数 这个回调函数在传入后会无条件立即执行

// class MyPromise extends Promise {
//   constructor(callback) {
//     let resolve = function () {};

//     let reject = function () {};

//     callback(resolve, reject);
//   }
// }

/**
 * 总结一下: promise是基于回调的 所以promise没有解决嵌套地狱的
 *
 * promise就给我们提供一种规范 这种规范(要求)帮助我们如何编写代码
 *
 * 在我们日常开发中如果看到是promise类型 可以直接进行 then catch等操作
 */

function baz() {
  return new Promise((resolve, reject) => {
    resolve();
  });
}

const bazPromise = baz();

// 目前来看then方法传入的回调函数 会给我们成功的回调
bazPromise.then(() => {});

bazPromise.catch(() => {});

// resolve 在成功时 回调这个函数
// 失败时 回调reject
const promise = new Promise((resolve, reject) => {
  console.log("被立即执行");
  resolve();
});
