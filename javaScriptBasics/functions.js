// Functions let you group a series of statements together to perform
// some task. Once a function is created, it can be reused over
// and over in your code. If you find yourself repeating statements in your code,
// then a function may be the answer to avoid that repetition.
// DRY - Don't repeat yourself

// Functions in javascript are first class objects...They can have properties
// and methods just like any other object. Where they differ, is in the fact
// that functions can be called.

sayHi();
sayHiWithParameter("Jacob");

function sayHi() {
  console.log("Hi there");
}

function sayHiWithParameter(name) {
  console.log(`Hello there, ${name}`);
}

// sayHi();
// sayHiWithParameter("Jacob");

function addThreeNumbers(a, b, c) {
  return a + b + c;
}

let result = addThreeNumbers(5, 5, 5)
console.log(result);

function sayHello(firstName, lastName) {
  return `Hello there, ${firstName} ${lastName}`
}

let greeting = sayHello("Jacob", "Landman")
console.log(greeting);

// Function expressions - assign anonymous (unnamed) function to a variable

// Error - function expressions must be declared before using them
// console.log(sayGreeting());

let sayGreeting = function() {
  return 'Well, Hello there';
}

console.log(sayGreeting());

// IIFE - Immediately Invoked Function Expression
let sayGreeting2 = (function() {
  return `Hi, how are you?`;
}());
console.log(sayGreeting2);

let sayGreeting3 = (function(firstName, lastName) {
  return `Hi, ${firstName} ${lastName}`
}("Jacob", "Landman"))
console.log(sayGreeting3);

// With ES6, we now have a new syntax for functions. They are called 'Arrow functions',
// or 'Fat Arrow functions'. Arrow functions do not bind 'this' =>

// let speakNames = firstName => `The names are: ${firstName}`;
let speakNames = (firstName, secondName) => `The names are: ${firstName} and ${secondName}`;
console.log(speakNames("Jack", "Jill"));
