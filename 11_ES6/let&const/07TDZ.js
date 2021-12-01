/**
 * 在es6中 我们还有一个概念称之为暂时性死区
 *
 * 它表达的意思是在一个代码中 使用let const 声明的变量 在声明之前 变量都是不可访问的
 * 我们将这种现象称之为(temporal dead zone) 暂时性死区
 */

var foo = "foo";

if (1) {
  console.log(foo);

  let foo = "bar";
}
