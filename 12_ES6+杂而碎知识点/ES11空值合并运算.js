/**
 * ?? 空值合并运算
 *
 * 这个还是得去涉及到大量的falsy变量的理解
 *
 * 这里比方说我想使用空字符串foo进行赋值
 *
 * 但是下面bar的赋值情况变为 我是默认值
 *
 * 这时候就能使用??
 *
 * 当且仅当null 或者 undfined时 才会使用下列其他默认值
 */

let foo = "";

const bar = foo || "我是默认值";

console.log(foo); // undefined

console.log(bar);

// 提一个需求 我这里想拿到的是空字符串
let baz = foo ?? "default value";
console.log(baz);
