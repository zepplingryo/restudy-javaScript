// 11_转化的

"use strict"; // 1:41:22

function _typeof(obj) {
  "@babel/helpers - typeof";
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj &&
        typeof Symbol === "function" &&
        obj.constructor === Symbol &&
        obj !== Symbol.prototype
        ? "symbol"
        : typeof obj;
    };
  }
  return _typeof(obj);
}

function _get() {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    _get = Reflect.get;
  } else {
    _get = function _get(target, property, receiver) {
      var base = _superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);
      if (desc.get) {
        return desc.get.call(arguments.length < 3 ? target : receiver);
      }
      return desc.value;
    };
  }
  return _get.apply(this, arguments);
}

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = _getPrototypeOf(object);
    if (object === null) break;
  }
  return object;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf =
    Object.setPrototypeOf ||
    function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
  return _setPrototypeOf(o, p);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

// 关于这里 /*#__PURE__*/ 这个表示是纯的意思 这个函数没有副作用
// 好像懂了 纯函数没有副作用意味着没有依赖外界(副作用) 只是自己内部改变 也就变的可以删除
// 在我们通过webpack压缩时会用到一种技术叫 tree-shaking 摇摇树
// 如果当前下面的IIEF没有执行那webpack会帮我们自动在代码中删除这段代码 数亿一种优化

var P = /*#__PURE__*/ (function () {
  function P(name, age) {
    _classCallCheck(this, P);

    this.name = name;
    this.age = age;
  }

  _createClass(
    P,
    [
      {
        key: "studying",
        value: function studying() {
          return this.name + "studying";
        },
      },
      {
        key: "handle",
        value: function handle() {
          console.log("处理逻辑");
        },
      },
    ],
    [
      {
        key: "staticMethods",
        value: function staticMethods() {
          console.log("子类调用父类静态方法");
        },
      },
    ]
  );

  return P;
})();

var C = /*#__PURE__*/ (function (_P) {
  _inherits(C, _P);

  var _super = _createSuper(C);

  function C(name, age, son) {
    var _this;

    _classCallCheck(this, C);

    _this = _super.call(this, name, age);
    _this.son = son;
    return _this;
  } // 父类方法重写

  _createClass(
    C,
    [
      {
        key: "studying",
        value: function studying() {
          return this.name + "coding";
        },
      },
      {
        key: "handle",
        value: function handle() {
          // 调用父类的方法 复用父类中的处理逻辑
          _get(_getPrototypeOf(C.prototype), "handle", this).call(this);

          console.log("123");
        }, // 静态方法的重写
      },
    ],
    [
      {
        key: "staticMethods",
        value: function staticMethods() {
          _get(_getPrototypeOf(C), "staticMethods", this).call(this);

          console.log("456");
        },
      },
    ]
  );

  return C;
})(P);
