/**
 * 将一个值通过转化为promise类型的值
 */

const obj = { name: "zepp" };

const promiseObj = Promise.resolve(obj);

console.log(promiseObj);

promiseObj.then((res) => {
  console.log(res);
});
