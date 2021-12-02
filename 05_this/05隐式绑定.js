/**
 * 隐式绑定: 是通过某个对象发起的函数调用
 */

function foo() {
  console.log(this);
}

var obj = {
  name: "why",
  foo,
};

obj.foo(); // 隐式绑定到obj对象中 obj对象会被js引擎绑定到fn函数中的this里面

/**
 * 2
 */

var obj = {
  name: "zepplingryo",
  say: function () {
    console.log(this.name);
  },
};

obj.say();
var fn = obj.say; // zepplingryo
fn(); // window

/**
 * 3
 */
var obj1 = {
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "obj2",
  bar: obj1.foo,
};

obj2.bar();
