// display("Hi is it a new function");
let strInt = "12333";
let strInt2 = "999";
console.log(strInt + strInt2);
console.log(parseInt(strInt) + parseInt(strInt2));
let strFloat = "33.553";
console.log(parseFloat(strFloat));
let float1 = 2.4;
console.log(Math.ceil(float1));
console.log(Math.floor(float1));

let str1 = "this is new text";
console.log(str1.toUpperCase());

// Declare a variable named speedCheck.
// If speed limit is 50km/h, and your speed is above that,
// print "you are going too fast",
//if speed is lower than 50km/h, print "you are driving below the limit",

let speedCheck = 40;
let speedLimit = 50;
console.log(
  speedCheck > speedLimit
    ? "you are driving too fast"
    : "you are driving below the speed"
);

// Addition
// x + y * s
let x = 2;
let y = 4;
let z = 5;
console.log(x + y / z + 2.3 * 29 + x);

let d, f, r;
d = 5;
f = "Hi I am irie";
console.log(f + d);
// String + Boolean

r = true;
console.log(r + d); // r = 0 d =5 => 5

// String + String
let str2 = "Hi "; // if with a back tick no space `hi`
let str3 = "I am Irie ";
console.log(str2 + str3);
//typeof (Objects, functions , console ...) 🤡 🤓 🍀
console.log(typeof str3);
console.log(typeof x);
console.log(typeof console);
console.log(typeof console.log);
console.log(typeof Math.floor);
console.log(typeof let);
console.log(typeof undefiened);
console.log(typeof null);
console.log(typeof Math.cos);
//console.log(typeof m);

//(0.1 * 0.2)
let floatNum = 0.1;
let floatNum1 = 0.2;

console.log((floatNum * floatNum1).toFixed(5)); // for Bank applications
// multiple values?

//
let floatNum2 = 0.1;
let floatNum3 = 0.2;
let num = 3;
let result = floatNum2 * floatNum3;
let lastResult = result.toFixed(num);
console.log(lastResult);
// 1.23e+5

// Math.cos() method

// The Math.cos() method returns a numeric value between -1 and 1,
//which represents the cosine of the angle.

// cos() is a static method of Math, you always use it as Math.cos(),
//rather than as a method of a Math object (Math is not a constructor).

function getCircleX(radians, radius) {
  return Math.cos(radians) * radius;
}

console.log(getCircleX(1, 10));
// expected output: 5.403023058681398

console.log(getCircleX(2, 10));
// expected output: -4.161468365471424

console.log(getCircleX(Math.PI, 10));
// expected output: -10

//
Math.cos(0); // 1
Math.cos(1); // 0.5403023058681398

Math.cos(Math.PI); // -1
Math.cos(2 * Math.PI); // 1

// 1.23e+3
// x = 3.444
let intStr = "2nd"; // let intStr = "10d"
console.log(parseInt(intStr));

let intStr1 = "Hi this is cool 10";
let floatStr = "1033.3 this is nooo";
console.log(parseInt(intStr));
console.log(parseFloat(floatStr));

// && || logical statements 🐞 🤓
let var1 = 1 > 4; //false
console.log(var1);
let var2 = true; // false it prints   "not cool"
let var3 = true;
console.log(var1 && var2 && var3 ? "cool" : "not cool");
console.log(var1 || var2 || var3 ? "cool" : "not cool");

// Assigning
console.log(ohNo);
var ohNo; // hoisting
let xx = "1"; //type of string
ohNo = 1; // typeof number
console.log(x);
//ohNo = x;
//ohNo = (3 + 4 * 6) / (12.2 + 211);
console.log(ohNo);

//
//console.log(1 == 1 ? "yeah it is" : "nope is is not");
console.log(x == ohNo ? "yeah it is" : "nope it is not");

console.log(true ? "yes" : "Noooo");
console.log(11 ? "yes" : "Noooo");
// all the numbers are true besides zero -0
// if I have a string as a number in it is true
// if I have a string as a letter in it is also true
// if it is an empty string "" is false
// null is nothing and is not a zero (null is an object)
// true is a number
//! console.log is an object inside of a function and is true
// let , var , const  , - revise
