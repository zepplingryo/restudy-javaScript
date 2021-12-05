/**
 * proxy会经常和Reflect一起来使用
 *
 * 同时Reflect不是一个类 不能通过构造函数将其创建相关对象
 *
 * Reflect的作用
 * 主要提供了很多操作js对象的方法 有点像Object中操作对象的方法
 * 比如Reflect.getPrototype(target) 类似于Object.getPrototypeOf()
 *
 * 为什么需要Reflect这样的新增对象呢?
 * 因为早期的ECMA规范没有考虑到这些对 对象本身的操作该放到哪里 然后直接犯懒 挂到原型链顶端Object对象上
 *
 * 但是由于OBject作为一个构造函数 将这些对于它本身的操作直接放在它本身不合适 导致Object本身过于重
 * 另外例如一些操作符 in delect让js感觉怪怪的
 *
 * 所以在ES6中新增了Reflect 让我们把这些操作都集中到Reflect对象中
 *
 * 我感觉这叫关注点分离
 *
 * Object只需要关注它本身即可 不用关注例如 has delect这种操作
 */

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Reflect/Comparing_Reflect_and_Object_methods

const { getPrototypeOf, get, set, setPrototype } = Reflect;

const info = {
  name: "zepp",
  age: 18,
};

const infoProxy = new Proxy(info, {
  get: function (target, key, receiver) {
    console.log("访问");
    // 之前proxy target[key] 但是这个还是跟原来Object.defineProperty一样 因为还是操作的原属性
    return get(target, key); // 现在这样从语义上看就没有操作原属性
  },

  set: function (target, key, newVal) {
    console.log("设置");
    // 跟proxy有什么区别呢? 返回一个布尔值用于检测有没有设置成功值 如果设置成功xxx 没有设置成功xxx 比proxy设置更加灵活
    const res = set(target, key, newVal);

    // if (res) {
    //   // doif()...
    // } else {
    //   // doesle()...
    // }
  },
});

infoProxy.name = "zeppLin";
console.log(infoProxy.name);

console.log(info.name);
