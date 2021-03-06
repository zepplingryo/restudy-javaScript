## 到底什么是模块化、模块化开发呢?

模块化开发最终的目的是将程序划分成一个个小的结构

这个结构中编写自己的逻辑代码 有自己的作用域 不会影响到其他结构

这个结构可以将自己希望暴露的变量 到处给其他结构使用

也可以通过某种方式 导入另外结构中的变量

这个就是就是模块化 按照这种结构划分开发程序的过程 就是模块化开发的过程

## 没有模块化的弊端

1. 没有隔离作用域 导致如命名冲突等问题

### 如何解决没有作用域的弊端

用 IIFE 形成作用域 同时由于 IIEF 的特性 可以直接执行代码 不会影响别的文件

但是这样做也会又个问题 不会暴露想要给外界报漏的属性

好在可以 return 一个对象 用一个 vat 全局变量去接收他

```js
var b = (function () {
  var name = "1";
  var age = "2";
  var xxx = "r";

  // 把想要暴露出去的变量返回出去 然后我var 了一个b 之后就能通过b.x进行访问
  return {
    name: name,
    age,
    xxx,
  };
})();
```

所以这个就是模块化雏形

但是这个雏形还是有所弊端的

1. 因为我们最终还是增加了一个全局变量 只要是全局变量就还会存在 没有作用域隔离 导致命名冲突的问题
2. 如果没有记清楚全局变量名 就会增加调试成本
3. 早期没有统一的模块化规范时 这样在不同公司不同项目中切换就会产生很大的学习成本

## CJS

### CJS 规范和 node 关系

node 中的 js 遵循 CJS 规范(node 就是 CJS 的一种实现)

CJS 是一种规范 最初提出来实在浏览器以外的地方使用 并且当时被命名为 ServerJS 后来为了体现它的广泛性 修改为 CommonJS 平时我们也会简称为 CJS

- node 是 CommonJS 在服务器端一个具有代表性的实现
- Browserify 是 CJS 在浏览器中的一种实现
- webpack(模块化打包工具) 具备 CJS 的支持和转换 (.cjs)

例如: webpack 中

```js
module.exports = {
  mode:...
  entry:...
}
```

- node 运行 js 脚本其实就是吧 js 文件当成一个模块进行运行 会将这个模块放到一个函数中单独来执行
- 这个模块中包括 CJS 规范的核心变量 exports module.exports require
- 我们可以使用这些变量来方便的进行模块化开发

exports 和 module.exports 可以负责对模块中的内容进行导出
require 函数可以帮助我们导入其他模块(自定义模块 系统模块 第三方库模块)中的内容

### CJS 原理

### require 查找机制

### ES module 和 CJS 模块化不同之处

- 一方面使用 import 和 export 关键字
- 另一方面它采用编译器的静态分析 并且加入了动态引入

### ES module 初体验

export 负责将模块内的内容导出
import 负责从其他模块导入内容
采用 ES module 将自动采用严格模式 `use strict`
