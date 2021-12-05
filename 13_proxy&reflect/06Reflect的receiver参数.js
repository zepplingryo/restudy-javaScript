/**
 * Receiver作用:
 *
 * 下面是两套get set
 *
 * 不管怎么访问 最终都会访问到this中
 *
 * 因为_name是私有的 我下面的代理对象getset都会经过this 然后._name 然后就不走代理对象的get set方法了
 *
 * recevier就是来改变这一现状的
 *
 * recevier如果传入对应方法中 就可以改变原对象方法中的this 而现在的this就变成了代理对象的this
 */
const obj = {
  _name: "zepp",
  get name() {
    return this._name;
  },
  set name(val) {
    this._name = val;
  },
};

const { set, get } = Reflect;

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // console.log(receiver); 这个其实就是创建出来的代理对象 { _name: 'zeppLin', name: [Getter/Setter] }
    console.log(objProxy === receiver);
    return get(target, key, receiver);
  },
  set(target, key, newVal, receiver) {
    console.log("set");
    set(target, key, newVal, receiver);
  },
});

objProxy.name = "zeppLin";
console.log(objProxy.name);
