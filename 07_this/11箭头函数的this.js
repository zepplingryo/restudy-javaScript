/**
 * 剪头函数
 *
 * 箭头函数不会绑定this arguments属性
 *
 * 箭头函数不能作为构造函数来使用因为没有constrouctor
 *
 * 箭头函数可以隐式return
 *
 * 箭头函数如果参数只有一个 ()可以省略
 *
 * 如果函数执行体只有一行代码{}也可以省略
 *
 *
 */

var foo = (...args) => {
  console.log(args);
  console.log(this); // window node是{}
};

foo(1, 2, 3, 4, 4);

[1, 2, 3, 4].forEach((item, item, array) => {});

const bar = (name) => ({ name });

const a = bar(1);
console.log(a);

/**
 * 箭头函数不使用this的四种保准规则(意味着剪头函数不绑定this) 而是根据外层作用域来决定this
 */

// 箭头函数this指向
var name = "why";
var foo = () => {
  console.log(this);
};
var obj = { foo };

foo();
obj.foo();
foo.call("abc");

// 应用场景 以前解决问题的办法
var obj = {
  data: [],
  getData: function () {
    var self = this; // 利用闭包 存储obj的this
    setTimeout(function () {
      // setTimeout里面this默认是全局的
      var res = [1, 2, 3, 4];
      self.data = res;
    });
  },
};

var obj = {
  data: [],
  // 去找上层作用域中绑定的this
  getData: function () {
    setTimeout(() => {
      var res = [1, 2, 3, 4];
      this.data = res;
    });
  },
};
