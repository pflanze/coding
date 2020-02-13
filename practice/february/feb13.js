// Error handling, "try..catch"
// try (...) and catch (e)
console.log("Hi");

let userAge = 25;
if (userAge == 25) {
  console.log("something else");
}
console.log("Hi");

// if only this if{} it breaks
let userName = "";
try {
  console.log("Hi this is trying phase");
  // cool();
  if (userName == "") throw "Sorry something went wrong";
  console.log("2nd phase");
} catch (err) {
  console.log("this error is" + err);
} finally {
  console.log("This will always run 🤥"); // whatever is the case it runs
}

// try
// catch finds the error and handle it

// finally - this works regardless if there is an error or not
// we see this when working with database

/**
 * First, the code in try {...} is executed.
 * If there were no errors, then catch(err) is ignored:
 * the execution reaches the end of try and goes on, skipping catch.
 * If an error occurs, then the try execution is stopped,
 * and control flows to the beginning of catch(err).
 * The err variable (we can use any name for it) will contain
 *  an error object with details about what happened.
 * an error inside the try {…} block does not kill the script – 
 * we have a chance to handle it in catch.


 */

 // Questions 
 // ! how to call a function multiple times? 

 // one way
function display() {
    console.log('hey this is a cool function ');

} return (i= 0; i < 8; i++) {display()}

// second way
(function manyTimesCalledFunction(num)){
    display{};
    if (num > 1) manyTimesCalledFunction (num -1)
})(8);


// How to use setTimeOut ? 

// one way
const timerPrint = setTimeOut(
    () => console.log("Hi I am JS"),
     5000
     ); // ES6
clearTimeout(timerDisplay);

// second way
const timerPrint = setTimeout(print, 5000); // with 


// math()

// forEach()

// EXERCISES
// month name 
var months = [
  'January', 'February', 'March', 'April', 'May',
  'June', 'July', 'August', 'September',
  'October', 'November', 'December'
  ];

function monthNumToName(monthNum) {
  return months[monthNum - 1] || '';
}
function monthNameToNum(monthName) {
  var month = months.indexOf(monthName);
  return month ? month + 1 : 0;
}

if (monthNumToName(12) == 'December') alert('12 == December!')
if (monthNameToNum('June') == 6) alert('June == 6!')

// Exercise 2
/**
 * 
 * Create a function called getMonthName, which takes the number of 
 * the month as an argument (Jan = 1 - Dec = 12). 
 * Throw an error if a user inputs an invalid number as an argument. 
 * 
 */
function getMountName (Jan =1, Dec = 12)

// REVERSE A STRING 

// Create a function that reverses a string.
// Throw a custom error if the user inputs another type as an argument.



// reverse a string
function ReverseString(str) { 
  
  // Check input 
  if(!str || str.length < 2 ||  
          typeof str!== 'string') { 
      return 'Not valid';  
  } 
    
  // Take empty array revArray 
  const revArray = []; 
  const length = str.length - 1; 
    
  // Looping from the end 
  for(let i = length; i >= 0; i--) { 
      revArray.push(str[i]); 
  } 
    
  // Joining the array elements 
  return revArray.join(''); 
} 

document.write(ReverseString("coding is fun")) 

// In Javascript strings are immutable (this depends on programming language), 
//which means string is like an array in the meaning you can access its elements by index. 
//But it does not allow manipulating individual elements at individual indexes. 
//If you try this in 'normal' mode, it fill fail silently (it will execute 
//but string won't be modified and you'll never know why). 
//If you use strict mode via 'use strict';, it will fail with the following error:


// Declare a readonly variable 
function printManyTimes(str) {
  "use strict";

  // change code below this line

  const SENTENCE = str + " is cool!";
  for (let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  // change code above this line

}
printManyTimes("freeCodeCamp");

// Counting Cards

var count = 0;

function cc(card) {
  // Only change code below this line

  var msg = '';

  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count = count;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
  }

  if (count === 5) msg = "5 Bet";
  else if (count === 0) msg = "0 Hold";
  else if (count === -5) msg = "-5 Hold";
  else if (count === -1) msg = "-1 Hold";
  else if (count === 1) msg = "1 Bet";


  return msg;
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');

// EXERCISE FCC JS basics
// Replace Loops using Recursion
/**
 * a function can be expressed in terms of itself. 
 * To help understand this, start by thinking about the following task: 
 * multiply the elements from 0 to n inclusive in an array to create
 *  the product of those elements. Using a for loop, you could do this:
 */

 // SAMPLE
 function multiply(arr, n) {
  var product = arr[0];
  for (var i = 1; i <= n; i++) {
      product *= arr[i];
  }
  return product;
}

// SOLUTION

function sum(arr, n) {
  // Only change code below this line
  if(n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }
  // Only change code above this line
}

// Destructuring Assignment to Extract Values from Objects

const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// change code below this line

const { today, tomorrow } = HIGH_TEMPERATURES;

// change code above this line

console.log(yesterday) // should be not defined
console.log(today); // should be 77
console.log(tomorrow); // should be 80

// CREATE A JAVASCRIPT PROMISE

/**
 * Promise is a constructor function, so you need to use the new keyword 
 * to create one. It takes a function, as its argument, 
 * with two parameters - resolve and reject. These are methods used to 
 * determine the outcome of the promise. The syntax looks like this:
 */

const myPromise = new Promise((resolve, reject) => {

});

//Use the Rest Parameter with Function Parameters
/**
 * With the rest parameter, you can create functions that take a variable 
 * number of arguments. These arguments are stored in an array that can be
 *  accessed later from inside the function.
 */

function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
console.log(howMany(0, 1, 2)); // You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], { })); // You have passed 4 arguments.

/**
 * The rest parameter eliminates the need to check the args array and allows us to 
 * apply map(), filter() and reduce() on the parameters array.
 */

 // EXERCISE 
 /**
  * Modify the function sum using the rest parameter in such a way that the function sum 
  * is able to take any number of arguments and return their sum.
  */

  // SOLUTION
  const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
  }
  
  console.log(sum(1, 2, 3)); // 6