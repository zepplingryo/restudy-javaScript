const personObj = {
  running: function () {
    console.log("runing");
  },
};

function create(name) {
  const stu = Object.create(personObj);
  stu.name = name;

  stu.studying = function () {
    console.log("studying");
  };
}

const obj1 = createStudent("111");

/**
 * 工厂模式的弊端这里也不少
 *
 * 例如子创建函数每个函数里面都有studying方法
 * 没有一个明确的类型(Student类)
 */
