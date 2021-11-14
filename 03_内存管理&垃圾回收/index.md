## 变量环境&环境记录

**早期 es 规范**

之前讲到的 VO/GO 都是 ES6 以前的规范

每一个执行上下文都会被**关联**到一个变量对象(variable Object)VO 中 在源代码中的 变量和函数声明 会被作为属性添加到 VO 中

对于函数来说 函数内部的参数 内部声明的变量也会被添加到 VO 中

GEC(global excution context)全局执行上下文: 执行全局代码
FEC(function excution context)函数执行上下文: 执行函数代码

**现代 es 规范**

每一个执行上下文关联到一个变量环境(VariableEnvironment)中 在执行代码中变量和函数的声明会作为**环境记录**(Environment Record) 添加到变量环境中

对于函数而言参数也会被作为环境记录添加到变量环境中

**将变量对象(VO)名词改为变量环境(VE) 环境属性改为环境记录**

VE 跟 js 引擎实现有关 VE 可以不再是一个对象 而是一个 map(key:value)
