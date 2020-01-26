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
