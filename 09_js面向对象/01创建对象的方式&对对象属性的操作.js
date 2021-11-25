// 构造函数
var obj = new Object();

obj.name = "foo";

// 子面量
var obj = { name: "foo", age: "1", name2: "bar" };

// 读
obj.name;

// 写
obj.name = "bar";

// 删除
delete obj.name;

console.log(obj);
