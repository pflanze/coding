//  Create a function will calculate how many times empty space occurred in a given string
// by the user and print out only the characters number

const emptySpace = string => {
  let counter = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] == " ") {
      counter++;
    }
  }
  return counter;
};
let string1 = "text to split";

console.log(emptySpace(string1));
