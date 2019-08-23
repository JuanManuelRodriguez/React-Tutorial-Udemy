console.log('utils.js is running');

export const square = (x)=> x * x; // inline export
export const add = (a, b)=> a + b;
const subtract = (a, b)=> a - b;
export default subtract;
// esport default (a, b)=> a - b;
// export {square, add, substract as default}; // named export
