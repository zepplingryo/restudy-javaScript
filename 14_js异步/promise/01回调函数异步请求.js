// 18 50:00

// const request = (url) => {
//   setTimeout(() => {
//     return url ? "data" : "error";
//   }, 3000);
// };

// const r1 = request(1);
// const r2 = request(0);

// // 由于是同步的所以拿不到....
// console.log(r1);
// console.log(r2);

/**
 * es6以前如何解决?
 *
 * 回调函数
 *
 * 有啥问题: 主要问题就是信任问题
 */

const request = (url, success, error) => {
  setTimeout(() => {
    return url ? success("data") : error("error");
  }, 3000);
};

const r1 = request(
  1,
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// 由于是同步的所以拿不到....
// console.log(r1);

const r2 = request(
  0,
  (res) => {
    console.log(res);
  },
  (err) => {
    console.log(err);
  }
);

// console.log(r2);
