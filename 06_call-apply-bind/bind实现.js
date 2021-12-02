/**
 *
 */
Function.prototype._bind = function (thisArg, ...argArray) {
  // 1. 获取到真实需要调用的函数
  var fn = this;

  // 2.绑定this
  thisArg =
    thisArg !== null && thisArg !== undefined ? Object(thisArg) : window;

  // 3.
  function proxyFn(...args) {
    thisArg.fn = fn;
    var finalArgs = [...argArray, ...args];
    var result = thisArg.fn(...finalArgs);
    delete thisArg.fn;
    return result;
  }

  return proxyFn;
};

function sum(a, b, c, d) {
  console.log(a, b, c, d);
}

var fn = sum._bind("123", "123")("123", "123", "123");
