// DCI - Class Exercises JavaScript
/*for (let i = 0; i <= 10; i++) {
  //i=0
  console.log(i);
}
*/
//In while the given condition is checked at the start of the loop.

//If the condition is false then  the loop is not executed at all.

//Only when the condition is true the loop block is executed.

//In do while first the loop block is executed then condition is checked at the end of  1st time execution.

//ex for while:

//int a=10;

//while(a==10)

//{

//  printf("HEllo\n");

//  a++;

//}
// local scope and global scope

/*while (i < 10) {
    text += "The number is " + i;
    i++;
  }

  for (let i = 0; <= 10; i++) {
      if (i % 2 == 0) {
          console.log(i);
          i += 2;
      }
  } */
//whatever is inside the { body } is local

for (let index = 100; index <= 1000; ) {
  console.log(index);
  index += 100;
}

//do (...)
//while()
for (let i = 0; i <= 100; i++) {
  if (i == 30) {
    break;
  }
  console.log(i);
}

// where we use break?

/*for (let w = 0; w <= 10; w++) {
    if (w % 2 == 0 && w == 8) {
        console.log(w);
       // break;
    }
}
 */
let xx = false;
for (let w = 0; w <= 100; w++) {
  if (xx) {
    console.log("that is it");
    break; // ! we use break when we want to exit the loop
  }
  if (w == 20) {
    xx = true;
  }
}

// IN JS we can nest anything
// NESTED LOOPS

let re = 0;
for (let i = 1; i <= 10; i++) {
  re = i * 3;
  console.log(`${i} * 3 = ${re}`);
}

// a loop inside a loop
let res2 = 0;
for (let i = 1; i <= 10; i++) {
  //1 = 3
  for (let j = 1; j <= 10; j++) {
    // j = 1
    res2 = i * j;
    console.log(`${i} * 3 = ${res2}`);
  }
}

let str = "This is a long text";
for (let i = 0; i < str.length; i++) {
  console.log(`This is the ${i} letter is ${str[i]} `); // bracket notation
}

// EXERCISE ONE
/*
 **  Find Sum of N Numbers
 */
function findSum(n) {
  let result = 0;
  for (let i = 1; i <= n; i++) {
    result = result + i;
  }
  return result;
}

let n = 10;
console.log(`Sum of numbers from 1 to ${n} is ${findSum(n)}`);

let numbers = [10, 20, 30, 40]; // sums to 100
let sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

/*
sumTo(1) = 1;
sumTo(2) = 2 + 1 = 3;
sumTo(3) = 3 + 2 + 1 = 6;
sumTo(4) = 4 + 3 + 2 + 1 = 10; */

//  Write JavaScript program to add up the numbers from 1 to 10
for (let input = 1; input <= 10; input++) {
  console.log(input);
}

// second solution
let counterSum = 0;
for (let i = 1; i <= 20; i++) {
  counterSum += i; // 3
}
console.log(counterSum);

// EXERCISE 2

//There are i bottles of beer on the wall. Write a program that will output,
//“There is one bottle of beer on the wall.” “There are two bottles of beer on the wall”
//up until there are five bottles.

// SOLUTION ONE
var word = "bottles";
var count = 99;
while (count > 0) {
  if (count == 1) {
    var word = "bottle";
  }
  console.log(count + " " + word + " of beer on the wall");
  console.log(count + " " + word + " of beer,");
  console.log("Take one down, pass it around,");
  count = count - 1;
  if (count > 0) {
    if (count == 1) {
      var word = "bottle";
    }
    console.log(count + " " + word + " of beer on the wall.");
  } else {
    if (count < 1) {
      var word = "bottles";
    }
    console.log("No more " + word + " of beer on the wall.");
  }
}

// SECOND SOLUTION
var bottles;
for (counter = 99; counter >= 1; counter = counter - 1) {
  if (counter == 1) {
    bottles = "bottle";
  } else {
    bottles = "bottles";
  }
  console.log(counter + " " + bottles + " of beer on the wall.");
  if (counter < 99) {
    console.log("");
    console.log(counter + " " + bottles + " of beer on the wall.");
  }
  console.log(counter + " " + bottles + " of beer.");
  console.log("Take one down.");
  console.log("Pass it around.");
  if (counter == 1) {
    console.log("No bottles of beer on the wall.");
  }
}

// SOLUTION THREE
let text = "of beer on the wall";
for (let i = 1; i <= 5; i++) {
  if (i > 1) {
    console.log(`This is ${i} bottles ${text}}`);
  } else {
    console.log(`Here are ${i} bottles ${text}`);
  }
}

//EXERCISE 3
//
//
//The odd/even reporter. Write a program that will iterate from 0 to 20. For each iteration,
// it will check if the current number is even or odd, and report that to the screen (e.g. “2 is even”).

for (let x = 0; x <= 20; x++) {
  if (x === 0) {
    console.log(x + " is even");
  } else if (x % 2 === 0) {
    console.log(x + " is even");
  } else {
    console.log(x + " is odd");
  }
}

// even number should be zero
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  } else if (i % 3 == 0) {
    console.log(`${i} is odd`);
  }
}

//
for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is even`);
  }
  if (i % 2 == 0) {
    console.log(`${i} is odd`);
  }
}
console.log("Thanks");

// print my name 10 times
for (let i = 1; i <= 10; i++) {
  console.log("Irie");
}

// to print box with "y"

let box = "";
for (let i = 0; i <= 4; i++) {
  box += "YYY \n";
}

console.log(box);
// var, let, const

// EXERCISES
// the box of "Y"
// 1, 2, 4, 8... 128

let s = "";
for (let i = 1; i < 129; i += 1) {
  s += i + " ";
}
console.log(s);

//

let string = "";
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    string += i + " ";
  }
  console.log(string);
  string = "";
}
for (let i = 1; i <= 3; i++) {
  for (let j = 0; j <= 4; j++) {
    string += j + " ";
  }
  console.log(string);
  string = "";
}
// 0, 2, 4... 10

(str = ""), (i = 1);
while (i <= 10) {
  str += i + "";
  i += 1;
}

console.log(str);

//
var a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  b = [];

for (var i = 0; i < a.length; ++i) {
  if (a[i] % 2 === 0) {
    b.push(a[i]);
  }
}

// HOMEWORK
// 3, 6, 9 ... 15

// 9, 8, 7... 0
// 1 1 1 2 2 2 3 3 3 4 4 4
// 0 1 2 3 4 0 1 2 3 4 0 1 2 3 4

// ARRAYS and Functions
// var, let, const
let firstName = "Irie";
let firstName1 = "Anna";
let firstName2 = "Olga";
let arr = ["Irie", "Anna", "Olga", "Nancy"]; //How to access this data, bracket notation
console.log(arr[2]);
let arrInt = [1, 2, 3, 4];
// every value of the array has an index number which starts from 0
console.log(arrInt[3]); // we can assign a value to the array

let arrNum = ["First", "2nd", "3rd", "4th"];
console.log(arrNum.length);
for (let i = 0; i < arrNum.length; i++) {
  console.log(`${i} is the ${arrNum[i]}`);
}

// Fill an array ,

// let arrSt = []; // empty array

// array filled with DATA
let arrSt = [];
for (let i = 0; i <= 10; i++) {
  arrSt[i] = 2 + i; // arrStr[0] = 2 + 0
  console.log(arrSt);
}
// console.log(arrSt)
//console.log(arrSt[i]);
