const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 100);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(2222);
  }, 10);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3333);
  }, 1000);
});

// race竞态
// 只要有一个promise 变为fulfilled状态 那么就结束 不管你是reject还是resovle
// 有一点要注意: 即便第一个请求结束了 其他promise内部不会结束还是会执行完再结束
Promise.race([p1, p2, p3])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
