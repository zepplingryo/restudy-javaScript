const obj = {
  name: "zepp",
  age: 18,
};

const entries = Object.entries(obj);
// console.log(entries);

const newObj = {};
for (const [key, val] of entries) newObj[key] = val;

// console.log(newObj);

/**
 * es10 中新增formentries
 *
 * 这个api就是将entries格式数据转化为对象
 */

const queryString = "https://example?name=zepp&age=18".split("?")[1];
// 一个可迭代对象
const queryParams = new URLSearchParams(queryString);
const res = Object.fromEntries(queryParams);
console.log(res);
