// practice
var global = 4;

function display(str) {
  let newArr = str.toLowerCase().split(" ");
  return newArr; // if i comment out return my function will return nothing , undefined
  global += 2;
}
let newArr = 5;
console.log(display("Hi ma name")); // this is my return

// console.log(newArr); this was local var for display function

//
function checkStr(string) {
  let strToArray = string.split("");
  if (string.includes("JavaScript")) {
  }
}
