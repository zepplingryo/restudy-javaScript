// 导出和生命结合为
export const barfun = (x) => {
  return x;
};

export const name = "zepp";

export class Person {}

/**
 * 导出和声明分开
 */
const age = "1";
const fn = (x) => {
  return x;
};
class O {}

// 这里就不是对象了 而是一个标识符
export { age };

/**
 * 导出时起别名
 */
export { O as Obj };

/**
 * 管道导出
 */
export { fn } from "./bar";
