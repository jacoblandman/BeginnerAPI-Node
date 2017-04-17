// Arrays are like a list. They are multiple values stored inside a single variable.
// Arrays are declared with square brackets.
let grades = [92, 98, 84, 87, 93];

console.log(`My first grade was ${grades[0]}`);

let myStuff = ['baseball', 'football', 32, true, 'Magic Mouse'];

console.log(myStuff.length);

// Array Methods
// POP - takes last item out of the array
let poppedValue = myStuff.pop();

console.log(poppedValue);
console.log(myStuff);

// PUSH - puts an item at the end of the array
myStuff.push(poppedValue);
console.log(myStuff);

console.log(grades);
grades.push(79, 92, 84);
console.log(grades);

// SHIFT - takes the first item out of the array
let shiftedValue = myStuff.shift();
console.log(shiftedValue);
console.log(myStuff);

// UNSHIFT - puts item at the front of the array
myStuff.unshift(shiftedValue);
console.log(myStuff);

// CONCAT
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let array3 = [7, 8, 9];

let concatArray = array1.concat(array2, array3);
console.log(concatArray);

// REVERSE
let reversedArray = concatArray.reverse();
console.log(reversedArray);

// SORT
let statesArray = ['Missouri', 'Arkansas', 'Arizona', 'Mississippi', 'Alabama', 'Texas', 'Vermont', 'California']
let sortedStatesArray = statesArray.sort();

console.log(statesArray);

let numericArray = [233, 3, 83, 2399, 23, 5, 8];
let sortedNumericArray = numericArray.sort((a, b) => b - a)
// let sortedNumericArray = numericArray.sort(function(a, b) {
//   return a - b
// })

console.log(sortedNumericArray);

// SLICE
// slice allows you to 'pull out' a part of an array. It takes two values, the
// start index and the end index. The method will return all values from the start
// index up to, but NOT INCLUDING the end index.
// leave off the end index if you want to go to the end of the array

let slicedStates = sortedStatesArray.slice(6)
console.log(slicedStates);
