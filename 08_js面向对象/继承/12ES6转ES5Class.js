// class P {} 转化的代码

("use strict");

function _classCallCheck(instance, Constructor) {
  // this instanceof Person
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

var Person = function Person() {
  // 不让我们随随便便就用乱调Person函数 绝对方式绑到 new Person()
  _classCallCheck(this, Person);
};

// 如果我们调用Person 就会检查当前实例是否创建出来的
Person();
