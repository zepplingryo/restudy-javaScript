/**
 *
 */

function* foo() {
  console.log("start");
  const v1 = 1;
  yield v1;

  const v2 = 1;
  yield v2;

  const v3 = 1;
  yield v3;
}

const gen = foo();

console.log(gen.next());
console.log(gen.return(111));
console.log(gen.next());
console.log(gen.next());
