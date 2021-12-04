/**
 * es11之前最大的安全数
 */
let maxNum = Number.MAX_SAFE_INTEGER;
console.log(maxNum);

// 下面这俩相等
// console.log(maxNum + 1);
// console.log(maxNum + 2);

// js中最大数是 9007199254740991

// ES11之后表示比上面最大数还大的数字可以后面接一个n
const big = 9007199254740991000000000000000n;
console.log(big);

// 但是由于类型不匹配所以说我们就需要用bigInt的那套规则去操作他
// 究其原因是因为bigint和number之间没有隐式转化的
console.log(big + 10n);

const num = 100000;
console.log(big + BigInt(num));
