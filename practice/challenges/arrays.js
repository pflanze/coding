/**
 * EXAMPLE 1
 *
 * Empty Array
 */
const myArray = [];
console.log(myArray);

/**
 * EXAMPLE 2
 *
 * Add elements to the Array
 */
/* 
const myArray = [];
myArray[0] = "First Element";

console.log(myArray);

myArray[1] = "Second Element";

console.log(myArray);

myArray.push("Third Element"); // preferable

console.log(myArray); // get array with 3 elements

*/

/**
 *
 * EXAMPLE 3
 *
 * Modify Elements
 */
/*
const myArray = [3, true, "abc", {}];
console.log(myArray);

//  the length: 4
myArray[1] = "New value for second element";
console.log(myArray);

myArray[0] = null;
console.log(myArray);
*/

// CHALLENGE

const myCities = ["London", "Berlin", "Sofia"];
/**
 * Create a function called "arrayInfo" that will return string like "London is located att the index 0
 * in the myCities array",
 *
 */

const arrayInfo = (element, index) =>
  element + "is located at the index" + index + "in the myCities array";
/**
 * Iterate over the myCities array, call "arrayInfo" function for each of the elements
 * and print result of the call to the console
 */
// Option 1: "for"
for (let i = 0; i < myCities.length; i++) {
  console.log(arrayInfo(myCities[i], i));
}

console.log("___");
// Option 2: "forEach"
// here function is anonymous function expression with two parameters "element" and "index"
// and during forEach method iteration each element from the myCities array will be passed to this callback function,
// as element and its index will be passed as will as a second argument.
myCities.forEach((element, index) => console.log(arrayInfo(element, index)));

// ARE ARRAYS EQUAL OR NOT

// CHECK IF ELEMENT IS IN AN ARRAY
