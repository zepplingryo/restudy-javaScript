const obj = {
  name: "why",
  age: 18,
};

const info = Object.create(obj, {
  address: {
    value: "北京市",
    enumerable: true,
  },
});

console.log(info);
console.log(info.__proto__);

// 判断是否是自己的属性
console.log(info.hasOwnProperty("name")); // false

// in 判断某个属性是否在某个对象或者在对象的原型中
console.log("name" in info); // true
