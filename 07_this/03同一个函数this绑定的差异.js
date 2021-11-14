/**
 * 真正开发时 很少直接在全局下访问this 通常都是在函数中使用
 *
 * 所有函数在被调用时 都会创建一个执行上下文
 *
 * 这个上下文中记录中函数的调用栈 AO对象
 *
 * this也是其中的一条记录
 *
 * 但是this属于动态绑定 它不想作用域一旦形成就确定好了 而是函数执行时才能确定具体的指向
 */

/**
 * 全局下
 */
function foo() {
  console.log(this); // 这里好神奇 this没有想02中打印的结果一样 02是{} 这里是Golbal
}
foo();

/**
 * 对象中methods
 */
var obj = {
  name: "foo",
  foo,
};
obj.foo(); // { name: 'foo', foo: [Function: foo] }

/**
 * 改变this指向
 */
foo.apply(obj); // { name: 'foo', foo: [Function: foo] }

/**
 * 最后得出一个结论 this指向什么 跟他所处的位置是没有关系的
 *
 * 只有跟函数被调用的方式有关
 */
