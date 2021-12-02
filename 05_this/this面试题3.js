var name = "window";

function Person(name) {
  this.name = name;
  this.foo1 = function () {
    console.log(this.name);
  };
  this.foo2 = () => console.log(this.name);
  this.foo3 = function () {
    return function () {
      console.log(this.name);
    };
  };
  this.foo4 = function () {
    return () => {
      console.log(this.name);
    };
  };
}

var perosn1 = new Person("person1");
var perosn2 = new Person("person2");

person1.foo1(); // person1
person1.foo1.call(person2); // person2
person1.foo2(); // window 这个我错了 foo2函数上层作用域是Person函数
person1.foo2.call(person2); // window 这个我错了 foo2函数上层作用域是Person函数
person1.foo3()(); // window
person1.foo3.call(person2)(); // person2 这个我也写错了 这个还是独立函数调用
person1.foo3().call(person2); // person2
person1.foo4()(); // window 这个我错了 person1
person1.foo4.call(person2)(); // person2
person1.foo4().call(person2); // window 这个我错了 person1
