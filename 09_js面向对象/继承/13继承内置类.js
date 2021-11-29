/**
 * 继承系统类
 *
 * js不常用 别的语言比较常用这些
 */
class _Array extends Array {
  firstItem() {
    return this[0];
  }

  lastItem() {
    return this[length - 1];
  }
}

const arr = new _Array(1, 2, 3);
console.log(arr.lastItem());
