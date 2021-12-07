// 查看promise原型方法
// console.log(Object.getOwnPropertyDescriptors(Promise.prototype));

// Promise的静态方法 Promise.all

/**
  constructor: {
    value: [Function: Promise],
    writable: true,
    enumerable: false,
    configurable: true
  },
  then: {
    value: [Function: then],
    writable: true,
    enumerable: false,
    configurable: true
  },
  catch: {
    value: [Function: catch],
    writable: true,
    enumerable: false,
    configurable: true
  },
  finally: {
    value: [Function: finally],
    writable: true,
    enumerable: false,
    configurable: true
  },
 */

const promise = new Promise((resolve, reject) => {
  resolve("1");
});

/**
 * 1. 同一个promise可以被多次调用then方法
 * 当我们的resolve方法被回调时 所有的then方法传入的回调函数都会被调用
 * 同时都是从同一个pending 到 resolve
 */

promise.then((res) => {
  console.log(1, res);
});
promise.then((res) => {
  console.log(2, res);
});
promise.then((res) => {
  console.log(3, res);
});

/**
 * then方法传入的回调函数可以有返回值
 * then方法本身也是有返回值到 它的返回值是promise
 *
 *
 * 如果我们返回到是一个普通值 那么这个普通被作为一个新的promise的resolve值
 *
 * 这样就形成了链式调用 原因是内部产生了新promise
 */
promise
  .then((res) => ({
    name: "zepp",
  }))
  .then((res) => {
    console.log("obj", res);
    return "jone";
  })
  .then((res) => {
    console.log("str", res);
  });

// 这种链式调用的实现原理: 这也是内部为啥产生新的promise
// promise.then((res) => {
//   return new Promise((resolve, reject) => {
//     resolve(res)
//   })
// })

// 如果没有显式写返回值呢? promise就会按照函数的默认返回值进行返回 就是undfined

/**
 * 接上文
 *
 * 如果我们返回的是一个promise
 * 这时后续执行结果就会交付给 新的promise中的resolve/pending/reject 来完成
 *
 */
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        reject(1111);
      }, 3000);
    });
  })
  .then((res) => {
    console.log("res", res);
  })
  .catch(() => {
    console.log("err");
  });

/**
 * 如果返回到是一个对象 并且这个对象实现了thenable
 *
 * 还是交付给thenable对象中的then方法 看该方法中的三个状态
 */

promise
  .then((res) => ({
    then: (resolve, reject) => resolve(1000000n),
  }))
  .then((res) => {
    console.log("res", res);
  });
