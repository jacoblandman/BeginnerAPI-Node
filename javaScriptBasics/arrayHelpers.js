// // Array Helper methods
//
// let array = [32, 49, 54, 58];
//
// console.log('FOR LOOP========');
// for (var x = 0; x< array.length; x++) {
//   console.log(array[x]);
// }
//
// // FOR EACH
// console.log('FOR EACH======');
// array.forEach(function(value) {
//   console.log(value);
// });
//
// // USING A FAT ARROW
// console.log('FOR EACH FAT ARROW=====');
// array.forEach((value) => console.log(value));
//
// console.log('GRADES=====');
// let grades = [98, 87, 82, 74, 89, 87];
// let sum = 0;
//
// grades.forEach(grade => sum += grade);
// let average = sum / grades.length
// console.log(`Our average is ${average.toFixed(1)}`);

// Map Helper
// iterate through an array and perform some operation on each element.
// One of the most commonly used helpers.
let array = [1, 2, 3, 4, 5];
let addOne = [];

for (let x = 0; x< array.length; x++) {
  addOne.push(array[x] + 1);
}

console.log(addOne);

// WITH MAP Helper
// let addOneMap = array.map(function(value) {
//   return value + 1;
// });

// USING FAT ARROW
let addOneMap = array.map(value => value + 1);
console.log(addOneMap);

let vehicles = [
  { id: 1, make: 'Dodge', model: 'Ram 1500', year: '2011', is4WD: true },
  { id: 2, make: 'Dodge', model: 'Charger R/T', year: '2015', is4WD: false },
  { id: 3, make: 'Nissan', model: 'Rogue', year: '2016', is4WD: false }
]

let truckDriver = {
  vehicleId: 2,
  name: 'Jacob'
};

let models = vehicles.map(vehicle => vehicle.model);
console.log(models);

// Filter - finds all the elements that match the criteria
// let filteredVehicles = vehicles.filter(vehicle => vehicle.make === 'Dodge')
// console.log(filteredVehicles);
//
// // FIND - finds the first elemetn that matches the criteria
// let vehicle = vehicles.find(function(vehicle) {
//   return vehicle.make === 'Dodge'
// });
// console.log(vehicle);

function driverForVehicle(vehicles, driver) {
  return vehicles.find(vehicle => vehicle.id === driver.vehicleId)
}

console.log(driverForVehicle(vehicles, truckDriver));

// EVERY and SOME quick look
// with 'every', we can take a look at an array and see if EVERY element meets
// some condition

// let areAll4WD = vehicles.every(function(vehicle) {
//   return vehicle.is4WD === false;
// });

// not all of the elements are 4WD
let areAll4WD = vehicles.every(vehicle => vehicle.is4WD === false)
console.log(areAll4WD);

// some of the elements in the array are 4WD
// let areSome4WD = vehicles.some(function(vehicle) {
//   return vehicle.is4WD === false;
// });
let areSome4WD = vehicles.some(vehicle => vehicle.is4WD === false)
console.log(areSome4WD)

// REDUCE
// before REDUCE
let grades = [98, 87, 82, 74, 89, 87];

let sum = 0;

for (let x = 0; x < grades.length; x++) {
  sum += grades[x]
}
console.log(`sum equals: ${sum}`);
console.log(`are average is: ${(sum / grades.length).toFixed(1)}`);

// with REDUCE
// start sum with 0 by putting , 0 after the end curly brace
let total = grades.reduce(function(sum, grade) {
  return sum + grade
}, 0);
console.log(`total = ${total}`);
console.log(`Our average is ${(total / grades.length).toFixed(1)}`);
