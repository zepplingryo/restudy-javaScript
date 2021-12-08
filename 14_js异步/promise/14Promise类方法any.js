const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1111);
  }, 100);
});

// 1 29 08

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

// any方法会等到第一个fulfilled 才会决定新promise的状态
// 如果所有的promise都是reject的 那么也会等到所有的Promise都变reject状态
Promise.any([p1, p2, p3])
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
