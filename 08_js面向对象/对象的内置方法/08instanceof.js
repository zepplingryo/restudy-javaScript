class P {}

const p = new P();

class C extends P {}

const c = new C();

console.log(C instanceof P); // false 我真麻了 为啥啊

console.log(C.prototype); //P{}

console.log(C.prototype === P);

console.log(C instanceof Object); // true
console.log(c instanceof P); // true

/**
 * isPrototypeOf
 * 用于检测某个对象 是否出现在某个实例对象的原型链
 */
