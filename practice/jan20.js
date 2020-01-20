// ARAYS

/**let sarArr = Array.of(3);
console.log(strArr);

arrInt.unshift(322);
console.log(arrInt);
console.log(typeof arrInt);
*/
// Finding import PropTypes from 'prop-types';//..
// Array.indexOf
var firstNameArr = ["All", "Olga", "Nancy"];
console.log(firstNameArr.indexOf("Nancy"));
console.log(firstNameArr.indexOf("All"));
//let funArr = ["🤓", "👍", "🍎"];
//console.log(funArr);

// method - filter
// nHow to create an Array authomatically
/**let arrStringName = ["All"];
console.log(arrStringName);
for (let i = 3; i <= 10; i++) {
  arrStringName[i] = `Hadi ${i}`; // arr[ = 'Hadi']
}
console.log(arrStringName);
*/
let arrStringName = ["All"];
console.log(arrStringName);
for (let i = 0; i <= 10; i++) {
  arrStringName[i] = `Hadi ${i}`; // arr[ = 'Hadi']
}
console.log(arrStringName);

console.log("___");

/** let funArr = ["🤓", "👍", "🍎"];
console.log(funArr);
console.log(funArr.pop(2));
console.log(funArr);
*/

let funArr = ["🤓", "👍", "🍎"];

funArr.pop();
//funArr.pop(); // remove the very last element
funArr.unshift(); // remove the very first element
funArr.shift(); // with shift we remove the first element from the array
console.log(funArr);

// when we use pop

//var lastName = [];
// Array Literal Notation
// Array can holds values of any type : objects, numbers, strings, booleans,
//const lastName = ["Ali, "Hadi]; // changing one element
const lastName = []; // i am secure my array but not the value of it
//lastName = 0; // it breaks our code
//lastName = "HHT"; // not able to overwrite my array
lastName[0] = "Nancy";
lastName[1] = "Dany";
console.log(lastName);
//let lastName = 0; // identifier lastName has already been declared
// with const we are not able to change the variable
// when arrays have multiple values we use const
// with const we declare the variable make code more secure

//Property name of the object is usually in the string format
//array consist of properties, names of those properties are numeric,(null, zero)
//arrays have different helper methods such as push, pull, shift, unshift - they are available for arrays not objects
// Array is a special object with NUMERIC property Names like (0, 1,2,3,) and soon its behaviour is as any other object.

// var use for hoisting
let x = 0; // use let to declare flexible variable
x = 2 + 2;
console.log(x);

let names = ["Hadi", "Nancy", "Dany"];
let name = `This is long text 
new line 
new line`;
console.log(names.length); // index of array,
console.log(name.length); // jam

// Array.slice

console.log(name.slice(3));
// array.splice
console.log(names.splice(0, 2));

// substring
//console.log(names.substring(1, 3));

// array.split
// if i want to split a string i need a rule
let stringToArray = name.split(""); // every string will be an index for that array
// let stringToArray = name.split("\n"); //  "\n"new line
console.log(stringToArray);
// if you have a string you can turn it to array,

// Exercises ONE
// Declare a variable named “euroCities” and assign an array to the variable
//e.g. [“Paris”, “London”, “Valletta”, “Prague”, “Rome”].
//Declare another variable and assign the second item of the array as a value.

let euroCities = ["Paris", "London", "Valetta", "Prague", "Rome"];
let newCity = euroCities[3]; // declare another variable and assign the second item of the array as value
console.log(newCity);

//Exercise TWO

// Change the first item in the array to “Berlin”.
// euroCities.splice(0, 1, "Berlin");
euroCities[0] = "Berlin";
// replaces 1 element at index 4
console.log(euroCities);
// ['Berlin', 'London']

// print the  length of the array  "euroCities"
console.log(euroCities.length);

//Remove the last item of the array “euroCities”.

euroCities.pop();
console.log(euroCities);
//Use an array method to add “Budapest” to the euroCities array.
euroCities.push("Budapest");
console.log(euroCities);

//Create another variable named asianCities and assign an array of at least 5 cities to the variable.
const asianCities = ["HongKong", "Tokio", "Taiwan", "Singapur", "Dubai"];
console.log(asianCities);
// use an array method to select items 2-4 from the aray of asian cities and store this in another variable
let newArray = asianCities.splice(1, 3);
console.log(asianCities);
// Array.join
const arrayString = ["This", "is", "array", "with", "a", "string"]; // array holds strings as values
let stringToArr = arrayString.join(" "); // with empty space able to read better
console.log(stringToArr);

/**  Array is a special object with numeric property names like 0,1,2,3,4 and its behavior is the same as
 * any other object.
 */
// Array Literal Notation

const myArray = [1, 2, 3]; // array which holds 3 values, numbers
console.log(myArray);

/**
 *! Array can hold values of any type: OBJECTS, NUMBERS, STRINGS, BOOLEANS etc.

 */
const myArray2 = new Array(1, 2, 3);
console.log(myArray2); // [1,2,3]

/**
 * length - indicates quantity of the elements in the array,
 * the length property is updated automatically each time when we perform actions with array;
 * and _proto_ points to the prototype of the array methods: push, pop, pull, shift, unshift
 * push -  add new element at the end of the PropTypes.array,
 * pop - removes last element of the array
 * shift - remove first element
 * unshift - add new element at the beginning of the array
 *
 * "length" property holds a number as a value and this number is equal
 * to the quantities of the elements in the array, and there is one hidden property which points
 * to the prototype . _proto_
 *
 * working with array elements by their indexes is not the most conveniont way to perform any actions
 * with array. That is why there are array methods, available for every variable that holds array as a value.
 *
 */

//const myArray = [1, 2, 3]; // array literal

// Array with OBJECT literal Notation
const myObject = {
  0: 1,
  1: 2,
  3: 3,
  length: 3
};

// statements produces ACTION not Value
let a; // semi-column is added after statements
// ; - semi-column is required after several statements

const b = 5;
// there is no semi-column after expression

/**
 * How to distinguish expression from statement?
 * EXPRESSIONS can be used as ARGUMENTS in the function call.
 * Expressions can be turned into statements and are called EXPRESSION STATEMENTS
 *
 * When we should use expression statement instead of expression?
 * If expression is used standalone - turn it into EXPRESSION STATEMENT by adding "; " at the end
 *
 */
function myFn(a) {
  console.log(a); // expression statement;
}

// In JavaScript engine there are two phases COMPILATION and EXECUTION

// VARIABLES LIFECYCLE
/**
 * In JS there are
 * EXPRESSIONS
 * STATEMENT
 * EXPRESSION STATEMENT
 */
