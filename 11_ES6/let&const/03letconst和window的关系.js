/**
 * 我们声明对变量和环境记录是被添加到变量环境(VE)中的
 * 但是标准有没有规定这个对象是window对象或其他对象呢?
 * 其实并没有 js引擎在解析时 其实会有自己的实现
 * 比如v8其实是通过VariableMap的一个hashmap来实现他们的存储的
 * window对象呢? window对象是早起的GO对象 在最新的视线中其实是浏览器添加的全局对象
 * 并且一直保持了window和var之间值当相等性
 *
 * 这也是一种映射关系
 *
 * 在最新的标准中 const和let声明的变量会保存在变量环境(VE中) V8中实现是基于hashmap的一种变种 variable map 来读写
 */

var foo = "foo";

console.log(window.foo); // foo;

window.foo = "bar";

console.log(foo);
