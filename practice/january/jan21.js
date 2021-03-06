// Array METHODS
//Array

//
// str is the parameter is a variable used inside of the function and the value of it is used outside the function

//
function display(str) {
  console.log(str); // if I have an empty brackets
}
display("Irie"); // the result outside the function

// Array.isArray(arr) // to check

const names = ["Irie", "Anna", "Olga", "Nancy"];
let x = 1;
console.log(Array.isArray(names));
// Array belongs to javascript array which is the default javascript object
// Array.includes()
console.log(names.includes("Irie")); // if so it wil be true if not it will be false;
// to show that this is there or not
// includes is case sensitive
// name is our own array
console.log(names.indexOf("Irie")); // indexOf shows where is located

//Array.reverse   //REVERSE

//use reverse to shift the last index to be first
let str = "Irie";
console.log("Irie");

let rev = names.reverse();
console.log(typeof rev);
console.log(rev);

//Array concat()

let arr = [1, 2, 3]; //declare array one with index
let arr2 = [4, 5, 6];
//let totalArr2 = arr1 + "" + arr2;
//console.log(totalArr2);
let arrTotal = arr.concat(arr2); //+ arr4; // calling the first array and apply function called concat and then that
//function we accept another array to join
// the parameter for this function is my second array
console.log(arrTotal);

//! Array.filter
// Array.filter()  // crate a new array

/**Array.filter  / filter is a function built from javascript calling another function that we have to declare 

 callback - any function calling another function is called callback */
// names.filter(name) , name is parameter
let result1 = names.filter(name => name.length == 7); //I am calling a function my array name and with filter
//let result1 = names.filter(name => name.length == 4 ||);
// passing one name at a time
// filter creates an array with multiple results
// if we have one result it creates only it
// telling js to work name by name
// this function is processing one name at a time ,
//let result1 = names.filter(x => x.length == 4);
// filter return array

console.log("Hi"); // whatever we write inside the parentheses is a parameter
console.log("Hi");

//let result1 = names.find(name => name.length == 4);
console.log(result1);
/**function fun (name {
    return x name.length == 4;
    return x
}
let result2 = names.filter (fun) */

//I am passing
//Array.find - comes back with the first
//returns the value of the first result, array.find is calling and waiting for a result
let result2 = names.find(name => name[0] == "A" && name[1] == "G"); // ES6 function
console.log(result2);

//Array.map()  // creates a new array

const intArray = [2, 3, 4, 5, 6];
let result3 = intArray.map(x => x + 1);
console.log(result3);

//Function calling another function
//Array.reduce()
/**The reduce() method reduces the array to a single value. The reduce() method
 *  executes a provided function for each value of the array (from left-to-right).
 * The return value of the function is stored in an accumulator (result/total). */

/**
 * The reduce() method executes a reducer function (that you provide)
 * on each element of the array, resulting in a single output value.
 */

const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
// another way
const array = [1, 2, 8, 14];
const sum = array.reduce((a, b) => a + b);

// Array.includes() ; checking if the parameter is inside
//he includes() method determines whether an array contains a specified element.

//This method returns true if the array contains the element, and false if not.
// what is the difference between find and includes ?

// EXERCISES - array,

/**
 * EXERSICE ONE 
 * Reverse a string in javascript 
 * 
 * Reverse a String With Built-In Functions
The split() method splits a String object into an array of string by separating the string into sub strings.
The reverse() method reverses an array in place. ...
The join() method joins all elements of an array into a string.
 * 
 */
// ! REVERSE a string in JavaScript with split method
const str1 = "JavaScript";
let strToArr = str1.split("");
strToArr.reverse();
let revStr = strToArr.join("");
console.log(revStr);

// another
function reverseString(str) {
  return str;
}
reverseString("JavaScript");

//  Second way
function reverseString(str) {
  // Step 1. Use the split() method to return a new array
  var splitString = str.split(""); // var splitString = "javascript".split("");
  // ["j", "a", "v", "a", "s", "c", "r", "i", "p", "t"]

  // Step 2. Use the reverse() method to reverse the new created array
  var reverseArray = splitString.reverse(); // var reverseArray = ["j", "a", "v", "a", ].reverse();
  // ["s", "c", "r", "i", "p", "t"]

  // Step 3. Use the join() method to join all elements of the array into a string
  var joinArray = reverseArray.join(""); // var joinArray = ["j", "a", "v", "a",].join("");
  // "java"

  //Step 4. Return the reversed string
  return joinArray; // "script"
}

