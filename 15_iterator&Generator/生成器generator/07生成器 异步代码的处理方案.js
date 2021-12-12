function request(url) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(url);
    }, 500);
  });
}

/**
 * 模拟在真实场景下 发送网络请求之后对结果进行拼接 继续发送网络请求
 */
// function* getData() {
//   const res1 = yield request("123");
//   const res2 = yield request(res1 + "456");
//   const res3 = yield request(res2 + "456");
//   const res4 = yield request(res3 + "456");
//   console.log(res4);
// }

// const generator = getData();
// 这个很核心
// generator.next().value.then((res) => {
//   generator.next(res).value.then((res) => {
//     generator.next(res).value.then((res) => {
//       generator.next(res);
//     });
//   });
// });

// 自动挡generator

// function exceGenerator(genFn) {
//   const generator = genFn();

//   function exec(res) {
//     const result = generator.next(res);

//     // 执行到最后时刻
//     if (result.done) return result.value;

//     // 反之继续递归下一次
//     result.value.then((res) => {
//       exec(res);
//     });
//   }

//   exec();
// }

// exceGenerator(getData);

// 给我狠狠的 npm install co

const getData = async () => {
  const res1 = await request("123");
  const res2 = await request(res1 + "456");
  const res3 = await request(res2 + "456");
  const res4 = await request(res3 + "456");
  console.log(res4);
};

getData();
