// try {
// } catch (error) {
// } finally {
// }

const promise = new Promise((resolve, reject) => {
  resolve("resolve");
});

promise
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally((err) => {
    // 这个是绝对会执行的
    console.log("一些清楚工作");
  });