reverseString("JavaScript");
console.log();

//

/**let string = "JavaScript";
console.log("JavaScript");

let rev = names.reverse();
console.log(typeof rev);
console.log(rev); */

/**
 * EXERCISE TWO
 * Make an array of your siblings’ names or your favorite movie characters’ names.

 /**
  
  * Combine these two arrays.
Add your pets’ names.
Reverse the order of the array.
Access one of your parents’ names.
Update the name of one of your parents.
  *  */

const siblingsNames = ["Alina", "Daniel", "Nadia", "George"];

//Make an array of your parents’ names.
const parNames = ["Petrova", "Petrov"];
// combine those two arrays
const bffArray = siblingsNames.concat(parNames);
console.log(bffArray);
// add your pats
bffArray.push("Dasy");
bffArray.push("Anna");
// reverse the order of the
bffArray.reverse();
//Access one of your parents names
//console.log(bffArray.find(value => value == "Petrov"));
let mom1 = bffArray.find;

let mom = bffArray[2];
mom = "Katy";
bffArray[2] = mom;
console.log(bffArray);
console.log(mom);

// EXERCISE - FUNCTION SCOPES

function sum2(x, y) {
  // function declaration
  //return x + y;
  let fun = "Too in function";
  console.log(fun);
  let result = x + y;
}

sum2(2, 4);
let fun = sum2(2, 4); // function call
//console.log(result);
console.log(fun);
// result is local variable
// everything that happens in the function stays in function
//the value of the parameter comes outside the function
//call the function with 2 parameters

function div(x, y) {
  return x / y;
}
function age(x) {
  if (x == 30) {
    return "You are cool";
  } else {
    return "You are nice";
  }
}
console.log(age(20)); // age is the call of the function

//

const numbers = [1, 2, 3, 4, 5, 6, 10, 45, 66];
const numbers2 = [14, 442, 53, 53, 664, 5, 6, 10, 45, 66];

// (array) is the parameter
function arrBig(array) {
  // num is index so one index at a time
  let result = array.filter(num => num >= 5); // every array I pass on function call
  return result;
}
arrBig(numbers); //const numbers [];
//function arrBig(array)
console.log(arrBig(numbers));
console.log(arrBig(numbers2));

// filter is a CALLBACK

// NEW EXERCISE -

function fourArrChar(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    // with this line is looping
    if (array[i].length == 4) {
      result.push(array[i]);
    }
  }
  return result;
}

const names2 = ["Irie", "Mary", "Daniel", "Anna"];
console.log(fourArrChar(names2));

// every day function to deal with 🚀 🤖 🤣
// i cannot call a variable which is not declared,

// new function example
function Ochr(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i][0] == "0") {
      result.push[i];
    }
  }
  return result;
}

const names3 = ["Irie", "Karina", "Daniel"];
console.log(fourArrChar(names2));
console.log(Ochr(names2));

// function
// global array
/*const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
]; */
// num is parameter
/*function nameOfThatMonth(num) {
  let result = "";
  switch (num) {
    case 1:
      result = monthNames[0];
      break;
    case 2:
      result = monthNames[1];
      break;
    case 3:
      result = monthName[2];
      break;
    case 4:
      result = monthName[3];
      break;
    case 5:
      console.log(monthName[4];
      break;
    case 5:
      console.log(monthName[5];
      break;
    case 5:
      console.log(monthName[6];

      break;
    case 5:
      console.log(monthName[7];
      break;
    case 5:
      console.log(monthName[8];
      break;
    case 5:
      console.log(monthName[9];
      break;
    case 5:
      result = monthName[10];

      break;
    case 5:
      result = monthName[11];

      break;
    default 5:
      result = monthName[12];
  }
}
console.log(nameOfThatMonth(100));
console.log(nameOfThatMonth(2));
console.log(nameOfThatMonth(22)); */

