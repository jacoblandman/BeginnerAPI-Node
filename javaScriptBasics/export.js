// Can also export this way
// module.exports.myVar = 942;
// module.exports.func1 = () => {
//   console.log('Hello from func1');
// }

export let myVar = 942;
export let func1 = () => {
  console.log('Hello from func1');
}
export let func2 = () => {
  console.log('Hello from func2');
}

// old way of exporting - not with ES6
// module.exports = {
//   myVar: myVariable,
//   func1: func1,
//   func2: func2
// };

// module.exports.myVar = myVariable;
// module.exports.func1 = func1;
// module.exports.func2 = func2;
