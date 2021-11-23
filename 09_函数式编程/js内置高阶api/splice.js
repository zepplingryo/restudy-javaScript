/**
 * splice 这个api就不是一个纯函数 因为他对原数组进行修改
 */
var arr = [1, 2, 3, 4];

var arr1 = arr.slice(0, 2);
console.log(arr);
console.log(arr1);

var arr2 = arr.splice(0, 2);
console.log(arr);
console.log(arr2);

/**
 * 在真实场景下如果我们以后还想要对原数组进行操作
 * 最好的方式是使用slice方法 以免导致副作用影响
 */
