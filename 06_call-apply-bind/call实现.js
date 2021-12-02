/**
 * 首先调用call时候 调用函数内部会被执行一下
 *
 * 同样的 我们也需要去实现这一步 转化问题: 具体是哪个函数执行了我们自己写的call
 */
Function.prototype._call = function (thisArg, ...args) {
  console.log("私有实现call被调用了");

  // 哪个调用当前的_call的? 我就给他执行一边
  var fn = this;

  // 在保证传入的参数不是undfined或者null的情况下 对传入的对象进行转化
  thisArg = thisArg ? Object(thisArg) : window;

  thisArg.fn = fn;

  // 存入参数
  var result = thisArg.fn(...args);

  // js调用完了之后需要把这个属性删除
  delete thisArg.fn;

  return result;
};

function foo() {
  console.log("foo 函数被执行");
}

const result = foo._call("123", 1, 2);
console.log(result);
// foo.call(); // call(thisArg: any, ...argArray: any[]): any
