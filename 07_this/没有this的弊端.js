//从某些角度而言 开发中没有this也是可以的
var obj = {
  name: "zepp",
  say: function () {
    console.log(obj.name + "say");
  },
};
obj.say();

// 但是这种方法没有实现复用 同时编码变得非常不方便
var info = {
  name: "zepp",
  say: function () {
    console.log(info.name + "say");
  },
};
info.say();
