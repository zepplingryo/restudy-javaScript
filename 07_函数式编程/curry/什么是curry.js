/**
 * 维基百科中的解释:
 *
 * 在计算机科学中 科里化(currying) 是把接收的多个参数的函数 变成接受一个单一函数(最初函数的第一个参数)的函数
 *
 * 并且返回剩余的参数 而且返回的新函数的一种技术
 *
 * 科里化生成 如果固定某些参数 将得到剩余下参数的一个函数
 *
 * 总结:
 * 只传递给函数一部分让他来调用 同时让他返回一个函数去处理剩余的参数 这个过程就称之为科里化
 */

function foo(x, y, z) {
  return x + y + z;
}
const result = foo(1, 2, 3);
console.log(result);

function bar(x) {
  return function (y) {
    return function (z) {
      return x + y + z;
    };
  };
}
const result1 = bar(1)(2)(3);
console.log(result1);

// 简化curry
const baz = (x) => (y) => (z) => x + y + z;
