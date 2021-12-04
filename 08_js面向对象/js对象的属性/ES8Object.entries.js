/**
 * 通过Object.entries 可以获取一个数组 数组中会存放可枚举属性的键值对
 */
const obj = {
  name: "zepp",
  age: 18,
};

console.log(Object.entries(obj));

// 对对象的key value进行遍历 这个还挺常用的
for (const [key, value] of Object.entries(obj)) console.log(key, value);

for (const [key, value] of Object.entries("qwe")) console.log(key, value);

for (const [key, value] of Object.entries(["a", "s", "d"]))
  console.log(key, value);
