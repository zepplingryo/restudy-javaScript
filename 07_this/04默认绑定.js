/**
 * 默认绑定: 独立函数调用
 *
 * 独立的函数调用我们可以理解为函数 没有被绑定到某个对象上进行调用
 *
 * 就是直接调用这个foo一样
 */
function foo() {
  console.log(this);
}

// 没有通过obj.foo 以及 foo.apply方式调用 只是独立运行
foo();

/**
 * 案例2
 */

function foo1() {
  console.log(this); // window
}

function foo2() {
  console.log(this); // window
  foo1();
}

function foo3() {
  console.log(this); // window
  foo2();
}

foo3();

/**
 * 案例3
 */

var obj = {
  name: "zepplingryo",
  foo: function () {
    console.log(this);
  },
};

var bar = obj.foo;

// 还是那句话this指向问题 跟函数定义位置无关 跟执行环境(调用)有关
bar(); // window

/**
 * 4
 */
function fon() {
  console.log(this);
}

var obj = {
  name: "zepplingryo",
  fon,
};

var bar = obj.foo;
bar(); // window

/**
 * 5
 */
function foo() {
  return function bar() {
    console.log(this);
  };
}

foo()(); // window
