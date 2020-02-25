//Mutate an Array Declared with const
/**
 * However, it is important to understand that objects
 * (including arrays and functions) assigned to a variable using
 * const are still mutable. Using the const declaration only
 * prevents reassignment of the variable identifier.
 */

// sample 👍
"use strict";
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
const s = [5, 7, 2];
/**
 * you can mutate the object [5, 6, 7] itself and the variable s will still point to the altered
 * array [5, 6, 45]. Like all arrays, the array elements in s are mutable,
 * but because const was used, you cannot use the variable identifier s to
 * point to a different array using the assignment operator.
 */

// SOLUTION
function editInPlace() {
  "use strict";
  // change code below this line
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;

  // s = [2, 5, 7]; <- this is invalid

  // change code above this line
}
editInPlace();

// Prevent Object Mutation with Object.freeze()

/**
 * As seen in the previous challenge, 
 * const declaration alone doesn't really protect your data from mutation. 
 * To ensure your data doesn't change, JavaScript provides a function 
 * Object.freeze to prevent data mutation.
 * Once the object is frozen, you can no longer add, update, 
 * or delete properties from it. Any attempt at changing the object will be 
 * rejected without an error.


 */
// SAMPLE

let obj = {
  name: "Coding",
  review: "Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj);
// { name: "Coding", review:"Awesome"}

// SOLUTION

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // change code below this line
  Object.freeze(MATH_CONSTANTS);

  // change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
