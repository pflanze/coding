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
let arrTotal = arr.concat(arr2); //+ arr4; // calling the first array to apply function called concat and then that
//function we accept another array to join

console.log(arrTotal);
// Array.filter()  // crate a new array

/**Array.filter  / filter is a function built from javascript calling another function that we have to declare 

 callback - any function calling another function is called callback */
// names.filter(name) , name is parameter
let result1 = names.filter(name => name.length == 4); //I am calling a function my array name and with filter
//let result1 = names.filter(name => name.length == 4 ||);
// filter creates an array with multiple results
// if we have one result it creates only it
// telling js to work name by name
// this function is processing one name at a time ,
//let result1 = names.filter(x => x.length == 4);
// filter return array
console.log("Hi"); // whatever we write inside the parentheses is a parameter
console.log("Hi");

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
