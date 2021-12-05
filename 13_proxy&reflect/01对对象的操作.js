const obj = {
  name: "zepplin",
};

obj.name = "zeppli";
delete obj.name;

/**
 * 提一个需求 当对象发生变化时 监听对象的属性被 读 写 删 配 的过程
 *
 * 我们可以用object.definProperty来做到
 */

const info = {
  name: "zepp",
  age: 18,
};

// Object.defineProperty(info, "name", {
//   get: function () {
//     console.log("属性被访问");
//     // return "1";
//   },
//   set: function (value) {
//     console.log("属性被设置", value);
//   },
// });

// 为啥是undfined呢? 1. 我们通过属性描述符对属性进行描述后属性的访问就会走我们设置的get方法了 设置走set方法
// 2. 我们没有具体返回某个属性 所以get函数 就跟普通函数一样返回undfined
// console.log(info.name);
// info.name = "zepplin";

/**
 * 对上面代码进行修改一番
 * 要让每个属性都有监听的能力
 */
for (const key in info) {
  let value = info[key]; // old value
  Object.defineProperty(info, key, {
    get: function () {
      console.log(`监听到obj对象的${key}属性被访问${value}`);
      return value;
    },
    set: function (val) {
      console.log(`监听到obj对象的${key}属性被设置值了值为${val}`);
      value = val;
    },
  });
}

info.name = "zepplin";
info.age = 13;

console.log(info.name);
console.log(info.age);

/**
 * Object.defineProperty无能为力的点
 *
 * 首先 OBject.defineProperty 他的设计初衷不是为了去监听💍一个对象中的所有属性
 * 我们在定义某些属性时 初衷其实是定义普通函数的属性 但是后面我们强行将他变成数据的属性描述符
 *
 * 如果我们想监听更加丰富的操作 比如新增属性 删除属性 那么Object,defineProperty 是无能为力的
 *
 * 所以我们要知道 存储数据描述符设计的初衷并不是为了去监听一个完整的对象
 */
