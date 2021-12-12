/**
 *
 */

function* foo() {
  console.log("start");
  const v1 = 1;
  yield v1;

  const v2 = 1;
  yield v2;

  const v3 = 1;
  yield v3;
}

const gen = foo();

console.log(gen.next());
// 在第二次迭代时 使用return 就相当于在第一段代码的后面加上return 就会提前终止生成器函数代码继续执行
console.log(gen.return(111));
console.log(gen.next());
console.log(gen.next());
