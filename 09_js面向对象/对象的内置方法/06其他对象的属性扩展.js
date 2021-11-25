const obj = {
  name: "zepplingryo",
  address: "sbr",
};

// 禁止对象继续添加新属性

Object.preventExtensions(obj);

obj.a = "a";
obj.b = "b";

console.log(obj);

// 禁止对象配置/删除里面的属性

// for (const key in obj) {
//   Object.defineProperty(obj, key, {
//     configurable: true,
//     enumerable: true,
//     window: true,
//     value: obj[key],
//   });
// }

Object.seal(obj);

delete obj.name;
console.log(obj.name);

// 禁止对象属性修改 这个很有趣 冻结只是冻结一级属性
Object.freeze(obj);
obj.address = "src";

console.log(obj);
