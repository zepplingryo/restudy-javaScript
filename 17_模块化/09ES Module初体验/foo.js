/**
 * Uncaught SyntaxError: Cannot use import statement outside a module
 *
 * 报错事因为浏览器用普通解析js方式进行解析的
 */

export const name = "zepp";

console.log(1111);

export const sum = (x, y) => {
  console.log(x, y);
};
