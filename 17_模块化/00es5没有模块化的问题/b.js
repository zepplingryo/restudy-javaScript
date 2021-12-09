var b = (function () {
  var name = "1";
  var age = "2";
  var xxx = "r";

  // 把想要暴露出去的变量返回出去 然后我var 了一个b 之后就能通过b.x进行访问
  return {
    name: name,
    age,
    xxx,
  };
})();
