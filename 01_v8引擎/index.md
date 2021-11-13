## 随处可见的 javaScript 代码 在浏览器中是如何被执行的呢?

首先我们输入一个 url 到渲染页面完成是如下这样的

(这里我只会说到 js/css 部分)

1. 首先浏览器只会下载一个单 html 文件

2. 其次 代码从左到右 从上到下依次执行 遇到了<link></link>标签会下载对应的 css 文件 遇到<script></script>标签会下载对应的 js 文件

3. 下载完了之后就要进行代码对应的执行

## 下载完了之后就要进行代码对应的执行 在哪执行? 谁执行?

浏览器内核帮助我们解析 js 文件 经过浏览器内核解析后最终呈现出来我们所对应的网页了

现在活在大众眼中的浏览器内核应该只有 Blink 了,是 WebKit(苹果研发的内核)一个分支

浏览器内核指的是浏览器的排版引擎(layout engine)也称(browser engine) 页面渲染引擎(rendering engine)

## 浏览器渲染过程

1. 首先下载 html 文件之后 进行 html parser(html parser) 由浏览器内核帮助解析 浏览器内核中有一个模块叫(html parser) 将 html 标签转换为 dom 树
2. 如果这个过程中执行到 script 标签 其中包含着例如 document.createElementbyxxx 因为 js 代码可以对 dom 结构进行操作 也会将创建 or 操作的对应的 dom 添加到 dom 树中
3. 当执行到 style 标签时 css 也是会被解析的(css Parser) 转换成 style Rules
4. DOM tree + styles Rules 两者先结合 这一过程称为(Attachment)附加 之后生成一个新的东西叫 render tree
5. 之后 render tree 通过浏览器内置的 layout 布局模块 再对 render tree 进行操作 **究其原因是因为在不同屏幕中显示不一样**
6. 最终绘制(painting) 浏览器就可以对他进行一个展示(display)了

## js 代码由谁来执行?

高级语言都是需要进行转化为机器指令来执行的 同时我们编写的 js 代码最后都是交付给 cpu 执行的 但是 cpu 只认识自己的指令集 实际上是机器语言 才能背 cpu 执行

**所以我们需要 js 引擎帮助我们将 js 代码翻译成 cpu 指令来执行**

浏览器内核和 js 引擎的关系: 由 webkit 为例 浏览器内核(webkit) = js 引擎(jscore)+布局引擎(webcore)

我们只需要知道 V8 就行 没有 V8 就没有当今 js 强大的生态

为什么我们只需要知道 V8 引擎?

## V8
