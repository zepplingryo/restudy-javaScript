/**
 * 刚才看过curry 跟浪费性能
 *
 * 但是curry有啥用呢?
 *
 * 1. 单一职责 每个函数负责处理一件事
 *
 * 2. 逻辑复用
 */

// 1.
function foo(x) {
  x = x + 2;
  return (y) => {
    y = y + 2;
    return (z) => {
      z * 2;
      return () => {
        return x + y + z;
      };
    };
  };
}
foo(1)(2)(3);

// 2.
function sum(x, y) {
  x = x * y;
  return () => x + y;
}
const add4 = sum(4);
add4(1);
add4(2);
add4(3);
