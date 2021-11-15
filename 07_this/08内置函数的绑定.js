/**
 * setTimeout
 */
setTimeout(function () {
  console.log(this); // node环境下打印的是Timeout对象 浏览器是window
}, 200);

/**
 * dom上监听点击
 */
function com() {
  const box = document.createElement("div");

  box.onclick = function () {
    console.log("被电击了");
    console.log(this);
    // 就是当前box emmmmm可以这么理解当前box就是一个对象
    //把它当作对象.方法调用肯定是当前对象调用的 (隐式绑定)
  };

  box.addEventListener("click", function (e) {
    console.log(this);
  });

  return (
    <>
      <div class="box"></div>
    </>
  );
}

/**
 * 数组的高阶函数
 *
 * 例如foreach可以传第二个参数 aaa
 *
 * 传入以后就改变了this的指向 就指向aaa了
 *
 * 有些函数就不行了
 */
var names = ["abc", "vnc", "bxa"];
names.forEach(function (item) {
  console.log(this); // window
  console.log(item); // 每项
}, "aaa");
