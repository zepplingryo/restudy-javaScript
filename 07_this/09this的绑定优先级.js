/**
 * 1. 默认规则的优先级最低: 默认规则的优先级是最低的 因为存在其他规则时 就会通过其他规则的方式来绑定this
 *
 * 2. 显示绑定优先于隐式绑定
 *
 * 3. new绑定优先级高于隐式绑定
 *
 * 4. new高于显示绑定
 */

/**
 * 显示绑定优先于隐式绑定
 */
var obj = {
  name: "zepplin",
  foo: function () {
    console.log(this);
  },
};
obj.foo();
obj.foo.call("123");
obj.foo.apply("123");
var foo = obj.foo.bind("222");
foo();

/**
 * 显示绑定优先于隐式绑定 更明显的比较
 */
function foo() {
  console.log(this);
}

var obj = {
  name: "zepp",
  foo: foo.bind("123"),
};

obj.foo(); // string{'123'}

/**
 * new绑定优先级高于隐式绑定
 */
var obj = {
  name: "zepplin",
  foo: function () {
    console.log(this);
  },
};

var f = new obj.foo(); // foo {} 而不是当前obj对象 所以说 new绑定优先级高于隐式绑定

/**
 * 这里用new和bind比较
 */
function foo() {
  console.log(this);
}

var bar = foo.bind("aaa");

var obj = new bar();

/**
 * apply bind call 三者优先级
 */
function foo() {
  console.log(this);
}

foo.bind("abc").call("def"); // abc
