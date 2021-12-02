// function foo() {
//   console.log(1);
// }

// foo();

// function foo(x) {
//   console.log(arguments);
//   console.log(x);
// }

// foo(1, 2, 3, 4, 5, 6);

/**
 * 将函数作为另外一个函数的参数进行传递 之后调用该函数
 */

// function foo(aaa) {
//   aaa();
// }

// function bar() {
//   console.log("bar");
// }

// foo(bar);

/**
 * 函数作为参数 传递到其他函数中 例子
 */
function calc(num1, num2, calcFn) {
  console.log(calcFn(num1, num2));
}

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

calc(1, 2, add);
