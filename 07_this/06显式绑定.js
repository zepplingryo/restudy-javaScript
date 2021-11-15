/**
 * 隐式绑定有一个前提条件
 * 必须在调用的对象内部有一个对函数的引用
 * 如果没有这样的引用的话 在调用过程中 会报错(找不到)
 *
 * 正是通过这个引用 间接将this绑定到了这个对象上
 *
 * 如果我们不希望在对象内部包含这个函数的引用 同时有希望在这个对象上进行强制调用 该怎么做?
 * js所有函数都可以使用call apply方法(这个是和prototype有关)
 *
 * call和apply第一个参数都是一个对象 就是为了给this准备的
 * 在调用这个函数时 会将this绑定到这个传入的对象上
 */

function foo() {
  console.log("被调用了", this);
}

foo();

var obj = {
  name: "foo",
};

// call/apply可以显式执行this的绑定对象
foo.call(obj);
foo.apply(obj);

/**
 * call apply的区别
 */
function sum(num1, num2) {
  console.log(num1 + num2, this);
}

sum.call("call", 1, 2);
sum.apply("apply", [2, 3]);

// call 与apply执行函数时 是可以明确绑定this的

/**
 * bind 显示绑定
 *
 * bind也有点区别 他会生成一个新的函数 同时意味着在内存中开辟一块新的内存空间
 *
 * newFoo();以后调用都是aaa 不是原来foo()调用
 *
 * 显示绑定优先级更高
 *
 */
function foo() {
  console.log(this);
}

var newFoo = foo.bind("aaa");
newFoo();
