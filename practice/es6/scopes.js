// Scopes of the var and let Keywords

/**
 * When you declare a variable with the var keyword, it is declared globally, or locally if declared inside a function.

The let keyword behaves similarly, but with some extra features. 
When you declare a variable with the let keyword inside a block, 
statement, or expression, its scope is limited to that block, statement,
 or expression.
 */

// example
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

/**
 * With the var keyword, i is declared globally.
 *  So when i++ is executed, it updates the global variable.
 * This code is similar to the following:
 */

var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray);
// returns [0, 1, 2]
console.log(i);
// returns 3

// solution
function checkScope() {
  "use strict";
  let i = "function scope";
  if (true) {
    let i = "block scope";
    console.log("Block scope i is: ", i);
  }

  console.log("Function scope i is: ", i);
  return i;
}
