/**
 * 一个函数被new调用了 那么他会执行如下操作
 *
 * 1. 在内存中创建一个新的对象(空对象)
 *
 *
 * 2. 这个对象内部的[[prototype]]属性会被赋值为该构造函数的prototype属性
 * 这个属性就是函数的显示原型[[prototype]]
 *
 * 3. 构造函数内部的this会指向创建出来的新对象
 *
 *
 * 4. 执行函数的内部代码
 *
 *
 * 5. 如果构造函数没有返回空对象 则返回创建出来的新对象
 */
