/**
 * js语法应用 没有关键字来实现
 *
 * js没有专门的实现混入
 *
 * 如下所示: 学生继承人但是也想用跑步的人的方法
 */

class Person {}

class Runner {
  running() {
    return "run~";
  }
}

//js中类只能有一个父继承
class Student extends Person {}

function mixin1(BaseClass) {
  // 代理模式
  return class extends BaseClass {
    running() {
      console.log("run");
    }
  };
}
function mixin2(BaseClass) {
  // 代理模式
  return class extends BaseClass {
    eating() {
      console.log("eat");
    }
  };
}

var A = mixin2(mixin1(Student));
const a = new A();
a.eating();
a.running();
