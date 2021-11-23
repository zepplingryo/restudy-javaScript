var obj = { name: "why", age: 1 };

const foo1 = (num1, num2) => num1 * 2 + num2 * num2; // true

var name = 1;
const foo2 = () => {
  console.log("zhixing1");
  name = 2; // 不是 修改了外部变量
};

const foo3 = (info) => {
  info.age = 10n; // 不是 改变了参数的属性值
};

foo3(obj);
console.log(obj);

const foo4 = (info) => ({
  ...info, // 是 相同的输入产生相同的输出
  age: 100,
});

foo4(obj);

// react中组件也是纯函数 核心还是不能随便修改参数 不能return奇怪的东西 不能修改全局状态
