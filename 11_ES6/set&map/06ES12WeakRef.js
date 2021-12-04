/**
 *
 * finalizationRegistry对象可以让你在对象被垃圾回收时请求一个回调
 *
 * finalizationRegister提供了这样一个方法 当一个在注册表中注册地对象被回收时
 *
 * 请求在某个时间点上调用一个清理回调 (清理回调时有些被称为finalizer)
 *
 * 可以通过调用register方法 注册任何你想要清理回调的对象 传入该对象和所含的值
 */

const finalizationRegistry = new FinalizationRegistry((val) => {
  console.log("注册在finalRegistry的对象 某一个被销毁", val);
});

let obj = { name: "zepplingryo" };

// let info = new WeakSet();

// 添加一个弱引用
// info.add(obj);

let info = new WeakRef(obj);

finalizationRegistry.register(obj, "val");

// 获取原对象 也可以获取其中的属性 看看有没有被销毁没销毁就是属性 销毁就是undfined
console.log(info.deref().name);

// obj = null;

setTimeout(() => {
  console.log(info.deref().name);
}, 5000);
