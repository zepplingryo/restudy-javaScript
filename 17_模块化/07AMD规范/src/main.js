// 注册模块
require.config({
  paths: {
    foo: "./foo",
  },
});

// 加载模块
require(["foo"], (foo) => {
  console.log("foo", foo);
});

// u1s1真的别扭
