/**
 * 1. 属性简写
 */

const name = "name";
const age = "age";

const obj = {
  // 属性简写
  name,
  age,
  // 方法简写
  fun() {
    return this.name;
  },
  // 不绑定this
  foo: () => {
    return this;
  },

  // 计算属性名
  [age + "123"]: "456",
};
