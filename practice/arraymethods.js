// ARRAY HELPER METHODS

/**
 * forEach()
 */

// this method is used if we want to perform some action with each element of the array;
// this method at the input takes an array and on the output gives undefined
// it takes each element of the array one by one and then this element is passed to the callback function as current value.
// this callback function may also has 3 parameters, first is mandatory and the others are optional"index" or "array"

// "index" will contain the index of processing element of the array,
// for example if element one is passed to the callback function , the index will be zero and so on
// there is no way to break this method, it will always process till the last element of the array.

// PRACTICE

/** */
const myArray = [1, true, "abc"];
for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]); // accessing certain elements in the array by its index
}
console.log();

// the best option here is to use arrow function
myArray.forEach(element => console.log(element)); // same result
// here is clear what is happening

const result = myArray.forEach(element => console.log(element));
console.log(result); // result is undefined

// gives error because element is a parameter in the arrow function and this parameter
// can be accessed only inside the function , it is not available outside, and it gives error
console.log(element); // gives error

// map()
/**
 * it return Output Array
 *
 *
 *
 */
