var obj = { _age: 18 };

Object.defineProperties(obj, {
  name: {
    configurable: true,
    enumerable: true,
    writable: true,
    value: "zepp",
  },
  age: {
    configurable: false,
    enumerable: false,
    get: function () {
      return this._age;
    },
    set: function (v) {
      return (this._age = v);
    },
  },
});

console.log(obj);
