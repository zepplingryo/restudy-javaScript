const obj = {
  name: "zepp",
  age: 18,
};

// 这二者获取的都是数组
console.log(Object.keys(obj));
console.log(Object.values(obj));

// 还可以穿入可迭代对象
console.log(Object.values([1, 2, 3]));
console.log(Object.values("abd"));

// 这个就不行了
console.log(Object.values(123));

for (const [key, value] of "asd") console.log(key, value);
