/**
 * js万物皆对象的特点 使我们可以在全局环境下访问到this
 *
 * 浏览器中是window
 * node中是{}
 *
 * 因为node执行js文件是通过模块化方式进行执行的
 *
 * 首先这个模块需要加载编译过后(先经过Moudel函数)
 * 之后放到一个函数(这个函数叫 compiledWrapper)中进行执行
 * 但是这个函数apply了一下改变了当前的this指向(我想可能是node中没有window那些web api的原因)
 * 这个函数只是bind了一个({})空对象 在源码中是具体的这个 this.exports={}
 *
 */
console.log(this === window);
