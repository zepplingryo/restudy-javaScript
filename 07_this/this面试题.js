/**
 *
 */

var name = "angular";
var person = {
  name: "person",
  sayName: function () {
    console.log(this.name);
  },
};

function sayName() {
  var sss = person.sayName;

  sss(); // angular

  person.sayName(); // person

  (b = person.sayName)(); // angular
}

sayName();

/**
 *
 */
