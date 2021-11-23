/**
 * 这个函数就是一个纯函数
 */

Array.prototype._slice = function (start, end) {
  var arr = this;

  var newArray = [];

  for (var i = start; i < end; i++) {
    newArray.push(arr[i]);
  }

  return newArray;
};

// 这里结合arguments一起来看
var newArray = Array.prototype._slice.call([1, 2, 3], 1, 3);
console.log(newArray);
