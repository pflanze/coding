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
