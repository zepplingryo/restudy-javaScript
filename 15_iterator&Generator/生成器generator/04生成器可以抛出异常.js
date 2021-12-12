function* foo() {
  console.log("start");
  const v1 = 1;
  try {
    yield v1;
  } catch (error) {
    // 捕获异常
    console.log(error);
  }

  const v2 = 1;
  yield v2;

  const v3 = 1;
  yield v3;
}

const gen = foo();

console.log(gen.next());

// 同理return
console.log(gen.throw(111));
console.log(gen.next());
console.log(gen.next());
