/**
 * 1. 解释原型
 *
 * 每个对象都有个[[prototype]]属性 在node和浏览器环境下可以通过__proto__进行访问
 *
 * 这个属性称之为隐式原型__proto__
 *
 * 早期的es规范中没有直接规范去查看[[prototype]] 后续Es5有了直接访问原型的api
 *
 */
var obj = { name: "zepplingryo" };
console.log(obj.__proto__);
console.log(Object.getPrototypeOf(obj));

var obj = { name: "zepplingryo", __proto__: { info: "1" } };
console.log(Object.getPrototypeOf(obj));

/**
 * 原型有什么用?
 *
 * 当我们从一个对象中获取某一个属性时 它会触发[[get]]操作
 * 具体操作如下:
 * 在当前对象中查找某个对应的属性 如果找到直接使用
 * 如果没找到就会沿着它的原型[[prototype]]去查找对应属性
 *
 * 这就是js底层api提供的逻辑复用机制
 */
console.log(obj.type);
console.log(obj.name);
console.log(obj.info);
