/**
 * js函数可以当做一个类的构造函数来使用 也就是使用new关键字
 *
 * new会执行如下操作
 *
 * 1. 创建一个全新的空对象
 * 2. 这个新对象会被执行prototype连接
 * 3. 这个新对象会绑定到函数调用的this上(这个是new绑定的核心)
 * 4. 如果函数没有返回其他对象 表达式就会返回这个新对象
 */

function React(a, b) {}

var a = new React("1", 2);
var b = new React(2, 1);
