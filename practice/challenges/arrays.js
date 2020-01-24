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

const myArray = [];
myArray[0] = "First Element";

console.log(myArray);

myArray[1] = "Second Element";

console.log(myArray);

myArray.push("Third Element"); // preferable

console.log(myArray); // get array with 3 elements

/**
 *
 * EXAMPLE 3
 *
 * Modify Elements
 */

const myArray = [3, true, "abc", {}];
console.log(myArray);

// the length: 4
myArray[1] = "New value for second element";
console.log(myArray);

myArray[0] = null;
console.log(myArray);
