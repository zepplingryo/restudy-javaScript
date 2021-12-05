// function Person() {}

// Person();
// Person.apply({}, ["1", 2]);
// new foo();

/**
 * 之前我们学过上述三种调用方式
 *
 * 但是我们针对于这种函数对象没有任何途径可以监听到到底是哪种方式哪种方式调用的函数
 *
 * 现在我们可以通过proxy来确定到底是哪种方式进行调用函数
 */

function Person() {}

const personProxy = new Proxy(Person, {
  // apply调用
  apply(target, thisArg, args) {
    console.log(`对${target}进行了apply调用`);
    return target.apply(thisArg, args);
  },

  // new调用
  construct: function (target, argArray, newTarget) {
    console.log(`对${target}进行了new调用`);
    return new target(...argArray);
  },
});

Person();
// 对代理进行调用 直接访问目标函数是不生效的
personProxy.apply({}, ["1", 2]);
new personProxy(1, 2);
