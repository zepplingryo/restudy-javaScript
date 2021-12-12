/**
 * 一个最简单的迭代器
 */
// const it = {
//   next: function () {
//     return {
//       done: true,
//       value: 123,
//     };
//   },
// };

const arr = [1, 2, 3];

// 创建一个迭代器1对象来访问数组
let ind = 0;
const arrit = {
  next: function () {
    return ind < arr.length
      ? { done: false, value: arr[ind++] }
      : { done: true, value: undefined };
  },
};

// 真的手动挡
console.log(arrit.next());
console.log(arrit.next());
console.log(arrit.next());
console.log(arrit.next());
