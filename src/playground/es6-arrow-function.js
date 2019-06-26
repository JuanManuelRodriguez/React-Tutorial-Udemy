const square = function (x){
  return x*x;
}
const squareArrow = (x) => {
  return x*x;
};

const squareArrow2 = (x) => x*x;
console.log(square(8));
console.log(squareArrow(8));
console.log(squareArrow2(8));

const myName = 'Jonas Manuelis';
const getfirstName = (fullName) => {
  return fullName.split(' ')[0];
}
console.log(getfirstName(myName));

const getfirstName2 = (fullName) => fullName.split(' ')[0];
console.log(getfirstName2(myName));
