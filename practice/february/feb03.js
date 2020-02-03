// function inside function
function main(num, num2) {
  // outer function above
  function second(n) {
    // inner function // private function for outer function
    //
    return n * n; // 9
  } // second num will be replace by 9  // 16 is num 2
  return second(num) + second(num2);
  // i am calling the second function with a value I don't know
}
console.log(main(3, 4));

// Nested scopes: Accessing outer global variables

var nice = true; // declared a variable outside of the scope
const outerFunction = (x, y) => {
  nice = false;
  let big = true; // the variable big is accessible throughout the global scope
  const innerFunction = num => {
    // the innerFunction is processing the num with 10
    big = false;
    nice = false;
    console.log(big + "innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
//big = false; // variable big is not able to be accessed outside of the global scope
console.log(outerFunction(3, 4));
console.log(nice);

// closure
function fun() {
  // i declared a variable with var which means it is global and  with value 10
  var number = 10;

  function fun() {
    return number + number;
  }

console.log(fun());
console.log(number);

// closure
// var counter = 0;
(function add ()  {
    var counter = 0;
    const adding = () => {counter++ }
    adding();
    //counter += 1;
    return function () {
        counter++;
        return counter;
}  
})();
add(); // 1
add(); //2
add(); // 3
//counter = 0;
console.log(add());
console.log(add());
console.log(add());
// console.log(add);
// self invoked function 

// closure is a function inside another function 
(function display() {
  let x = 0;
  console.log("Hi");
  return () => {
    x++;
    return x;
  }; // function inside a function is called closure
}) ();  // with the parenthesis  () we invoke or calling the function 
// the function is called by itself with the parenthesis 


// anonymous function 

// self invoking anonymous function

// two ways * passing parameter
const sum = ((x,y) => {
  return x + y;
})(4,5); // invoking == calling
console.log(sum);

// summarize of CLOSURE 
/* Closure is a function that accesses it lexical scope even executed outside of its lexical scope  
* 
* THe CLOSURE is a function that REMEMBERS  the variable from the place where it is defined , regardless 
* of where it is executed later
* A closure is the combination of an inner function and variables defined at outer scope but accessible to inner function. 
* In other words, a closure is an inner function that can access outer function’s variables. 
*/

// IIFE 
// THE DIFFERENCE BETWEEN self invoked and immediately invoked  

/**An Immediately-invoked Function Expression (IIFE ) is a way to execute functions immediately, 
 * as soon as they are created.
 * Function declarations want a name, while function expressions do not require it.
 * IIFEs start with semi column
 * 
 * An IIFE can also be named regular functions (not arrow functions). 
 * This does not change the fact that the function does not “leak” to the global scope, 
 * and it cannot be invoked again after its execution:

IIFEs are very useful because they don’t pollute the glo
*/
// 
(function doSomething() {
  /* */
})() 

// IIFE  starts with semi column 
;(function() {
  /* */
})() 

// IIFEs can be defined with arrow functions as well: 
(() => {
  /* */
})() 

// You could also put the invoking parentheses 
//inside the expression parentheses, there is no difference, just a styling preference:
(function() {
  /* */
}())

//(() => {
  /* */
//}())



// The Spread Syntax

/**
 * The spread syntax is simply three dots: ...
* It allows an iterable to expand in places where 0+ arguments are expected.
 */

var mid = [3, 4];
var arr = [1, 2, mid, 5, 6];

console.log(arr);

// 
var mid = [3, 4];
var arr = [1, 2, ...mid, 5, 6];

console.log(arr);

// LOOPS
for (let i = 10; i >= 0; i--) {
  let result = i * 3;
  console.log(`{1} * 3 = ${result}`);
}

// if -else 
let num = 10;
if (num == 20) {
  console.log("20 is cool");
} else {
  console.log("Noooo");
}

// NESTED ARRAYS 
// array inside an array 
/**JavaScript lets you create arrays inside arrays, known as nested arrays.
 * An array is an ordered set of values that you refer to with a name and an index. 
 * In a nested array, the elements of one array are themselves arrays. For example:
*/

var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
alert ( pets[0][0] + " is a " + pets[0][1] + " year old " + pets[0][2] ); // Displays "Sheba is a 13 year old cat"
alert ( pets[1][0] + " is a " + pets[1][1] + " year old " + pets[1][2] ); // Displays "Jasper is a 12 year old dog"

/**
 * 
 * Here we’ve created an array of 2 elements.
 *  Each element is in turn an array containing 3 elements.
 *  To access the elements of the inner arrays, you simply use two sets of square brackets.
 *  For example, pets[1][2] accesses the 3rd element of the array inside the 2nd element of the pets array.
 * You can nest arrays as deeply as you like. For example, here we’ve created a top-level array called animals,
 *  into which we’ve placed the above pets array, 
 * as well as a similar dinosaurs array — that’s 3 levels of nesting in total:
 * 
 * 
 */

var pets = new Array ( );
pets[0] = new Array ( "Sheba", 13, "cat" );
pets[1] = new Array ( "Jasper", 12, "dog" );
var dinosaurs = new Array ( );
dinosaurs[0] = new Array ( "Cyril", 45, "Tyrannosaur" );
dinosaurs[1] = new Array ( "Gertrude", 72, "Brontosaur" );
var animals = new Array ( pets, dinosaurs );
alert ( animals[0][1][0] + " is a " + animals[0][1][1] + " year old " + animals[0][1][2] ); // Displays "Jasper is a 12 year old dog"

//LOOPING  through NESTED ARRAYS

/**
 * once you start nesting arrays you quickly end up with lots of array elements. 
 * The easiest way to work with large arrays is to use loops. And in order to process nested arrays,
 *  you need to use nested loops.
 * For example, the following code loops through the animals nested array we created above,
 *  displaying each of the animals, along with their ages and types:
 * 
 * 
 */

for ( i=0; i<animals.length; i++ )
{
  for ( j=0; j<animals[i].length; j++ )
  {
    alert ( animals[i][j][0] + " is a " + animals[i][j][1] + " year old " + animals[i][j][2] );
  }
}

/**
 * nested arrays are useful when you want to store highly structured data — 
 * - such as our animals example above — and when you’re creating multidimensional data structures
 *  (commonly used in games and graphics applications). 
 */

 // Write a function multiplier that uses a closure to perform multiplication.
 // the outer function should be stored in a variable which is then called.

 /**function Multiply(arguments) {

  for(var i =0; i <arguments.length; i++) {
    var number = arguments.length[i];
  }
  return function (res) {
      return number*res.valueOf();
  };
}
console.log(Multiply(5)(5)(6)(8));
*/

function multiply(...args) {
  function m(f, ...a) {
      p *= f;
      if (a.length) {
          m(...a);
      }
      return m;
  }

  var p = 1;            // neutral value for multiplication
  m.toString = _ => p;
  return m(...args);
}

console.log(multiply(5)(5)(6)(8));
//console.log(multiply(2, 3, 4)(5)(6, 7));

// Write a function multiplier that uses a closure to perform multiplication.
 // the outer function should be stored in a variable which is then called.
// separate the function call
function multiplier (num) { 
  //return multiplyBy * num;
  // inner function 
  return x => x * num;
  // returning another function with another/ different parameter 

}
return multiplier;
const times = multiplier (2);
console.log(times(5));

(function() {
  var all = "Hi";
  console.log(all);
})();

  
 /**
  * One function written inside another function is called a nested function. 
  * Suppose that there are two functions outer function and inside it there is an inner function.
  *  The inner function will have access to its own variables, the outer functions variables, 
  * arguments and it has access to global variables. This is done by a scope chain. 
  * Every function so created has a scope chain associated with which helps us in accessing the variables value.
  * 
  * Now what are closures? Closures - the nested functions continue to live even when
  *  the outer function has completed is closure. 
  * The day to day way in which we are able to see closure is callbacks. 
  * Callbacks are functions which are usually executed when an event completes, 
  * when they are executed they have access to outer functions variables 
  * even though the outer function has completed its execution.
  * 
  * 
  * In JavaScript, all functions work like closures. 
  * A closure is a function, which uses the scope in which it was declared when invoked. 
  * It is not the scope in which it was invoked.
  * 
  * 
  * Closure is a computer science term that defines how a function can maintain a record of the environment 
  * in which it was called. This means that a function can keep track of the arguments and variables 
  * it was initially called with, even when it’s called outside of that scope.
  * A closure is an inner function that has access to the outer (enclosing) function's variables—scope chain.
  * In other words, an inner function will always have access to the variables and parameters of 
  * its outer function, even after the outer function has returned.
  * A closure gives you access to an outer function’s scope from an inner function.
  */


  //***********Example 1***************//  
function yearsLeftForRetirement(retirementAge) {  
  const message = ' years left for the retirement';  
  return function calcluateYears(currentYear, birthYear) {  
      const yearsLeftForRetirement = retirementAge - (currentYear - birthYear);  
      console.log(yearsLeftForRetirement + message);  
  };  
}  
const birthYear = 1985;  
//Get years left for retirement in India  
const retirementInIndia = yearsLeftForRetirement(62);  
retirementInIndia(new Date().getFullYear(), birthYear);  
//Get years left for retirement in US  
const retirementInUS = yearsLeftForRetirement(65);  
retirementInUS(new Date().getFullYear(), birthYear);  
//Same can also be written as  
yearsLeftForRetirement(65)(new Date().getFullYear(), birthYear); 

/**
 * 
 * Clearly here we can see that the inner function has access to message constant and retirement 
 * age parameter which are outside the scope of the inner function (CalculateYears).
 * Also, the inner function has access to them even after the yearsLeftForRetirement function 
 * is called because that is why we are able to log the message in the console.

OUTPUT
 * To use a closure, simply define a function inside another function and expose it.
 * To expose a function, return it or pass it to another function.
 * The inner function will have access to the variables in the outer function scope, 
 * even after the outer function has returned.
 * 
 */

 //**********EXAMPLE***************//
/**
 * 
 * Write a function that accepts several parameters and calculates the number of money that will have been saved as pension until a person retires. The function should be self invoked and should have the following parameters:
The current age of the person // e.g. 40
The retirement age of the person // e.g. 60
The monthly wage the person earns // e.g. 1000
The percentage (as integer) that the person saves each month // e.g. 10%
If the person has already retired then the message ‘You’re already retired!’ should be printed. If not, then the program should calculate how many years remain until the person retires, the monthly income and take a specific percent of this income every month as saved money.
Example: A lady is 40 years old, she retires at 65, she earns $2000 per month and she saves the 5% of it. How much money will she have saved until she retires?
Output: $30000
 */

 // 
 // ( function(currentAge, retirementAge, monthlyWage, percentageSaved) { // old way
 ((currentAge, retirementAge, monthlyWage, percentageSaved) =>{

  if (currentAge >= retirementAge){

  } else {
    let yearsToSave = retirementAge - currentAge;
    console.log(yearsToSave + "years to go");
    let monthsToSave = yearsToSave * 12;
    console.log(monthsToSave +"months to go");
    let amountSavedByMonth = (monthlyWage * percentageSaved) / 100;
    let totalSaved = amoubtSavedByMonth * monthsToSave;
    console.log(`you will get very very old in ${yearsToSave} and you will have ${totalSave} in your bank`);
  }
 
 })(30, 65, 1000,5); // passing of the parameters in numbers


 console.log();

 // trim()
 // trimEnd()
 // trimStart()
 // charCodeAt()
 // endsWith()
 // startsWith()
 // 