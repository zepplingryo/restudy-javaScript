/**
 * 探讨一下如下代码如何在内存中执行的
 */

function foo() {
  function bar() {
    console.log("bar");
  }

  return bar;
}

var fn = foo();

fn();
