const request = (val) => {
  // 异步请求的代码会被放入到executor中
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      val > 0.5 ? resolve(val) : reject(val);
    }, 3000);
  });
};

const p1 = request(Math.random());

// 下面两种写法没啥区别 但是只是针对于这个问题

p1.then((res, _type) => {
  console.log(res, _type);
}).catch((err, _type) => {
  console.log(err, _type);
});

p1.then(
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);
