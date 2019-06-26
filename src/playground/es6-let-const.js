var nameVar = 'Juan';
var nameVar = 'Manuel';
console.log('nameVar', nameVar);

let nameLet = 'Jet';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Jonas';
console.log('nameConst', nameConst);

//block scoping

const fullName = 'Jonas Rodrigas';
let firstName;

if(fullName){
  firstName = fullName.split(' ')[0];
  console.log(firstName);
}

console.log(firstName);