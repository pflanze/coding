// Create a function that takes a string and a word, and then returns
// true or false depending on whether the word starts with the initial string.
// dictionary("bu", "button") ➞ true
// dictionary("tri", "triplet") ➞ true

/*function dictionary() {
  let str = "I take a string";
  let value = str.startsWith("");
}
dictionary();
console.log(); */

const myArray = ["bu", "button", "tri", "triplet"];

console.log(true, myArray.includes(true));
console.log(10, myArray.includes(10));
console.log("button", myArray.includes("button"));

console.log("button", "starting from index3", myArray.includes("button", 3));

console.log("nul", myArray.includes(null));
