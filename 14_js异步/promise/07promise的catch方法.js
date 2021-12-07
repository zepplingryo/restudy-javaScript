const promise = new Promise((resolve, reject) => {
  reject("1111");
  // resolve();
  // 当excutor抛出异常时 这里的reject也是会调用错误捕获异常
  // throw new Error("rejectd");
});

promise.then(undefined, (err) => {
  console.log(err);
  console.log("-=-=");
});

/**
 * .catch方法来传入错误(拒绝) 捕获的回调函数
 *
 * 这个 .catch方法有些特殊 他捕获的是原先第一个promise方法的catch
 * 并没有捕获 .then方法的catch
 *
 *
 */
promise
  .then((err) => {
    return "2222";
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * 再来做个测试
 *
 * 发现如果我上面的promise对象如果是resolve的 下面是then 是reject的
 * 才会捕获这个异常
 *
 * 不过想想也是 Error有一种冒泡捕获机制 如果在原来的promise中没有捕获 就会在下次promise中捕获
 */
promise
  .then((res) => {
    return new Promise((resolve, reject) => {
      reject("then异常");
    });
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * catch方法返回值
 */
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("aaa");
    return "catch"; // new Promise((resolve) => {reaolve("catch")})
  })
  .then((res) => {
    console.log(res + "then");
  })
  .catch((err) => {
    console.log(err + "catch");
  });
