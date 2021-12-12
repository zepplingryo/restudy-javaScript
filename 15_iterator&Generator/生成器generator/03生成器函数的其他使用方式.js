/**
 * 上一个next的参数会作为 下一个yield的返回值 就是这里的n
 */
function* foo(num) {
  const v1 = 1 * num;
  const n = yield v1; //n = 10

  const v2 = 2 ** n;
  const n2 = yield v2; // n = 11

  const v3 = 3 ** n2;
  yield v3;
}

const gen = foo(5);

console.log(gen.next()); // 这个传值也没有 因为他的上一个没有yield关键字
console.log(gen.next(10));
console.log(gen.next(11));
console.log(gen.next());
