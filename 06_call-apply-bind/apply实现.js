/**
 * 1. 拿到函数
 * 2. 拿到this
 * 3. 调用需要被执行的函数
 * 4. 将最终的结果返回出去
 */
Function.prototype._apply = function (thisArg, argArray) {
  if (argArray.length < 2) throw new Error("必须要传一个数组&数组长度大于1");

  var fn = this;

  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  thisArg.fn = fn;

  var result;

  // argArray ? (result = thisArg.fn(...argArray)) : (result = thisArg.fn());

  argArray = argArray || [];
  result = thisArg.fn(...argArray);

  delete thisArg.fn;

  return result;
};

function sum(num1, num2) {
  console.log("sum被调用", this, num1, num2);
  return num1 + num2;
}

var r1 = sum.apply("abc", [20, 30]);
var r2 = sum._apply("abc", [20, 30]);
console.log(r1, r2);
