/**
 * 异步函数中 异常会被当作为promise的reject值
 */

const bar = async () => {
  console.log(1);
  throw new Error("Error");
  console.log(2);
};

bar().catch((err) => {
  console.log(err);
});

console.log("后续还有代码");
