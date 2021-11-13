/**
 * 1. 代码被解析时
 *
 * V8引擎内部首先会帮助我们创建一个对象 这个对象叫做 GlobalObject
 *
 * 这个GlobalObject内部会有当前浏览器/node环境下 一些全局变量 例如console window都是来源于GlobalObject
 *
 * 其中window属性比较特殊 如果获取这个window 就是这个GlobalObject本身
 */
var GlobalObject = {
  String: "stirng",
  console: "fun",
  window: GlobalObject, // this
};
console.log(window.window.window.window.window.window.window.window.window);

/**
 * 当我们var一个变量时
 * 就会讲当前变量放到全局对象GO去
 *
 * 2. 运行代码
 *
 * v8为了执行代码 是通过创建一个执行上下文栈方式(函数调用栈实现的) 栈结构 Execution Context Stack 简称 ECStack
 *
 */

var redux = "redux";

var GlobalObject = {
  String: "stirng",
  console: "fun",
  window: GlobalObject, // this
  redux: undefined, // 但是这时候代码没有执行才不会将值赋值给他们(预解析)
  foo: undefined, // 同理
};
console.log(redux);

function foo() {
  var redux = "react";
  console.log(redux);
}

foo();
