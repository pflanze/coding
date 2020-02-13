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
