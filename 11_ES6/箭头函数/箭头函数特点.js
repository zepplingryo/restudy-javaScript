/**
 * 箭头函数没有自己的this/argumrnts/constructor
 */
const name = () => {
  // 虽然能打印出来 但是还是按照作用域查找机制 往上层找 结果发现上层作用域有
  // 这个跟this 打印一样
  // 稍为有点区别的是 node有arguments 但是浏览器环境下没有
  console.log(arguments);
};

foo(1, 2, 3);
