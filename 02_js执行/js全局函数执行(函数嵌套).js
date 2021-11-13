/**
 * 当我们查找一个变量时 真实的查找路径饰沿着作用域链来查找的
 *
 * 核心就是通过 scope chain (作用域链实现)
 *
 * 一个局部函数 VO(variable Object): AO
 * scope chain: AO + parentScope(父级)
 *
 * 但是当我们GO都没有该变量时就会报错
 */

var msg = "Hello";

function foo() {
  bar();
  function bar() {
    console.log(msg);
  }
}
