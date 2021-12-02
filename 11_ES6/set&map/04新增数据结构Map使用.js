const obj1 = { name: "foo" };
const obj2 = { name: "bar" };

const info = {
  [obj1]: "aaa",
  [obj2]: "bbb",
};

// 计算属性名与toString的结合
// console.log(info);

const mAp = class extends Map {};

const map = new Map();

map.set(obj1, obj2); // key,value被顶掉了
map.set(obj1, "aaa");
map.set(obj2, "bbb");
console.log(map);

// Object.entries

const map2 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);
// console.log(map2);

for (const [k, v] of map2) console.log(k, v);

/**
 * 常见属性
 */
console.log(map2.get("key1"));
console.log(map2.has("val1"));

map2.delete("key2");
console.log(map2);

map2.clear();
console.log(map2);
