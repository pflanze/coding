// freeCodeCamp exercises

// Understanding Uninitialized Variables

// TASK 1

/**
 * When JavaScript variables are declared, they have an initial value of undefined.
 * If you do a mathematical operation on an undefined variable your result will be NaN
 * which means "Not a Number". If you concatenate a string with an undefined variable,
 *  you will get a literal string of "undefined".
 *
 * Initialize the three variables a, b, and c with 5, 10, and "I am a" respectively
 * so that they will not be undefined.
 */

// Initialize these three variables
var a = 5;
var b = 10;
var c = "I am a";

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

// Understanding case sensitivity in variables

/**
 * JavaScript all variables and function names are case sensitive. 
 * This means that capitalization matters.
 * MYVAR is not the same as MyVar nor myvar. 
 * It is possible to have multiple distinct variables 
 * with the same name but different casing. It is strongly recommended 
 * that for the sake of clarity, you do not use this language feature.

Best Practice
Write variable names in JavaScript in camelCase. In camelCase, multi-word variable names have 
the first word in lowercase and the first letter of each subsequent word is capitalized. */

// Declarations
var studyCapVar;
var properCamelCase;
var titleCaseOver;

// Assignments
studyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

// Replace Loops using Recursion
/**
 * Recursion is the concept that a function can be expressed in terms 
 * of itself. To help understand this, start by thinking about the 
 * following task: multiply the elements from 0 to n inclusive in 
 * an array to create the product of those elements. 
 * Using a for loop, you could do this:
 */
function multiply(arr, n) {
    var product = arr[0];
    for (var i = 1; i <= n; i++) {
        product *= arr[i];
    }
    return product;
  }

  /**  However, notice that multiply(arr, n) == multiply(arr, n - 1) * arr[n]. 
  That means you can rewrite multiply in terms 
  of itself and never need to use a loop. */

  function multiply(arr, n) {
    if (n <= 0) {
      return arr[0];
    } else {
      return multiply(arr, n - 1) * arr[n];
    }
  }

 /**  The recursive version of multiply breaks down like this. 
  * In the base case, where n <= 0, it returns the result, arr[0]. 
  * For larger values of n, it calls itself, but with n - 1. 
  * That function call is evaluated in the same way, 
  * calling multiply again until n = 0. At this point, 
  * all the functions can return and the original multiply returns the answer.

Note: Recursive functions must have a base case when they return 
without calling the function again (in this example, when n <= 0), 
otherwise they can never finish executing. */

// Write a recursive function, sum(arr, n), 
//that returns the sum of the elements from 0 to n inclusive in an array arr.
function sum(arr, n) {
    // Only change code below this line
  if (n <= 0) {
      return arr[0];
  } else {
      return sum(arr, n -1) + arr[n];
  }
    // Only change code above this line
  }
  console.log(sum([2,3,4] 1));

  //Use Recursion to Create a Countdown

  /**
   * 
   * let's look at a more complex function that returns an array 
   * of consecutive integers starting with 1 through the number passed to 
   * the function.As mentioned in the previous challenge, there will be a base case. 
   * The base case tells the recursive function when it no longer needs to call itself. 
   * It is a simple case where the return value is already known.
   *  There will also be a recursive call which executes the original
   *  function with different arguments. 
   * If the function is written correctly,
   *  eventually the base case will be reached.

For example, say you want to write a recursive function that returns 
an array containing the numbers 1 through n. 
This function will need to accept an argument, n, 
representing the final number. Then it will need to call itself 
with progressively smaller values of n until it reaches 1. 
You could write the function as follows:
   */

  function countup(n) {
    if (n < 1) {
      return [];
    } else {
      const countArray = countup(n - 1);
      countArray.push(n);
      return countArray;
    }
  }
  console.log(countup(5)); // [ 1, 2, 3, 4, 5 ]

  // use RECURTION to create countdown
  function countdown(n){
    if (n < 1) {
      return [];
    } else {
      const arr = countdown(n - 1);
      arr.unshift(n);
      return arr;
    }
  }
  console.log(countdown(5)); // [5, 4, 3, 2, 1]

  //Use Recursion to Create a Range of Numbers

  /**
   * define a function named rangeOfNumbers with two parameters. 
   * The function should return an array of integers which begins with 
   * a number represented by the startNum parameter and ends with a 
   * number represented by the endNum parameter. The starting number 
   * will always be less than or equal to the ending number. 
   * Your function must use recursion by calling itself and not use 
   * loops of any kind. It should also work for cases where both 
   * startNum and endNum are the same.
   */
  function rangeOfNumbers(startNum, endNum) {
    if (endNum - startNum === 0) {
      return [startNum];
    } else {
      var numbers = rangeOfNumbers(startNum, endNum - 1);
      numbers.push(endNum);
      return numbers;
    }
  }



  // another way
  var range = function(start_num, end_num) 
{
  if (end_num - start_num === 2) 
  {
    return [start_num + 1];
  } 
  else 
  {
    var list = range(start_num, end_num - 1);
    list.push(end_num - 1);
    return list;
  }
};

console.log(range(2,9));

// Use Multiple Conditional (Ternary) OperatorsPassed

/**
 * The following function uses if, else if, 
 * and else statements to check multiple conditions:
 */
function findGreaterOrEqual(a, b) {
    if (a === b) {
      return "a and b are equal";
    }
    else if (a > b) {
      return "a is greater";
    }
    else {
      return "b is greater";
    }
  }
  // The above function can be re-written using multiple conditional 
  //operators:
  function findGreaterOrEqual(a, b) {
    return (a === b) ? "a and b are equal" 
      : (a > b) ? "a is greater" 
      : "b is greater";
  }

  // solution 
  function checkSign(num) {
    return (num > 0) ? 'positive' : (num < 0) ? 'negative' : 'zero';
  }
  checkSign(10);

  // the TERNARY operator is a conditional operator that takes 3 operands
  /**
   * Ternary operator tests the condition and returns one value or expression
   * if it is true another if it is false
   * condition ? exr1 : expr2
   * I can have more than one ternary operator together
   */

   let age 19;
   if (age >= 18) {
       console.log("You are an adult");
   } else {
       console.log("You are a kid");
   };

   console.log((age>= 18) ? "You are an adult" : "You are a kid");