/**
 * 通过promise代码结构 我们可以将promise划分为几个状态
 *
 * 状态只能由pending到 res或rej 状态一旦确定下来 就是不可更改的 是一种immutable的状态
 *
 * promise在pending状态下 不能既调用resovle又调reject promise只会调用最先遇到的一者
 *
 * 同时后者会失效
 */

new Promise((resolve, reject) => {
  // 这里的代码称之为pending 表示既没有兑现 也没有拒绝
  const num = Math.random();
  num > 0.5 ? resolve(num) : reject("err");
})
  .then((res) => {
    // (fufilled 已兑现): 意味着操作成功完成
    console.log(res);
  })
  .catch((rej) => {
    // (rejectd 已拒绝): 意味着操作失败
    console.log(rej);
  });
