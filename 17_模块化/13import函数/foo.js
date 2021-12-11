/**
 * 这个是同步代码 创建 计算 求值 实例话
 *
 * 这样我们才能访问到
 */
import qwertyuiopasdfghjklzxcvbnm from "./bar.js";

console.log("后续代码都是不会运行的");

import React, { memo, useState } from "./baz.js";

/**
 * 其实还有import函数
 *
 * 这个代码下载解析不归js来管 只有运行代码是js解释器管
 */
import("./baz.js").then((res) => {
  console.log("加载成功", res);
});

/**
 * ES11 dynamic import(动态导入)
 */
console.log(import.meta); // 当前文件所在路径
