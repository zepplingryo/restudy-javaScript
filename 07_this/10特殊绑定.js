/**
 * apply/call/bind 当传入null/undfined时 自动将this绑定成全局对象
 */

function foo() {
  console.log(this);
}

foo.apply({});

// 忽略显示绑定
foo.apply(null);
foo.apply(undefined);

/**
 * 创建一个函数的间接引用 这种情况下使用默认绑定规则·
 */
var obj1 = {
  name: "foo",
  foo: function () {
    console.log(this);
  },
};

var obj2 = {
  name: "bar",
};

// obj2.bar = obj1.foo;
// obj2.bar();

/**
 * 这里是因为 obj1.foo是一个独立函数 所以指向window
 */

// 逆天
(obj2.bar = obj1.foo)(); // window

/**
 *
 */
