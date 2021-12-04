/**
 * 判断数组里面包含哪个元素
 */
const arr1 = [1, 2, 3, 4, 5, 6, 7, 8, NaN];

// es7以前
console.log(arr1.indexOf(7) !== -1);

// now
console.log(arr1.includes(3));

// 还可以非常智能化的告诉includes从第几个索引值开始包含 我这里是从第六个索引值开始判断
console.log(arr1.includes(3, 6));

// includes vs indexOf

console.log(arr1.includes(NaN));
console.log(arr1.indexOf(NaN));
