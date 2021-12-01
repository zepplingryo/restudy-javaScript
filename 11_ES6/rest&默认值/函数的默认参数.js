// es5模拟函数默认值写法 总结: 写起来很麻烦 而且有漏洞
function bug(m, n) {
  m = m || "aaa";
  n = n || "bbb";
  console.log(m, n);
}

// bug 我传入的falsy变量
bug(0, "");

const foo = (m, n = {}) => {
  console.log(typeof n);
};

foo(1, 2); // number
foo(1); // object

// 对象参数和默认值以及解构
function log({ name, message } = { name: "1", message: "2" }) {
  console.log(name, message);
}

log();
log({ name: "bug", message: "log" });

// 另一种写法
const baz = ({ name = "bug", message = "log" } = {}) => {
  console.log(name, message);
};

baz();
bar(6, 6);

function bar({ x, y }) {
  console.log(x, y);
}

bar({ x: 1, y: 2 });

// 有默认值的形参最好放到最后
function som(x, y, z = 1) {
  console.log(x, y, z);
}
som(1, 2, undefined);

// 默认值会改变函数的length属性大小
function aaa(x = 1, y, z) {
  console.log(x, y, z);
}
console.log(aaa.length);
