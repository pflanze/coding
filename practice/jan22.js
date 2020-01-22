// old syntax ES5

function add(x, y) {
  return x, y;
}
const sum1 = function(x, y) {
  return x, y;
};
// my variable will be the result of this function

// new syntax ES6

// callback is I am calling another function to do something for me
function callback() {
  return "Danny";
}
const sum = (x, y) => {
  return x + y;
  //return result;
};
sum(5, 4);

//CALLBACK
const names = ["Irie", "Danny", "Anna", "Pam"];
//const newArr = names.map(name => name[0] == "0");
const newArr = names.map((name, i) => name[0] == "0");
//console.log(index);

console.log(newArr);

/*names.forEach((name.index) => name == "Danny")) {

}*/

// let result = names.forEach;

// es6
names.forEach((name, index) => console.log(name + "index num =" + index));

// old way
for (let i = 0; i < names.length; i++) {
  console.log(names[i] + "index num =" + i);
}

// every function has a parameter, with .map I am passing another function to the parameter
// the first parameter is the value / the index  and the second parameter is the counter

// CALL BACK
function one() {
  return two();
}

function two() {
  return one();
}

// call STACK

/**
 * It’s a data structure which records the function calls, basically where in the program we are.
 * If we call a function to execute , we push something on to the stack, and when we return from a function,
 *  we pop off the top of the stack.
 */

function first(callback) {
  return callback;
}
function callback(callTwo) {
  let x = 9;
  return callTwo;
}
function callTwo() {
  let we = true;
  return "Hi";
}

console.log(first(callback(callTwo())));
// every function need help from another function

/**
 * Javascript is a single threaded and single concurrent language,
 * meaning it can handle one task at a time or a piece of code at a time.
 * It has a single call stack which along with other parts like heap,
 *  queue constitutes the Javascript Concurrency Model (implemented inside of V8).
 *
 *
 */

// Array.reduce()

//const reducer = (acc,cur) => acc + value;
const numArr = [1, 3, 4, 6, 7];
const reducer = (acc, cur) => acc + cur; // acc = 0 cur = i
console.log(numArr.reduce(reducer, 100)); // putting number we add value as a starter of my accumulator
// if I want to start my accumulator with a value i need to put number , if not it starts from zero

// our best bff
function display(str) {
  console.log(str);
}
const print = str => console.log(str);
print("HELOOOOO Irie");

// FUNCTION
// function <name>(<parameter>){ ...}
function yellow(val, val2) {
  const x = 100;
  const y = 200;
  console.log(x / y + val + val2);
}
yellow(2, 3);

// second function

const AliPets = ["Dyson", "Sofi"];

const pink = (name, array, age = 10) => {
  console.log(
    `Hi ${name}, you are very young ${age}, you have nice pets ${array} `
  );
};
pink("Ali", AliPets, 20);
pink("Olga", ["Dyson", "Sofi"]);

// the name of the parameter does not matter , but the order is what I plan
// parameters are variables used inside the function and its value comes when I call the function
// GLOBAL AND LOCAL SCOPE
