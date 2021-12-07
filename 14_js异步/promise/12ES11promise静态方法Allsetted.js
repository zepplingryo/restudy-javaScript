const p1 = new Promise((resolve, reject) => {
  resolve(1);
});

const p2 = new Promise((resolve, reject) => {
  reject(2);
});

const p3 = new Promise((resolve, reject) => {
  resolve(3);
});

// 所有的promise都会返回成功结果 并且是以数组形式返回 同时每一项除了value意外还会返回状态码用于表明
Promise.allSettled([p1, p2, p3, "111"])
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    // 只会打印错误的信息
    console.log(err);
  });
