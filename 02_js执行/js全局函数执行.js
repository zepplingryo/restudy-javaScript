/**
 *   解析阶段
 * 
 * 首先还是js代码被解析
 *
 * V8引擎内部首先会帮助我们创建一个对象 这个对象叫做 GlobalObject
 *
 * 这个GlobalObject内部会有当前浏览器/node环境下 一些全局变量 例如console window都是来源于GlobalObject
 *
 * 但是当执行到函数时就不同于其他变量类型了
 *
 * 首先会在内存中创建另外一个对象 是一个函数对象 1. 这个对象会包含它的父级作用域 [[scope]]: parent scope 2.函数内部执行体(代码块)
 * 
 * 下面写了大概开辟的地址以及信息
 * 
 * 
 * 
 *   运行阶段
 * 
 * 下面我调用了foo函数
 * 
 * js引擎这时候就会在ECStack(调用栈)中创建一个函数执行上下文
 * 
 * 上下文中也有一个AO(Activation Object)用于存储函数内部创建以及使用的变量
 * 
 * 这个AO可以看成一个简版的GO 也会存在编译期搜集变量
 * 
 * 同时在这个作用域继续执行内部代码 如果执行完毕之后 就要进行出栈操作(销毁) 相应的 他的AO也会被销毁掉
 * 
 * 
 * 
 * 
 * 所以说 现在就可以理解函数可以在 
 * 函数可以函数上方调用 : 预解析时将父级作用域记录 函数内部执行代码保存
 * 以及 全局下变量和函数内部变量都有着相同的行为 -- (变量提升) AO GO
 * 
 */
var msg = "Hello";

function foo() {

  console.log(a);
  var a = 1
  var b = 2;
  function bar() {
    return "bar";
  }
  return "hello Redux";
}

foo();

0xa123 = {
  [[scope]]: "parent scope",
  content: `
  console.log(a);
  var a = 1
  var b = 2;
  function bar() {
    return "bar";
  }
  return "hello Redux";
  `,
}


var GO = {
  String: "类",
  msg,
  foo: 0xa123,
};


