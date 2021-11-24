/**
 * 全局函数eval接收一个字符串
 *
 * webpack-devtool 里面就可以使用这个 用这个编译模式编译的js代码性能会相对来说高一点
 *
 * 为什么性能好了反而不用呢?
 *
 * - eval代码的可读性非常差 (代码的可读性是衡量代码质量的重要原则)
 * - eval是一个字符串 有可能在执行过程中该变量被别人修改 可能就会被攻击
 * - eval执行必须经过js解释器 不能被js引擎优化
 */

var evalmsg = 'var msg = "hello redux"; console.log(msg);';

eval(evalmsg);
