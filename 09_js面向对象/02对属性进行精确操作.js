/**
 * 在前面对象中 属性定义是通过对象字面量方式进行定义的
 *
 * 但是这样做的话我们就不能对某个具体属性进行限制 比如说某个属性读 写进行限制
 *
 * 如果想要对一个属性进行比较精准的操作控制 我们就可以使用属性描述符
 * 通过属性描述符可以精准的添加或修改对象的属性
 * 属性描述符需要使用 object.dfinePrototype来对属性进行添加或者修改
 */

const obj = { name: "zepplingryo", type: "object", age: 1 };

// console.log(obj);

/**
 * object.definePrototy 方法会直接在一个对象上定义一个新属性 或者修改一个对象的现有属性 并返回改对象
 *
 * prop:要定义或修改的属性名或symbol
 * descriptor: 要定义或修改属性描述符
 */

Object.defineProperty(obj, "value", {
  value: "changeobj",
});

// 现在value属性变得不可枚举 意味着不能打印或者循环出来
// console.log(obj.value);
