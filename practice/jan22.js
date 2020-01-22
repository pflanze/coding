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
// call back hell - not preferable for ES6 Syntax
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

// New Exercise
// ES6 syntax I declare function with const
// the function have 4 parameters
// parameter is a variable used inside of the function
const greeting = (name, address, age, place) => {
  age += 20;
  name += ",";
  place += "DE";
  address += ",";
  return `Hey ${name} it is very nice to live in ${address} you are getting older too fast ${age},
    in your old ${place}`;
};

console.log(greeting("Ali", "xx str", 10, "Berlin"));

// SECOND WAY TO PROCESS THE DATA
// inside the function is our process, how we process the data
const greeting2 = (name, address, age, place) => {
  age += 20;
  name += ",";
  place += "DE";
  address += ",";
  let result = `Hey ${name} it is very nice to live in ${address} you are getting older too fast ${age},
      in your old ${place}`;
  return result;
};

console.log(greeting2("Ali", "xx str", 10, "Berlin"));
// the name of the parameter does not matter , but the order is what I plan
// parameters are variables used inside the function and its value comes when I call the function

// function without parameter
// function declaration is used as a value in ES6
// inside of the function I can use switch, if,
const add2 = () => {
  let x = 1120 * 3;
  console.log(x);
};
add2(); // function call

/**
 * Constants, like let declarations, are block-level declarations. 
 * That means constants are no longer accessible once execution flows out of the block in which they were declared,
 *  and declarations are not hoisted, 


 */

// GLOBAL AND LOCAL SCOPE

// Sorting INTEGERS
function sortNumber(a, b) {
  return a - b;
}

var numArray = [14, 4, 9];
numArray.sort(sortNumber);

console.log(numArray);

//
let array = [3, 4, 6, 5, 9, 10, 21];

let divFour = [];

let toFour = function(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] % 3 === 0) {
      divFour.push(array[i]);
    }
  }
};

// PRACTICE

function singleMode(arr) {
  const seen = {};
  let mostFreqVal = { val: null, count: 0 };
  for (let val of arr) {
    seen[val] = seen[val] ? seen[val] + 1 : 1;
    if (seen[val] > mostFreqVal.count) {
      mostFreqVal = { val, count: seen[val] };
    }
  }
  return mostFreqVal.val;
}

singleMode([1, 1, 2, 3, 3, 1, 4, 1, 4]); // returns 1

/**
 * function generates random numbers from 0 to 1, adds them together
 * to figure out what they need to be multiplied by to provide the correct range.
 * It has the benefit of all the numbers being fairly distributed.
 *
 */

function divvy(number, parts, min) {
  let randombit = number - min * parts;
  let out = [];

  for (let i = 0; i < parts; i++) {
    out.push(Math.random());
  }

  let mult =
    randombit /
    out.reduce(function(a, b) {
      return a + b;
    });

  return out.map(function(el) {
    return el * mult + min;
  });
}
let d = divvy(450, 6, 60);
console.log(d);
console.log(
  "sum - " +
    d.reduce(function(a, b) {
      return a + b;
    })
);

//

// Initialize function to test if a number is even
const isEven = x => {
  // If the remainder after dividing by two is 0, return true
  if (x % 2 === 0) {
    return true;
  }
  // If the number is odd, return false
  return false;
};

// Test the number
isEven(12);

//
/**
 * Amplify the Multiples of 4. Create a function that takes an integer and returns an array of integers ascending from 1 to the given number, where:
For each number in the array that can be evenly divided by 4, that number is amplified by 10 (i.e. return 10 times the number).
If the number cannot be divided evenly by 4, simply return the number.
The given integer will always be equal to or greater than 1.
Include the given number (the number in the parameters).
Examples:
amplify(4) ➞ [1, 2, 3, 40]
amplify(3) ➞ [1, 2, 3]
amplify(25) ➞ [1, 2, 3, 40, 5, 6, 7, 80, 9, 10, 11, 120, 13, 14, 15, 160, 17, 18, 19, 200, 21, 22, 23, 240, 25]
11:18
One is not like the others... Create a function that takes an array of numbers and return the number that’s unique.
Examples:
unique([3, 3, 3, 7, 3, 3]) ➞ 7
unique([0, 0, 0.77, 0, 0]) ➞ 0.77
unique([0, 1, 1, 1, 1, 1, 1, 1]) ➞ 0
 * 
 * 
 * 
 */

const amp = num => {
  //function amp(num) {
  let result = [];
  let ampByTen = 0;
  for (let i = 1; i <= num; i++) {
    if (i % 4 == 0) {
      ampByTen = i * 10;
      result.push(ampByTen);
    } else {
      result.push(i);
    }
  }
};
console.log(amp(24));

// SOLUTION 
function unique(arr) {
  let currentValue = 0;
  let current = []; // 3
  let reminder = [];
  for (let i = 0; i < arr.length; i++) {
    //current.length is true
    if (current.length == 0 || current[0] == arr[i]){
      current.push(arr[i]); // 1
      currentValue ++; // currentValue = currentValue +1;

    } else if (current[0] arr !== [i]) {
      reminder.push(arr[i]) // 2
    }
    if (currentValue == 1) {
      return current[0];
    } else {
      return reminder[0];
    }
  }
}
let arr
console.log(unique(arr));