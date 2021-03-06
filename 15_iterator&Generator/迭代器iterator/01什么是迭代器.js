/**
 * 迭代器 是确使用户可在容器(container 例如链表或数组)上遍历访问对象
 * 使用该接口无需关心对象的内部实现细节
 *
 * 迭代器本身是一个对象 同时也可以帮我们去迭代一个对象
 */

// 使用迭代器可以帮助我们访问容器中的元素 以下面这个数组为例 第一次访问1 以此类推
const arr = [1, 2, 3];

/**
 * 在js中 迭代器也是一个具体的对象 这个对象需要符合   迭代器协议(iterator protocol)
 *
 * 这个只是迭代器协议
 *
 * 迭代器协议定义了产生一系列值(无论是优先还是无限个)对标准方式
 *
 * 那么在js中这个标准就是一个特定的next方法 只要在js对象中实现next函数即可
 *
 * nextable
 */

// 只要我们下面的这个对象实现了特定的next函数的实现细节 我们就可以
const obj = {
  next: function () {},
};

/**
 * 这个特殊的next方法需要怎么实现才能成为一个迭代器协议对象呢?
 *
 * 1. 一个无参数函数 或者有一个参数的函数 返回一个拥有以下两个属性的对象
 *
 * - done已经完成了(boolean) 如果迭代器可以产生序列中的下一个值 则为false
 * 如果迭代器已将序列迭代完毕 则为true 这种情况下 value是可选的 如果它依然存在 即为迭代结束之后的默认返回值
 *
 * - value
 * 迭代器返回的任何js值 done为true时可以省略
 */

const obj1 = {
  next: function () {
    return {
      done: true,
      value: "xxx",
    };
  },
};
