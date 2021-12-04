/**
 * 逻辑赋值运算: logical-assign-operator
 *
 * ||=
 *
 * &&=
 *
 * ??=
 *
 */

// 1. ||= 有值就用自己的没有值就用赋值的
let msg1 = undefined;
console.log(msg1); // undefined

// 下面这段等价于 msg1 = msg1 || 'default message'
msg1 ||= "default message";
console.log(msg1); // "default message"

// 2. &&=

const obj1 = {
  name: "zepplingryo",
  foo: function () {
    console.log("foo 函数被调用");
  },
};

// 我们在不确定foo函数是否存在同时 obj1.foo()是否被调用情况下 我们在之前可能会写出这种代码
// obj.foo && obj1.foo();

// 可以这么用 但是在真实场景下这个用的比较少
// obj1.foo &&= obj1.foo();

let info = {
  name: "foo",
};

// &&=的一种用法
info.name &&= "zepp";
console.log(info);

// 3. ??=
let message = "";
message ??= "default value";
console.log(message);
