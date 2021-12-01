const age = "12";
const name = "zepp";
const info = `${name} ${age}`;

const info2 = `原来${info} 现在${name} ${age + 2}`;

const count = (age) => {
  return age * 2;
};

const info3 = `${name} ${count(age)}`;
console.log(info3);

/**
 * 标签模版字符串
 * 这个案例中第一个参数仍然是模版字符串中整个字符串 只是被切成多块 放到一个数组中
 * 第二三个参数是模版字符串
 */
const foo = (m, n, o) => {
  console.log(m, "***", n, o);
};

const num = 20;
foo`zepp${1}Lin${num}Gryo`;

const str = `${name} ${num}`;
console.log(str);

/**
 * react中styled-components 就是用到标签模版字符串
 * 这里面的${}代码就是动态插入一个值
 *
 * 而这里的.content其实就是递归寻找react组件中的类名最后附加样式
 */
const color = "red";
import styled from "styled-components";
export const Wrapper = styled.div`
  .content {
    height: 200px;
    color: ${color};
  }
`;
