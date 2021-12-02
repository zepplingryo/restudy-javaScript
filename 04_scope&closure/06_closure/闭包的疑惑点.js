/**
 * 核心来说就一点
 *
 * 虽然ECStack 中 foo函数内部执行了三句话在执行栈中被销毁了
 *
 * 但是其AO对象被保存下来了(因为当前bar函数有堆父级作用域的指向)
 */

function foo() {
  var name = "foo";
  var age = 10101001010;

  function bar() {
    console.log(name);
  }

  return bar;
}

var fo = foo();

fo();

/**
 * 同时呢我这边没有用到age属性 但是这个属性就不再AO中了
 *
 * 因为没有用到 js引擎就对此进行优化 并没有按照ECMA规范进行实现
 */
