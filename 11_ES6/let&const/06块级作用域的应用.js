const btn = document.getElementsByTagName("button");

for (var i = 0; i < btn.length; i++) {
  // for块 没有形成作用域
  btn[i].onclick = function () {
    console.log(i);
  };
}

for (let j = 0; j < btn.length; j++) {
  btn[j].onclick = function () {
    console.log(j);
  };
}

for (var k = 0; k < btn.length; k++) {
  ((k) => {
    btn[k].onclick = function () {
      console.log(k);
    };
  })(k);
}
