/**
 * ?.
 *
 * 可选链操作符是ES11中新增的一个特性
 * 主要作用是让我们的代码在进行null和undfined判断时 更加清晰和简洁
 */

const obj = {
  name: "zeppLinGryo",
  love: {
    name: "jone",
  },
};

// 以前:
if (info.love && info.love.grandchildren) {
  // doxxx....
}

// 下面
console.log(obj?.love.grandchildren);

setTimeout(() => {
  obj.love.grandchildren = { name: "joojoo" };
}, 100);

setTimeout(() => {
  console.log(obj.love.grandchildren);
}, 200);