// function array months

let month = new Array();

month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

for (n = 3; n < 24; n++) {
  console.log(
    month[(n - 3) % 12] +
      "," +
      month[(n - 2) % 12] +
      "," +
      month[(n - 1) % 12] +
      "," +
      month[n % 12]
  );
}

//Use the % Operator: If you increment n just use n%12,

// NEW SOLUTION

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "November",
  "December"
];

function nameOfThatMonthEasyVersion(num) {
  let result = "";
  let newNum = num - 1;
  if (num >= 1 && num <= 12) {
    result = monthNames[newNum];
  } else {
    result = "Sorry it is not a month";
  }
  return result;
}
console.log(nameOfThatMonthEasyVersion(15));
// when changing the number it gives the current month / 15 is not a month

//create a function that and array and each item from that array array to be reversed
const myArr = ["one", "two", "three"];

function arr1(numbers) {
  //console.log("array5:", array5);
}
console.log(arr1, arr);
// expected output: "array:" Array ["one", "two", "three"]

const reversed = myArr.map(item =>
  item
    .split("")
    .reverse()
    .join("")
);

console.log("reversed:", reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

console.log("arr:", arr);
// expected output: "array1:" Array ["three", "two", "one"]

// Array

/**function reverseNames(arr) {
  let newArray = [];
  let strToArr = "";
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i];
    strToArr = str.split("");
    strToArr.reverse();
    revStr = strToArr.join("");
    newArray.push(revStr);
  }
  return newArray;
}
console.log(); */

// PRO WAY

function reverseNames(arr) {
  let newArray = [];
  let str = "";
  let revStr = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]
      .split("") // apply a method
      .reverse()
      .join("");
    newArray.push(revStr);
  }
  return newArray;
}

// we add semicolon  only after the last method we apply

// REDUCE

/**
 * Reduce comes with some terminology such as reducer & accumulator.
 * The accumulator is the value that we end with and
 * the reducer is what action we will perform in order to get to one value.
 * remember a reducer will only return one value and one value only hence the name reduce.
 */

/**
 * The above will give us 30 (5 + 10 + 15). This works just fine, but we can
 * do this with reduce instead which will save us from mutating our value variable.
 * reduce is  used in state management (Redux).
 */

/*arr.reduce(callback, initialValue);
const value = 0;

const number = [5, 10, 15];

for (let i = 0; i < number.length; i++) {
  value += number[i];
}
*/
//
/* this is our initial value i.e. the starting point*/
//const initialValue = 0;

/* numbers array */
//const numbers = [5, 10, 15];

/* reducer method that takes in the accumulator and next item */
//const reducer = (accumulator, item) => {
// return accumulator + item;
//};

/*  give the reduce method our reducer function and my initial value */
//const total = numbers.reduce(reducer, initialValue);

/**const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flattenArray(data) {
  // initial value  is a blank array
  const initialValue = [];

  // call reduce on our data
  return data.reduce((total, value) => {
    // if the value is an array then recursively call reduce
    // if the value is not an array then just concat our value
    return total.concat(Array.isArray(value) ? flattenArray(value) : value);
  }, initialValue);
}

*/

const euros = [29.76, 41.85, 46.5];

const sumTotal = euros.reduce((total, amount) => total + amount);
//"total" and "amount" are two parameters (one parameter plays the role of an  acumulator and
//the other parameter a value )
sumTotal; // 118.11
console.log(sumTotal);

/**
 *accumulator is a box and currentValue running through
 * reduce method execute a reducer function , it is looking for a function I have to provide
 * Reduce accepts two parameters, the total and the current amount.
 * The reduce method cycles through each number in the array much like it would in a for-loop.
 * When the loop starts the total value is the number on the far left (29.76)
 * and the current amount is the one next to it (41.85).
 *
 * want to add the current amount to the total.
 * The calculation is repeated for each amount in the array,
 * but each time the current value changes to the next number in the array, moving right.
 * When there are no more numbers left in the array the method returns the total value.
 *
 *
 */

//  with reduce we can change the OBJECT STRUCTURE
// example
// write a function inside of a variable
