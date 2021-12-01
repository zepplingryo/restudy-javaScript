const names = ["qwe", "asd", "zxc"];
const name = "zepp";
const info = { name: "zepp", age: 18 };

// 函数调用
function foo(x, y, z) {
  console.log(x, y, z);
}

foo(...names);
foo(...name);

// 构造数组时
const newNames = [...names, ...name];
console.log(newNames);

// 构建对象字面量时(es9)
const obj = { address: "113", ...info, ...names };
console.log(obj);

// rest是一种浅拷贝
