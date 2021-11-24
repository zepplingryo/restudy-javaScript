/**
 * 组合(Compose)函数实在js开发过程中一种对函数的使用技巧 模式
 *
 * 比如我们现在需要对某个数据进行函数的调用 执行两个函数fn1和fn2这两个函数是依次执行的
 *
 * 那么如果我们都需要进行两个函数的调用 操作上就会显得重复
 *
 * 那么是否可以将这两个函数组合起来 自动依次调用呢?
 *
 * 这个过程就是对函数的组合 我们称之为组合函数
 */

function foo1(num) {
  return num * 2;
}

function foo2(num) {
  return num ** 2;
}

const result = foo2(foo1(1));
console.log(result);

function compose(m, n) {
  return function (num) {
    return n(m(num));
  };
}

const result2 = compose(foo1, foo2)(10);
console.log(result2);

// 更多的compose 参数
