//argumentes object - no longer bound with arrow functions

const add = function (a,b){
  //console.log(arguments);
  return a+b;
};
console.log(add(55,1,1001));

const add2 = (a,b) => {
  //console.log(arguments);
  return a+b;
};
console.log(add2(55,1,1001));

//this keyword - no longer bound

const user = {
  name: 'Jonas',
  cities: ['Philadelphia', 'Mar del Plata', 'Tandil'],
  printPlavesLived(){
    return this.cities.map((city) => this.name+' has lived in '+ city);
  }
};
console.log(user.printPlavesLived());

const multiplier = {
  numbers: [1,2,3],
  multiplyBy: 2,
  multiply(){
    return this.numbers.map((number) => number * this.multiplyBy);
  }
}
console.log('nada');
console.log('multiply',multiplier.multiply());