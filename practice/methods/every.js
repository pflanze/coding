// every()
/**
 *
 * it also takes a callback function as argument
 * if any of the results of callback function is falsy than every() returns false
 *
 * this method is useful when I want to check whether the elements in the input array
 * have same property or same characteristics, and if so the every() method will return true,
 */

// some()

// Practice
const myNumbers = [3, -5, 1, 10, -7];

const isPositiveNumber = element => typeof element === "number" && element > 0;

const positiveCheck = myNumber.every(isPositiveNumber);
console.log(positiveCheck); // undefined

// EXAMPLE 2

const items = [
  {
    title: "Computer",
    quantity: 10
  },

  {
    title: "Phone",
    quantity: 8
  },
  {
    title: "Headphones",
    quantity: 15
  }
];

// all items have quantity > 5

if (items.every(item => item.quantity > 5))
  console.log("All items are available");

// all items have quantity > 0 and some items have quantity <=5

if (
  items.every(item => item.quantity > 0) &&
  items.some(item => item.quantity <= 5)
)
  console.log("Some items may be sold soon");

// some items have quantity > 0

if (items.some(item => item.quantity === 0));
console.log("All items are sold out");

// IS Array of Numbers SORTED?

// exercise

const a = [5, "abc", 10, 1];
const b = [4, 10, 14, 25, 25, 50];
const c = [150, 132, 80, 40];
const d = [15, 26, 10, 23, 85];

/**
 * Create a function "arrayCheck" with one parameter - "inputArray"
 *
 * If at least one element in the array is not a number - return 0"Some elements are not numbers"
 *
 * If numbers in the array are sorted in ascending order - return "Array is sorted in ascending order".
 * If numbers in the array are sorted in descending order - return "Array is sorted in descending order"
 */

const arrayCheck = inputArray => {
  if (inputArray.some(element => typeof element !== "number")) {
    return "Some elements are not numbers";
  }
  if (
    inputArray.every((element, index, array) =>
      index > 0 ? element >= array[index - 1] : true
    )
  ) {
    return "Array is sorted in ascending order";
  }
};

console.log(arrayCheck(a));
console.log(arrayCheck(b));
console.log(arrayCheck(c));

console.log(arrayCheck(d));

// CHALLENGE 3
// ARE ARRAYS EQUAL OR NOT?

/**
 * Create a function "arraysEqual" with two parameters "arrayOne" and "arrayTwo"
 *
 * If two arrays are equal (have same quantity of the elements and all elements
 * may for e.g arrayOne[0]) === arrayTwo[0] etc. return "true"
 *
 * otherwise return "false"
 */
const a = [1, 2, 3];
const b = [1, 2, 3];

const a1 = a;
// a.push(4); // here with "push "I change this place in the memory

console.log(a === b); // false - because pointers are different
console.log(a === a1); // true, because pointers are equal
// but why they are equal? now they point to the same place in memory

const arraysAreEqual = (arrayOne, arrayTwo) =>
  arrayOne.length === arrayTwo.length &&
  arrayOne.every((element, index) => element === arrayTwo[index]);

/**  I have used anonymous arrow function and assigned it to the variable "arraysAreEquals"
 *  which has two parameters "arrayOne" and "arrayTwo",
 * and I have one expression that contains two conditions
 * in the first condition I check if  length of two arrays is equal, if so this leads to "true"
 * in the second condition  I use every() method and check whether or not each element
 * in the array one is equal to coresponding element in the arrayTwo
 * and we find the coresponding element in the arrayTwo by the same index this element has
 * and that is why I pass here two parameters (element, index)  instead of one */

const c = [2, 1, 3];
const d = [1, 2, 3, 4];

console.log("___");

console.log(arraysAreEqual(a, b)); // true
console.log(arraysAreEqual(a, c)); // false
console.log(arraysAreEqual(a, d)); // false

// CHALLENGE 4
// CHECK IF ELEMENT IS AN ARRAY?

/**
 * Create a function "elementFound" with two parameters "inputArray" and "searchElement".
 * If searchElement" is found in the "inputArray" - return "true"
 * otherwise return "false"
 *
 */
const transport = ["Bus", "Car", "Bicycle", "Airplane"];

// value and type must be equal
const elementFound = (inputArray, searchElement) =>
  inputArray.some(element => element === searchElement);

console.log(elementFound(transport, "Bus")); // true
console.log(elementFound(transport, "Phone")); // false
console.log(elementFound(transport, "Airplane")); // true
