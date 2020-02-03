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
function add ()  {
    var counter = 0;
    const adding = () => {counter++ }
    adding();
    //counter += 1;
    return function () {
        counter++;
        return counter;
}
    };
   
}) ();
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
const sum = ((x,y)) => {
  return x + y;
}) (4,5); // invoking == calling
console.log(sum);

// summarize of CLOSURE 
/* Closure is a function that accesses it lexical scope even executed outside of its lexical scope  
* 
* THe CLOSURE is a function that REMEMBERS  the variable from the place where it is defined , regardless 
* of where it is executed later
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

(() => {
  /* */
}())



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