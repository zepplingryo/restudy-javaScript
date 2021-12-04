## 闭包的定义

在计算机科学角度而言

- 闭包(closure) 又称词法闭包(Lexical Closure)或者函数(function closures)
- 是(函数是一等公民的语言中)实现词发绑定的一种技术
- 闭包在实现上是一个结构体 他存储了一个函数和一个关联的环境(相当于一个符号查找表)
- 闭包跟函数最大的区别在于 当捕捉闭包时候 他的**自由变量**会在捕捉时被确定 这样即使脱离了捕捉时的上下文 他也能照常运行

结构体: 整体 函数+自由变量
1.50.00

## js 中闭包的定义

MDN 中对 JS 闭包的定义:

- 一个函数和其周围状态(lexical environment 词法环境)对引用绑定在一起(或者说函数呗引用包围) 这样的组合就是闭包(closure)
- 也就是说 闭包让你可以在一个内层函数中访问到其外层函数的作用域
- 在 js 中每当创建一个函数 闭包就会在函数创建的同时被创建

可以这么理解:

一个普通的函数 funtion 如果他可以访问外层作用域的自由变量 那么这个函数就是一个闭包
从广义来说 js 函数就是闭包
狭义来说 js 中一个函数 只要访问了外层作用域的变量 那么他就是一个闭包

## 狭义闭包

## 广义闭包

## 也许使用闭包会带来的问题