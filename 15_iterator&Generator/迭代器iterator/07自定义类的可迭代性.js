class Classroom {
  constructor(address, name, student) {
    this.address = address;
    this.name = name;
    this.student = student;
  }

  entry(newStudents) {
    this.student.push(newStudents);
  }

  [Symbol.iterator] = function () {
    let index = 0;
    return {
      next: () => {
        return index < this.student.length
          ? { done: false, value: this.student[index++] }
          : { done: true, value: undefined };
      }, // 如果我们要提前终止迭代器 这个可以在这里坚挺
      return: () => {
        console.log("迭代器终止了");
        return { done: true, value: undefined };
      },
    };
  };
}

const classroom = new Classroom("add", "na", [1, 2, 3, 4]);
classroom.entry("5");

for (const item of classroom) {
  if (item === "3") break;
  console.log(item);
}
