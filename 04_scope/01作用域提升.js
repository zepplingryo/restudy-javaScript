// var a = 100;

// function foo() {
//   n = 200;
// }

// foo();

// console.log(n);

// =================================================================

// function foo() {
//   // 优先去自己作用域查找
//   console.log(n);

//   var n = 200;

//   console.log(n);
// }

// var n = 100;

// foo();

// =================================================================

// var n = 100;

// function foo() {
//   console.log(n); // 100
// }

// function bar() {
//   var n = 200;
//   console.log(n); // 200

//   foo();
// }

// foo();

// console.log(n); // 100

// =================================================================

// var a = 100;

// function foo() {
//   console.log(a);
//   return;
//   var a = 100;
// }

// foo();

// =================================================================

function foo() {
  // m = 100; // 语法错误 这里js就会认为这个是一个全局的变量
  var a = (b = 100);
  // var a = 100;
  // b = 100
}

foo();

console.log(a); // a is not defined 不在全局VO
console.log(b); // 200
