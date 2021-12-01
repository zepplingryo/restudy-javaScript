// 伪块作用域: 之所以我叫他伪块作用域是因为他对内部的var变量无效
// 但是块对let function class声明是有效的
{
  // 写一堆表达式
  const c = 1;
  // 我还是能访问到的
  var a = "1";
  function f() {
    console.log("1");
  }
}

// console.log(a, c);

function foo() {
  function bar() {}
}

// 但是还是能访问的 (因为要进行兼容所以谷歌浏览器这种的 还是没有给function添加块级作用域)
f(); // 针对呀某些只支持es6代码的浏览器就不能访问了这里
