/**
 * 把一个对象的 数据 索引 迭代器 放到一个对象中
 *
 * 并且这个对象实现了某种规则
 *
 * 则可称这个对象为 可迭代对象
 */

/**
 * 可迭代对象和迭代对象是不同的概念
 *
 * 当一个对象实现了 (iterable protocol) 协议时 它就是一个可迭代对象
 *
 * 这个对象的要求是必须实现 @@iterator方法 在代码中我们使用Symbol.iterator访问该属性
 *
 * 再回顾一下前面的知识 迭代器是一个对象 这个对象符合迭代器协议 (iterator protocol)
 *
 * 它最大的特征就是实现对象内部的next函数
 *
 * 上面说的可迭代对象是一个对象 符合可迭代协议 (iterable protocol): [Syobol.iterator]函数
 */

const arr = [1, 2, 3];

// 创建一个迭代器1对象来访问数组
let ind = 0;
const arrit = {
  next: function () {
    return ind < arr.length
      ? { done: false, value: arr[ind++] }
      : { done: true, value: undefined };
  },
};

// 一个可迭代对象
const iteratorobj = {
  arr: [1, 2, 3],
  [Symbol.iterator]: function () {
    let ind = 0;
    // 返回一个迭代器
    return {
      next: () => {
        return ind < this.arr.length
          ? { done: false, value: this.arr[ind++] }
          : { done: true, value: undefined };
      },
    };
  },
};

// console.log(iteratorobj[Symbol.iterator]().next());

const iterator = iteratorobj[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// 现在来看for of就可以看做是一种iterator.next()的语法糖
// 当done为true时不再执行next方法 终止for of 循环

// 虽然我们在日常业务中写next不是很常见 但是 for of比较常见啊 这个就是for of的本质

for (const item of iteratorobj) {
  console.log(item);
}
