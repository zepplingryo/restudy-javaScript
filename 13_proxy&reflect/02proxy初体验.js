/**
 * es6新增Proxy类 这个类从名字上就可以看出 是用于帮助我们创建代理的
 *
 * 也就是说 如果我们希望监听一个对象的相关操作 那么我们可以先创建一个代理对象(代理对象Proxy)
 *
 * 之后对该对象的所有操作 都通过代理对象来完成 代理对象可以监听我们想要对原对象进行哪些操作
 *
 *
 * 首先Proxy是一个类
 */

const info = {
  name: "zepp",
  age: 18,
};

// 必须传入需要监听的对象 可以称之为handler
// 其次 我们之后的操作都是直接对Proxy的操作 而不是原有点对象 因为我们需要在handler里面监听

// target 目标对象 handler捕获器对象(可以称之为处理者)
// const infoProxy = new Proxy(target, handler);

// 这里的target对象是一个对象的全貌 下面使用模版字符串直接隐式转化toString方法

const infoProxy = new Proxy(info, {
  // [[get]] target 目标对象, key 目标属性的key
  get: function (target, key) {
    console.log(`监听到${target}的${key}属性被访问${target[key]}`, target);
    return `访问了${target[key]}`;
  },
  // [[set]] target 目标对象, key 目标属性的key 新的val
  set: function (target, key, newVal) {
    target[key] = newVal;
  },
});

// 访问代理对象属性
console.log(infoProxy.age);
console.log(infoProxy.name);

// 设置代理对象属性
infoProxy.name = "zeppLin";
infoProxy.age = "18";

// 访问原来对象 发现属性被修改了
console.log(info.name);
console.log(info.age);

/**
 * 在01中我们通过get set 监听到了属性的改变
 *
 * 如果用proxy怎么处理呢?
 *
 * 我们只需要在handler中重写即可 (这里重写的是捕获器)
 */
