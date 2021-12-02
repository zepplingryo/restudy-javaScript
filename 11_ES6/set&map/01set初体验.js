/**
 * 数据结构: 存储数据的结构
 */
// Set是个类
class MySet extends Set {}

const set = new MySet();

// 增
set.add(1);
set.add(2);
set.add(3);
set.add(4);

console.log(set);

set.add({});
set.add({});

const obj = {};
set.add(obj);
// set.add(obj);

/**
 * set的用处:
 * 1:给数组去重
 */
const arr = [1, 2, 3, 4, 1];

const newArr = [];
for (const item of arr) {
  if (newArr.indexOf(item) === -1) {
    newArr.push(item);
  }
}
console.log(newArr);

const arrSet = new MySet(arr);
console.log(arrSet);

// 转化为数组结构
// 1. Array.from(arrSet);
// 2.[...arrSet]

/**
 * set基本用法
 */
arrSet.size = 10; // 强行赋值也没用还是该多大就多大
console.log(arrSet.size);

arrSet.add(100);
console.log(arrSet);

arrSet.delete(2);
console.log(arrSet);

console.log(arrSet.has(3));

arrSet.clear();
console.log(arrSet);
