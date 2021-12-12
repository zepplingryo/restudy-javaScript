const it = (arr) => {
  let index = 0;
  return {
    next: function () {
      return index < arr.length
        ? { done: false, value: arr[index++] }
        : { done: true, value: undefined };
    },
  };
};

const arr1 = [1, 2];
const arr2 = ["a", "b", "c"];

const arrit1 = it(arr1);
const arrit2 = it(arr2);

console.log(arrit1.next().value);
console.log(arrit1.next());
console.log(arrit1.next());
console.log(arrit1.next());
console.log(arrit1.next().value);
