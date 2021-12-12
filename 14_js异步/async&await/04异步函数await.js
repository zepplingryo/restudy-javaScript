/**
 * 特点1: await关键字仅在异步函数中合法 await is only valid in async function
 *
 * 特点2: awiat表达式会有结果 这个结果是根据于 await关键字后面的表达式 产生的结果 这个结果是一个promise类型
 *
 * 特点3: await语句会造成阻塞代码 在await后面的表达式没有计算完毕结果前都不会运行await语句后面的代码
 *
 * 特点4: await可以跟普通值也可以跟thenable 也是基于thenable的值
 */

const bar = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(1);
    }, 500);
  });
};

// const foo = async () => {
//   const res = await bar();
//   // 如果要对上面的res进行操作的话 可以把下面的这一片代码看作为.then
//   console.log("后面的代码");
// };

// foo();

const foo = async () => {
  // 必须拦截error下来 也可以在foo函数中进行catch
  try {
    const res = await bar();
  } catch (error) {
    console.log(error);
  }
  console.log("后面的代码");
};

foo();
