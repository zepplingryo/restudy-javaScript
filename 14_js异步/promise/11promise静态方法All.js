const p1 = new Promise((resolve, reject) => {
  resolve(1);
});

const p2 = new Promise((resolve, reject) => {
  reject(2);
});

const p3 = new Promise((resolve, reject) => {
  resolve(3);
});

// 所有的promise都变成fufilled时 在拿到结果
Promise.all([p1, p2, p3, "111"])
  .then((res) => {
    console.log(res); // 结果是按照传参顺序
  })
  .catch((err) => {
    // 只会打印错误的信息
    console.log(err);
  });

// 但是在拿到所有结果之前 有一个promise变为reject 那么整个promise就是rejected
