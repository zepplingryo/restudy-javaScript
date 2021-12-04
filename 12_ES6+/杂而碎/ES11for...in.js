/**
 * 这个就是一个标准
 */

const obj = { name: "zepplingryo", type: "object", age: 1 };

// 之前有些浏览器是实现的是value 现在全都改回来了都变成 key了
// 之前没有被标准化...
for (const item in obj) console.log(item);
