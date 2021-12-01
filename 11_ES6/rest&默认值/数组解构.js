const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// 基本使用
const [a, ...b] = arr;
const a1 = [...b];

// 换位
let [c, d] = [1, 2];
[c, d] = [d, c];

// 解构后面元素
const array = ["1", "2", "3"];
const [, , item3] = array;

// 解构的默认值
const [itema, itemb, itemc, itemd, iteme, itemf] = array;
console.log(iteme);

// 数组不能解构赋值为一个新当别名
