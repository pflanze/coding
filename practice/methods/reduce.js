// reduce()

/**
 * The reduce() method is used to apply a function to each element in the array to reduce the array to a single value.
Here’s what the syntax looks like:
 * 
 * 
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
