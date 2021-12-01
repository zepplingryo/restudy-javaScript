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

const infoObj = {
  name: "zepp",
  friends: {
    name: "asd",
  },
};

const otherObj = { ...infoObj, address: "sbr" };

// 究其原因是因为在复制过程中 只是复制了friends这个变量的引用地址
infoObj.friends.name = "qwe";

console.log(othoer.friends.name);
