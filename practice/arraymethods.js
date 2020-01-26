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
// console.log(element); // gives error

// map()
/**
 * it return Output Array
 *
 *
 *
 */

// map()  - practice
// square value
const myNumbers = [1, 5, 7];
let mySquareNumbers = [];
// for-loop
for (let i = 0; i < myNumbers.length; i++) {
  mySquareNumbers.push(myNumbers[i] * myNumbers[i]);
}
console.log(mySquareNumbers);
console.log(myNumbers);

// ANOTHER WAY IS with map() method
// map() helper method instead of for-loop

const myNumbers2 = [1, 5, 7];
// map() and this function will have one parameter
let mySquareNumbers2 = myNumbers2.map(element => element * element);

console.log(mySquareNumbers2);
console.log(myNumbers2); // initial array remain unchanged
// map() method - when we call map() helper method on specific input array,
// it will produce brand new output array.
// It will not mutate initial input array

// another way of mapping
// map() with external function
const myNumbers3 = [1, 5, 7];
// map() and this function will have one parameter
const SquareNumbers = element => element * element;
let mySquareNumbers3 = myNumbers3.map(squareNumbers3); //squareNumbers is the argument of the map() function
// in this case map() helper method will take each element of the myNumbers array and pass it as single argument to the
// squareNumbers function and this function will return element multiplied by element and
// this result will be pushed to the new array. That is "mySquareNumbers" array.
console.log(mySquareNumbers3);
console.log(myNumbers3); // [1, 5, 7]

// the result remains unchainged

// map() with external function with index
// first argument is element and second argument is index
const squareNumbers4 = (element, index) => {
  console.log("Elements at the index" + index + "is" + element);
  return element * element;
};
// this option shows that inside the above arrow function expression , we have access
//not only to the element of the array but also to its index,
let mySquareNumbers4 = myNumbers.map(squareNumbers);

console.log(mySquareNumbers4);
console.log(myNumbers4);

// OPTION 5

// map() with Math.pow

let mySquareNumbers5 = myNumbers5.map(element => Map.pow(element, 2));
// in this example I take each element of the "myNumbers" array and
//pass it as first argument to Map.pow method  and second argument is 2,

console.log(mySquareNumbers5);
console.log(myNumbers5);

// OPTION 6
// map() with direct call to Math.pow()

// "index" in Math.pow will be treated as exponent value
let mySquareNumbers5 = myNumbers5.map(Map.pow);
// in this example I take each element of the "myNumbers" array and
//pass it as first argument to Map.pow method  and second argument is 2,

console.log(mySquareNumbers5);
console.log(myNumbers5);

//  !REMEMBER:
// we have to be careful when pass any function by its name to Map method , in each iteration
// map() method will pass 3 arguments to this callback function ,
// and those 3 arguments are element, index and initial array

// map() helper method requires one argument and this argument is a CALLBACK function

// CHALLENGE TASK

//
/**From the "postJSON" array create "posts"  array
 * that will consists of JavaScript objects*/

const postJSON = [
  '{"postId": 1355, "commentsQuantity":5}',
  '{"postId": 5131, "commentsQuantity":13}',
  '{"postId": 6134, "commentsQuantity":2}'
];
// OPTION WITH FOR-LOOP
var post = []; // here I declared new variable 2post using var
/**  i have declared temporal variable "i " inside of the for-loop
 *   "i" temporal variable because of "let" and it is limited to this block scope
 *   but "post" variable is not temporal and can be used several times
 *   across the scope where it was declared in the global scope,
 *  Also is totally ok if I use "let" instead of "var"
 * and adding new elements , and that is why "var" tells us that the variable "post" can be changed.
 *
 * If I declare with "const" I can mutate
 * I cannot reassign the variable but I can push new elements to it
 */
for (let i = 0; i < postJSON.length; i++) {
  posts.push(JSON.parse(postJSON[i]));
}

// OPTION WITH MAP()
// why "const " is used here instead of "var" or "let"?
/**
 * this const declaration is a signal that this variable should not be changed
 * in the future, it means I should not add any elements to it and should not add new elements to it
 * but
 */
// map() Option 1
const posts = postsJSON.map(JSON.parse);
// i am not pushing new elements so it is better to use "const" here
// i am using map() method and pass JSON.parse as a callback function  to the map() function
// and
// result will be the same array with 3 objects

// map() Option 2
// with anonymous function
const posts = postJSON.map(post => JSON.parse(post));

console.log(posts);

// NEXT METHOD

// filter()
