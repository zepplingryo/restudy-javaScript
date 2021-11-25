/**
 * 严格模式很好理解: 是一种具有限制性的js模式 从而使代码隐式的脱离了懒散模式
 * 支持严格哦是的浏览器在检测代码中有严格模式时 会以更加严格的方式对代码进行检测和执行
 *
 *
 * 严格模式对正常js语义进行了一些限制:
 * 严格模式通过抛出错误来消除一些原有的静默(silent)错误
 * 严格模式让js引擎在执行代码时可以进行更多的优化
 * 严格模式禁用了在ecms未来版本中可能会定义的一些语法
 */

// "use strict";

// 静默错误
// info = 1; // ReferenceError: info is not defined
// true.info = 2; // TypeError: Cannot create property 'info' on boolean 'true'

function foo() {
  "use strict";
  true.info = 2; // // TypeError: Cannot create property 'info' on boolean 'true'
}

foo();

/**
 * 严格模式的限制:
 *
 * 1. 意外创建的全局变量
 * 2. 严格模式会使引起静默失败
 * 3. 试图删除不可删除的属性
 * 4. 不允许函数参数有相同的名称
 * 5. 不允许0的8进制语法
 * 6. 不允许使用with
 * 7. eval不再为上层引用变量
 */

// TODO:

/**
 * 严格模式下的this
 *
 * 在严格模式下 全局执行函数会指向undfined
 */
function foo() {
  console.log(this);

  this.localStorage.setItem(); // 这个打印会出现问题 因为默认情况下window的指向变为了undfined undfined.xxx就会报错
}

var obj = {
  name: "why",
  foo: foo,
};

foo();

obj.foo();
var bar = obj.foo;
bar();

("use strict");

setTimeout(function () {
  // 还是window setTimeout内部帮我们内部绑定了window
  console.log(this);
});
