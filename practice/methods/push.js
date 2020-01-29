// push() helper method

/**
 * Create a function "pushUnique" with two parameters "inputArray"
 * and "newElement".
 *
 * If "inputArray" already contains "newElement" print " {newElement}
 * is already in the array " to the console.
 *
 * Otherwise push "newElement" to the "inputArray"
 *
 * NOTE: We assume that "inputArray" may contain only primitive variable types
 *
 * in JavaSCript there in NO Built-in method to push  element to the array
 *  if element is absent in the array
 *  create custom function that performs this action
 */
// passing by reference

const myNumbers = [123, 50, 27];
// first parameter is assumed to be an array "inputArray" and if variable is passed to this function
// and this variable is array or object it will be passed by reference, what does it mean ?
// it means that I am able to change the variable inside of the function,
// this is happening in the push
const pushIfUnique = (inputArray, newElement) =>
  inputArray.includes(newElement)
    ? // inputArray  = myNumbers (is array)
      // they both point to the same place in memory
      console.log(newElement + "is already in the array")
    : // pushing a new element to the inputArray
      // object variable type is reference type
      // this behavior is possible , we ca mutate external variable
      // when I push new element to the input array it will be pushed to myNumbers textDecoration:
      inputArray.push(newElement);

pushIfUnique(myNumbers, 50); // "50 is already in the array"
console.log(myNumbers); // [123, 50, 27]

pushIfUnique(myNumbers, 80);
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 80); // 80 is already in the array
console.log(myNumbers); // [123, 50, 27, 80]

pushIfUnique(myNumbers, 77);
console.log(myNumbers); // [123, 50, 27, 80, 77]

//
// passing by value
// it happens when any variable that I use in the function call has primitive variable type.
const newFn = num => {
  num = num + 5;
  console.log(num);
}; // function "num" is limited to this scope only and when this function is called bellow
// this variable will be declared, initialized and assigned value 10, nothing else,
const myNumber = 10; // value 10

newFn(myNumber); // this variable "myNumber" is passed to newFn function by value, we pass only 10
// and inside of the "newFn" there is a variable "num "
console.log(myNumber);
