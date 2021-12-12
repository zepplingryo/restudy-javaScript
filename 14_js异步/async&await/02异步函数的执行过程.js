/**
 * 普通函数与异步函数的区别
 *
 * 异步函数的返回值一定是一个promise返回值
 *
 * 异步函数会在函数体中return具体的值之后执行
 *
 * 如果没返回就按照函数的默认返回undfined继续执行
 *
 * 如果函数内部return 实现thenable对象 则按照thenable对象来判断 (如果是reject就需要捕获异常)
 *
 * 如果返回的是一个promsie 是按照这个函数进行判断的
 */

const bar = async () => {
  console.log(4);
  // return {
  //   then: function (resolve, reject) {
  //     resolve("thenable返回值");
  //   },
  // };

  return new Promise((resolve, reject) => {
    resolve("lalala1");
  });
};

const p1 = bar();

//
p1.then().then((res) => {
  console.log("会在return后执行, res的结果就是 return的结果", res);
});
