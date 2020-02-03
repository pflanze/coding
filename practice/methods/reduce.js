// reduce()
//the most powerful helper method because of its accumulator
/* it maintains STATE while looping through elements in the array
 * this STATE is called ACCUMULATOR
 * in other helper methods there is NO ACCUMULATOR
 * the reduce() has TWO Parameters  - CALLBACK FUNCTION  and
 * initial accumulator which is optional. If initial accumulator is present in reduce() method call, then
 * iteration will start from the first Element in the Array and the initial accumulator from the first element
 * will be passed to the call back function,
 * when passing initial Accumulator and the first element to the CALLBACK function and this callback function
 * performs some action with accumulator and current value and it returns RESULT. and this result will be
 * updated accumulator which with Element two is passed to the callback function
 * this is happening until the end of the array
 * when the last element of the array and the updated accumulator are passed to the callback function and
 * when it returns result, this result will be returned as a result of the reduce helper method,
 * It means that this accumulator starting from initial value is passed through all callback function calls
 * and finally it is returned as a result of the reduced helper method.
 ** !
 */
// ! If initial accumulator is absend  the reduce method call the iteration will start from element 2

//  reduce method application
/**
 * if inputArray contains objects I can reduce this array of objects
 * to a single object with several properties;
 * or I can reduce this array of object to array of elements -
 * for example to array of numbers or array of strings
 * If the inputArray contains NUMBERS I can simply sum all of them and accumulator at the end
 * will be simply a number.
 *
 */
/**
 * The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
Here’s what the syntax looks like:
 * 
 * IT REDUCES ARRAY TO ONE VALUE 
 */

let result = arr.reduce(callback);
// Optionally, you can specify an initial value
let result = arr.reduce(callback, initValue);

/**
 * result — the single value that is returned.
 *  arr — the array to run the reduce function on.
 *  callback — the function to execute on each element in the array.
 *  initValue — an optionally supplied initial value. If this value is not supplied, the 0th element is used as the initial value.
 ** Our callback function can take four arguments. You will recognize three of the arguments from the map() and filter() methods. The new argument is the accumulator.
 ** accumulator — the accumulator accumulates all of the callbacks returned values.
 * val — the current value being processed
 * index — the current index of the value being processed
 *  arr — the original array
 *
 *
 *
 *
 */

// PRACTICE
// EXAMPLE  1

const myNumbers = [5, 10, 3, 15];

const sum = arrayOfNumbers =>
  // the reduce method call has two arguments (callback function and initial accumulator )
  // initial accumulator sum is 0
  // arraysOfNumbers is the inputArray
  arrayOfNumbers.reduce((accumulator, number) => accumulator + number, 0);

console.log(sum(myNumbers));

/**
  * Reduce is an array method so we will start with the array of calorie counts.
It uses a callback function that runs on each element in the array.
It uses a return statement to show how the value should accumulate after each iteration of the array.
  * 
  * 
  */

let foods = [800, 200, 100, 300, 700];

let total = foods.reduce(function(sum, item) {
  return sum + item;
});
