/**
 * 首先let const 都会作用域提升
 *
 * 在我理解就是因为 控制台会提供 Cannot access 'fo' before initialization 报错信息
 *
 * 因为在let 某个变量前访问 按理来说不应该监测到他没有被赋值 同时也因为js变量收集机制
 *
 * ECMA262 中let/const 变量会被创建在包涵他们的词法环境被实例化 但是是不可以访问他们的 直到词法绑定被求值
 *
 */
var foo = "foo";
console.log(foo);

console.log(fo);
// fo被创建出来了 但是不能被访问 我个人认为作用域提升了 就能被提前访问 但是他确确实实是有被创建出来的
let fo = "foo";
