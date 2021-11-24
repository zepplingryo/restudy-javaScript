/**
 * 目前已知的作用域: 全局 函数 块
 *
 * with语句也可以形成作用域
 *
 * 这个有什么用呢
 *
 * 当我们需要明确访问一个对象内部的变量信息 这时候我们可以创建with作用域 可以不受其他时刻的干扰
 *
 * 在严格模式下为什么不能使用with?
 *
 * 可以去看看mdn网去 因为他kennel是混淆错误和兼容性问题的根源
 */

var msg = "msg";

var obj = { msg: "obj msg" };

with (obj) {
  console.log(msg); // msg
}
