var name = "test";

var person1 = {
  name: "John1",
  foo1: function () {
    console.log(this.name);
  },
  foo2: () => console.log(this.name),
  foo3: function () {
    return function () {
      console.log(this.name);
    };
  },
  foo4: function () {
    return () => {
      console.log(this.name);
    };
  },
};

var perosn2 = { name: "John2" };

person1.foo1(); // John1 隐式绑定
person1.foo1.call(person2); // John2 显式绑定
person1.foo2(); // test
person1.foo2.call(person2); // ???  箭头函数可不管我绑定不绑定 都是去上层作用域中查找
person1.foo3()(); // John1 这个答错了 返回的函数没有调用主体(一个独立的函数调用)所以还是指向window所以是test
person1.foo3.call(person2)(); //  返回的函数没有调用主体(一个独立的函数调用)所以还是指向window所以是test
person1.foo3().call(person2); // John2 最终调用的返回函数式 使用的是显式绑定
person1.foo4()(); // test 这个我写错了 是person1 因为箭头函数没有this 得从上层作用域里面找就是person1
person1.foo4.call(person2)(); // ??? person2 上层作用域被显示绑定了一个person2
person1.foo4().call(person2); // ??? 依然是找到person1的
