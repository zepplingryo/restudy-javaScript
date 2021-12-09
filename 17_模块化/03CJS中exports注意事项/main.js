const foo = (x) => {
  return x;
};

const a = "1";

function sum(x) {
  console.log(x);
}

// 第二种导出方式 这个我在使用时候有点好玩 把这个写完以后 我的一些块变量都颜色边低了

/**
 * 在node中cjs源码中
 * 吧 module.exports={}
 *
 * 然后  ( exports = module.exports )
 *
 * 这个就有意思了 他们俩都指向同一个控对象(对象的引用赋值)
 *
 * exports.a = a;
 * 相当于 module.exports.a = a
 * 也相当于 modules.exports = {a:a}
 *
 * 所以我们最后导出的依然是module.exports
 */

exports.a = a;
exports.sum = sum;
exports.foo = foo;

/**
 * exports只能.属性来导出
 *
 * 如下例子 我这个例子是给exports赋值一个新对象 这就是改变了内存地址
 * 所以此时 ( exports !== module.exports )
 *
 * (还是那个核心 最终能导出的一定是 module.exports)!!
 */
exports = {
  a: a,
};

/**
 * 这种情况下 代码不会被导出
 *
 * 虽然通过 exports.a = a; 的方式往module.exports中添加导出的变量
 * 但是最后module.exports又指向新的内存地址
 *
 * 所以代码不会被导出
 */
exports.a = a;
exports.b = b;

module.exports = {};

/**
 * exports没有存在的意义 exports老实习生了
 *
 * 但是CJS规范中严格意义上是使用 exports.的方式进行导出的
 *
 * 所以我们严格意义上来说不符合CJS规范的
 *
 * 所以为了符合CJS规范 node里面加上了一个exports
 * 但是它内部导出的原理用的确是 modules.exports
 *
 * 但是原理上来说用 modules.exports 那就用 modules.exports
 */
