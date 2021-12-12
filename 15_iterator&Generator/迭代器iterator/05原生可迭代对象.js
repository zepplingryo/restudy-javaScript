/**
 * array
 *
 * 这两个数组没啥本质区别 因为本质都是new array来的
 *
 * 由于Array类内部实现了了可迭代协议所以我们日常开发中普通arr就可以迭代
 */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8];

const arr2 = new Array(arr1.length);

// console.log(arr1[Symbol.iterator]); // [Function: values]

const it1 = arr1[Symbol.iterator]();

console.log(it1.next()); // { value: 1, done: false }

/**
 * map/set
 */
const set = new Set();
set.add(1);
set.add(2);
set.add(3);
const it2 = set[Symbol.iterator]();
console.log(it2.next());

const obj1 = { name: "foo" };
const map = new Map();
map.set(obj1, "1111");
const it3 = map[Symbol.iterator]();
console.log(it3.next());

/**
 * 函数中的arguments也是一个可迭代对象
 */
function foo(x, y, z) {
  const it4 = arguments[Symbol.iterator]();
  console.log(it4.next());
}
foo(1, 2, 3, 4);

/**
 * String
 */
const str = new String("str");
const it5 = str[Symbol.iterator]();
console.log(it5.next());

/**
 * nodeList集合
 */
