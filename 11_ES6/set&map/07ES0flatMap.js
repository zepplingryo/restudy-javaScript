const num = [
  1,
  2,
  ["a", "b", "c"],
  [
    [20, 1],
    [40, 5],
  ],
  11,
  [55, 77],
];

/**
 * 某些业务下我们需要对数组进行拍平
 */

// 默认情况下如果我们不传参只会拍平1层
const flat1arr = num.flat();
const flat2arr = num.flat(2);

const arr = [1, 2, 3];
const res1 = arr.flatMap((item) => {
  return item ** 2;
});
const res2 = arr.map((item) => {
  return item ** 2;
});
// 看着好像没啥区别 但是flatMap有自己专门对应用场景
console.log(res1);
console.log(res2);

/**
 * flatMap
 */
const array = ["msg 1", "msg 2", "msg 3"];

// 这一步相当于 先对数组拆分 [[msg,1], [msg,2], [msg,3]] 后对拆分后的数组进行降唯
const words = array.flatMap((item) => {
  return item.split(" ");
});
console.log(words);
