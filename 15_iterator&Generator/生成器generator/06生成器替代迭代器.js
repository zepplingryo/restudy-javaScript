// // 迭代器
// const iterator = (arr) => {
//   let index = 0;
//   return {
//     next: function () {
//       arr.length > index
//         ? { done: false, value: arr[index++] }
//         : { done: true, value: undefined };
//     },
//   };
// };

// const array = [1, 2];

// const arrayIt = iterator(array);

// console.log(arrayIt.next());
// console.log(arrayIt.next());
// console.log(arrayIt.next());

// 生成器 反正核心就是可迭代对象
function* itArr(arr) {
  // 第一种写法
  // yield "1";
  // yield "2";
  // 迭代器写法
  // for (const item of arr) {
  //   yield item;
  // }

  // 跟上一个可迭代对象
  yield* arr;
}

const arr = [1, 2];

const arra = itArr(arr);

console.log(arra.next());
console.log(arra.next());
console.log(arra.next());

/**
 * 创建一个函数 这个函数可以叠戴一个范围内的数字
 */
// function createRange(start, end) {
//   let index = start;
//   return {
//     next: function () {
//       if (index < end) {
//         return { done: true, value: index++ };
//       } else {
//         return { done: true, value: undefined };
//       }
//     },
//   };
// }

// const range = createRange(1, 5);
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());

// function* createRange(start, end) {
//   let index = start;
//   while (index++ < end) {
//     yield index;
//   }
// }

// const range = createRange(1, 5);
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());
// console.log(range.next());

/**
 *
 *
 */
class Classroom {
  constructor(address, name, student) {
    this.address = address;
    this.name = name;
    this.student = student;
  }

  entry(newStudents) {
    this.student.push(newStudents);
  }

  [Symbol.iterator] = function* () {
    while (this.student.pop() != null) {
      yield this.student;
    }
  };

  // *[Symbol.iterator] = function* () {
  //   while (this.student.pop() != null) {
  //     yield this.student;
  //   }
  // };
}

const classroom = new Classroom("add", "na", [1, 2, 3, 4]);
classroom.entry("5");

for (const item of classroom) {
  console.log(item);
}
