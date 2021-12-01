// es5之前 对象属性名
let obj = {
  name: "why",
  friends: { name: "xxx" },
  age: 18,
};

obj["newName"] = "zepp";
// console.log(obj);

const s1 = Symbol();
const s2 = Symbol();

console.log(s1 === s2);

const s3 = Symbol("aaa");
console.log(s3.description);

// symbol 作为值
const obj2 = {
  [s1]: "symbol作为属性名",
  [s2]: "symbol作为属性名",
};
console.log(obj2[s1]);
// 不能通过.语法 这样就会找字符串
console.log(obj2.s1);

// 新增属性
obj2[s3] = "aaaa";

const s4 = Symbol("312");
Object.defineProperty(obj2, s4, {
  value: "sdfrsg",
});

// 使用symbol作为key的属性名 这个不是一个可迭代属性 意味着 of 中获取不到这些symbol值
console.log(Object.keys(obj2));
console.log(Object.getOwnPropertyNames(obj2));
console.log(Object.getOwnPropertySymbols(obj2));
const skey = Object.getOwnPropertySymbols(obj2);
for (const key of skey) {
  console.log(obj2[key]);
}

// 创建一样的symbol
const sy1 = Symbol.for("same");
const sy2 = Symbol.for("same");
console.log(sy1 === sy2);

console.log(Symbol.keyFor(sy1));
