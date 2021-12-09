const sum = (num1, num2) => num1 + num2;

const name = "zeppLin";

/**
 * 首先第一种导出办法就是 直接放入到module.exports对象中
 */
module.exports.name = name;
module.exports.name = "zeppLin";

/**
 * 导出对象
 */
module.exports = {
  sum,
  name,
};
