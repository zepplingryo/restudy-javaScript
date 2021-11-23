/**
 * arguments 是一个对应于传递给函数的参数的类数组(array-like)对象
 *
 * arguments有length 但是他不是一个真正的数组 例如不能map 是一个对象
 *
 * arguments会被存储在 变量对象AO中
 */
function foo() {
  /**
   * 常见的arguments操作
   * 1. 获取参数的长度
   * 2. 根据索引值获取某一个参数
   * 3. callee获取当前argumrnts所在的函数 这个别瞎用
   */
  console.log(arguments[0]);
  console.log(arguments.length);
  console.log(arguments.callee);

  // 类数组转数组
  var newArr = Array.prototype.slice.call(arguments);
  // var newArr = [].slice.call(arguments) // 这个两个就能看到显示绑定和隐式绑定的效果了
  console.log(newArr);
}

const bar = () => {
  console.log(arguments);
};

foo(1, 2, 3, 4);
bar(1, 2, 3, 4);
