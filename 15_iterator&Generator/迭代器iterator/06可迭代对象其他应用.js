/**
 * 可迭代对象的使用场景
 *
 * js语法中 for of 展开语法 yield 解构赋值
 *
 * 创建一些对象时 new Map([iterable]) new Set([iterable]) new WeakSet([iterable])
 *
 * 一些方法的调用 Promise.all(iterable) Promise.race(iterable) Array.from(iterable)
 */

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

/**
 * 展开
 */

// 根据迭代器的next()方法/value 一个一个将数组中的元素放过来
const names = ["11", "12", "11"];
const newNames = [...names, ...iteratorobj];

// ES9 对象的展开底层用的不是迭代器next()方法 这个是通过for in遍历所有的key value 然后将元素(key:value)放到一个新的空对象中 不同的js引擎有不同的实现
const obj1 = { name: "foo" };
const obj2 = { ...obj1, a: "bar" };

/**
 * 解构 依次调用next方法 之后赋值给这里的name1 name2
 */
const [name1, name2] = names;

// 估计也是object.keys这些的
const { name: z, age: y } = obj2;

/**
 * 创建一些其他对象时
 */
const set1 = new Set(iteratorobj);
// const set2 = new Set(obj2); //object is not iterable
const set2 = new Set("123");

/**
 * 创建数组
 *
 * 本质就是因为类数组可以调用 迭代器的next方法
 */
const foo = (z, x, c, v) => {
  console.log(arguments);
  const temp = Array.from(arguments);
};
foo(1, 2, 3, 4);

/**
 * promise.all 不用费得传数组 只要是可迭代对象即可
 */
Promise.all(iteratorobj).then((res) => {
  console.log(res);
});
