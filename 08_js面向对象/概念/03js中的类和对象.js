/**
 * 当我们编写如下代码时 我们会如何来成功这个Person呢?
 *
 * 在js中Person应该被称之为一个构造函数
 * 从很多面向对象语言过来的开发者 也习惯称之为类 因为类可以帮助我们创建对象p
 * 如果从面向对象的编程范式来看 Person确实是可以称之为类
 *
 * 但是之后学到的Class 也是由原型 原型链 面向对象 封装 继承
 *
 * 面向对象三(四)大特性: 封装 继承 多态 (抽象)
 * 封装: 将一些属性和方法封装到一个类中 可以称之为封装的过程
 * 继承: 继承是面向对象中非常重要的 不仅仅可以减少重复的代码数量 也是多肽的前提
 * 多态: 不同的对象在执行时表现出不同的形态
 *
 * 继承就是帮助我们将重复代码和逻辑抽取到父类中 子类只需要直接继承过来使用即可
 */

function Person() {}
var p1 = new Person();
