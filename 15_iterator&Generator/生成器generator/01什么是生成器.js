/**
 * 生成器是一种特殊的迭代器
 *
 * 生成器是ES6新增的一种 函数控制/使用方案 他可以让我们更加灵活的控制函数什么时候继续执行 暂停执行
 *
 * 生成器函数也是一个函数 但是和普通函数有一些区别
 * 1. 生成器函数 可以 (也可以没有) 通过 yield关键字来控制函数的执行流程
 * 2. 生成器函数需要在function的后面加一个符号 箭头函数中不能使用
 * 3. 生成器函数的返回值是一个Generator(生成器) 生成器事实上是一种特殊的迭代器
 */

// 提个需求log完第一个之后就不log了
// const foo = () => {
//   const v1 = 1;
//   console.log(v1);

//   const v2 = 1;
//   console.log(v2);

//   const v3 = 1;
//   console.log(v3);
// };

// foo();

function* foo() {
  console.log("start");
  const v1 = 1;
  yield v1;

  const v2 = 1;
  yield v2;

  const v3 = 1;
  yield v3;
  console.log("end");
}

// 调用函数时 会给我们返回一个生成器对象
// 想要开始执行第一段代码可以调用生成器函数中的next方法
const gen1 = foo().next();
console.log(gen1);
