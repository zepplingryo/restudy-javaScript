const obj = { name: "zepp" };

const map = new Map();
map.set(obj, "aaa");

const weak = new WeakMap();
weak.set(obj, "aaa");

// 不能使用基本类型
// weakMap.set(1, "ccc");

console.log(weak.get(obj));
console.log(weak.has(obj));
console.log(weak.delete(obj));

/**
 * 应用场景 (Vue3响应式原理) 11533
 */
