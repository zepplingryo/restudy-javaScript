/**
 * 剪头函数
 *
 * 箭头函数不会绑定this arguments属性
 *
 * 箭头函数不能作为构造函数来使用因为没有constrouctor
 *
 * 箭头函数可以隐式return
 *
 * 箭头函数如果参数只有一个 ()可以省略
 *
 * 如果函数执行体只有一行代码{}也可以省略
 *
 *
 */

var foo = (...args) => {
  console.log(args);
  console.log(this); // window node是{}
};

foo(1, 2, 3, 4, 4);

[1, 2, 3, 4].forEach((item, item, array) => {});

const bar = (name) => ({ name });

const a = bar(1);
console.log(a);

/**
 *
 *
 */
