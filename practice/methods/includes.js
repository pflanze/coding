// includes()  - helper method

/**
 * includes works with primitive types
 * if search Element is array and if I want to check if it is included in the input Array or
 * if it is an object includes will always return false and the reason for that is
 * that arrays and objects in JavaScript are reference type
 * does not require a callback function
 * it simply accepts two arguments , "search Elements " and "Optional Starting index"
 *
 * It loops through all elements in the array and compares each of those elements
 * to the "search element" ;
 * if element is found than includes() method will return "true" otherwise it will return "false"
 *
 * If I specify a "starting index"  for e.g 3 then includes will to start from index 3 and will ignore all previous elements
 */

// EXAMPLE OF includes() helper method usage
// example 1

const myArray = [10, "abc", true, undefined, null, [1, 2]];

console.log(true, myArray.includes(true));
console.log(10, myArray.includes(10));
console.log("abc", myArray.includes("abc"));

console.log("abc", "starting from index3", myArray.includes("abc", 3));

console.log("nul", myArray.includes(null));

// EXAMPLE 2

// array of arrays and each array contains strings as elements
const tags = [
  ["javascript", "es6"],
  ["css", "flexbox"],
  ["html", "web-browser"]
];

// array of objects
const fruits = [
  { title: "Orange", quantity: 10 },
  { title: "Banana", quantity: 5 },
  { title: "Apple", quantity: 25 }
];

// a primitive types array that contains values of primitive variable types
const primitiveTypesArray = [25, "x", true, undefined, null];
// Challenge
/**
 * Create a function "elementIsIncluded" with two parameters "searchElement" and "array"
 *
 * If type of the "searchElement" is object or array, you need to convert each element
 * in the "array" to the string and then "elementIsIncluded"
 * method with argument that will be also converted to the string.
 *
 * If type of the "searchElement" is not an object or array - simply apply "includes" method
 * and return result.
 */

const elementIsIncluded = (searchElement, array) => {
  if (typeof searchElement !== "object") {
    return array.includes(searchElement);
  }
  if (typeof searchElement === "object") {
    return array
      .map(element => JSON.stringify(element))
      .includes(JSON.stringify(searchElement));
  } // the .map method will return a brand new array, where each element will be stringify to JSON
};

console.log(elementIsIncluded(["css", "flexbox"], tags)); // true
console.log(elementIsIncluded(["flexbox", "css"], tags)); // false

console.log(elementIsIncluded({ title: "Apple", quantity: 25 }, fruits)); // true

console.log(elementIsIncluded({ title: "Banana", fruits })); // false

console.log(elementsIsIncluded(25, primitiveTypesArray)); // true
