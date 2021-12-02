/**
 * 属性描述符分类:
 *
 * 数据类型(Data Properties) 描述符(Descriptor)
 *
 * [[Configurable]]: 属性是否可以通过delete删除属性 是否可以删除他的特性 或是否可以将他修改为存取属性描述符
 * 当我们直接在一个对象上定义某个属性时 这个属性的[[Configurable]]为true
 * 当我们通过属性描述符定义一个属性时 这个属性的[[Configurable]]为false
 *
 * [[Enumerable]]: 表示属性是否可以通过for in或者Object.keys()返回该属性
 * 当我们直接在一个对象上定义某个属性时 这个属性的[[Enumerable]]为true
 * 当我们通过属性描述符定义一个属性时 这个属性的[[Enumerable]]默认为false
 *
 * [[Writable]]: 表示是否可以修改属性的值
 * 当我们直接在一个对象上定义某个属性时 这个属性的[[Writable]]为true
 * 当我们通过属性描述符定义一个属性时 这个属性的[[Writable]]为false
 *
 * [[value]]: 属性的value值 读取属性时会返回该值 修改属性时 会对齐进行修改
 * 默认情况下这个值是undfined
 *
 * 存储属性(Accessor访问器 Properties) 描述符(Descriptor)
 */

const obj = { name: "zepplingryo", type: "object", age: 1 };

Object.defineProperty(obj, "where", {
  value: "sbr",
  // 该属性不可被删除 也不能臭醒定义属性描述符
  configurable: false,
  // 不可被枚举 通过object.keys or in关键字找不到
  enumerable: false,
  // 该特性是属性是否可以赋值
  writable: false,
});

delete obj.name;
// console.log(obj);
delete obj.where;
// console.log(obj);

// 测试 configurable: false,
// TypeError: Cannot redefine property: where
// Object.defineProperty(obj, "where", {
//   value: "src",
//   configurable: true,
// });

// console.log(obj);

// 测试 enumerable
// for (const key in obj) {
//   console.log(key);
// }

// 测试 writable
obj.where = "";
console.log(obj.where);

// 对于我们在对象字面量直接创建的属性而言 上面是个配置项都是为true value就是value
