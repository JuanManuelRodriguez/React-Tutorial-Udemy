'use strict';

//argumentes object - no longer bound with arrow functions

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

var add2 = function add2(a, b) {
  //console.log(arguments);
  return a + b;
};
console.log(add2(55, 1, 1001));

//this keyword - no longer bound

var user = {
  name: 'Jonas',
  cities: ['Philadelphia', 'Mar del Plata', 'Tandil'],
  printPlavesLived: function printPlavesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      _this.name + ' has lived in ' + city;
    });
  }
};
console.log(user.printPlavesLived());

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      number * _this2.multiplyBy;
    });
  }
};
console.log('nada');
console.log('multiply', multiplier.multiply());
