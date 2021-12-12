/**
 * generator本质上是一个特殊的iterator
 *
 * 当我们调用next方法时 先执行yield以前的代码 之后执行 yield的代码
 *
 * value就是 yield后面的计算结果
 *
 * 当遇到yiele时候 就会暂停函数的执行
 * 当遇到return 时生成器就会终止迭代
 */

function* foo() {
  console.log("start");
  const v1 = 1;
  console.log(1);
  yield v1;

  const v2 = 1;
  console.log(2);
  yield v2;

  const v3 = 1;
  console.log(3);
  yield v3;

  // 我们知道普通函数中默认return为undefined
  console.log("end");
  // 当我们明确给foo函数返回值时 则会在迭代中作为最后一次value
  // 同时这样也会导致done为true 迭代器函数中代码就会生成完了
  return 123;
}

const gen = foo();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
