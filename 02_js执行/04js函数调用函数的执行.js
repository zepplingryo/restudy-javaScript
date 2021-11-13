/**
 * 结果是hello
 *
 * 因为沿着作用域链查找的话 此时foo的父级作用域是全局GO (这个在编译时候就确定了)
 *
 * 而全局GO中有msg变量 所以说直接就是 hello
 *
 * 函数调用位置与其查找变量机制无关 只与其父级作用域有关
 */

var msg = "Hello";

function foo() {
  console.log(msg);
}

function bar() {
  foo();
  var msg = "Hello bar";
}

bar();
