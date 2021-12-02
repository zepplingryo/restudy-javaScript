/**
 * 传入一个普通函数 实现一个curry函数
 * 2:19:25
 */

function sum(a, b, c) {
  return a + b + c;
}

function curry(fn) {
  // 返回一个函数
  return function curried(...args1) {
    // 判断当前已经接受的参数的个数
    if (args1.length >= fn.length) {
      return fn.apply(this, args1);
    } else {
      return function (...args2) {
        return curried.apply(this, [...args1, ...args2]);
      };
    }
  };
}

const currySum = curry(sum);

console.log(currySum(1, 2, 3));
console.log(currySum(1)(2)(3));
console.log(currySum(1, 2)(3));
console.log(currySum(1)(2, 3));
