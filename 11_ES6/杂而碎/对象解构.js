const obj = {
  name: "why",
  age: 18,
  height: 1.88,
};

const { name, unknown } = obj;
console.log(name, unknown);

const { ...info } = obj;
console.log(info);

// 起别名
const a = {
  qwe: "qwe",
  asd: "asd",
  zxc: "zxc",
};

let { qwe: qqq = 123 } = a;
console.log(qqq);
