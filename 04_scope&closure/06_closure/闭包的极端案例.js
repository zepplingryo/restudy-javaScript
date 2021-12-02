/**
 *
 */
function createArray() {
  var arr = new Array(1024 * 1024).fill(1);

  return function () {
    console.log(arr.length);
  };
}

var array = [];

for (var i = 0; i < 10; i++) {
  array.push(createArray()());
}

console.log(array);

array = null;
