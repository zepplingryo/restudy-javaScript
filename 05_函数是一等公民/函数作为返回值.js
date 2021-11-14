/**
 * js允许函数内部定义函数 并且允许函数作为其内部返回值
 */
function foo() {
  function bar() {
    console.log("bar");
  }

  return bar;
}

foo()(); // bar

function makeAdd(count) {
  return function add(num) {
    return count + num;
  };
}

console.log(makeAdd(5)(6));
