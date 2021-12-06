/**
 * resovle可传参数类型
 *
 * 1. js值类型 值对象
 * pending => fufilled
 *
 *
 * 2. 传入一个promise
 * 当前promise的状态会由传入的promie来决定 相当于状态发生了移交到新的promise中处理
 *
 * 3. 传入一个对象 并且这个对象有实现then方法 (并且这个对象实现了thenable的)
 * 那么也会执行该then方法 并且又该then方法决定后续状态
 */

new Promise((resolve, reject) => {
  const num = Math.random();
  num > 0.5 ? resolve(num) : reject("err");
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

const newPromise = new Promise((resolve, reject) => {
  reject("err");
});

new Promise((resolve, reject) => {
  resolve(newPromise);
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

new Promise((resolve, reject) => {
  // pending => fulfilled
  const obj = {
    then: function (resolve, reject) {
      resolve("成功");
    },
  };
  resolve(obj);
})
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => {
    console.log(rej);
  });

// eatable
const obj = {
  eat() {},
};
