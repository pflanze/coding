function sum(x, y) {
  let z = x + y;
  return z;
}
let x;
console.log(sum(2, 3));
sum(10, 3);

// variable in function
function fun() {
  20;

  const num = 10;
  const num2 = 20;
  //return num + num2;
  return `Hi the sum is ${num + num2} \n I\'m \"`;
}
console.log(fun());
let string = "This is a long text";
console.log(string[0]);
console.log(string.substring(0, 4));
let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
let newStr2 =
  string.substring(0, 2).toUpperCase() + string.substring(2).toLowerCase();
console.log(newStr);
console.log(newStr2);
console.log(typeof d);
console.log(typeof console);
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // array is an object
console.log(typeof console.log);

let blue = true;
console.log(blue ? "Nice I like that" : "Nooooo");
console.log(blue ? `Nice I like ${x} ${arr}` : `Nooooo`);
let i = 5;
if (i < 10) {
  arr.push(1);
} else if ((1 == 20 && 1 == 1) || 3 == 3) {
  arr.unshift(2);
  a++;
}

let color = "black";
switch (color) {
  case "pink":
    arr.push(1);
    break;
  case "black":
    console.log("Hi");
    break;
  default:
    a++;
    console.log("This is not okay");
}
// console.log() - is used only for debugging
// ? question mark is called ternary operator

//const <function name>
const div1 = (x, y) => {
  const you = num => {
    return num;
  };

  you(2); // closure
  return x / y;
};

const div = (x, y) => {
  const you = num => {
    return 3;
  };

  return you();
};
console.log(div());

// div is a variable and the value of it is a function so div is in the global scope

const names = ["Ali", "Olga", "Nancy"];
// Array . includes
console.log(names.includes("Ali")); // true

//Aray.indexOf
console.log(names.indexOf("Ali"));

//Removing items
//Array.pop  // removing the last item
//Array.shift // removing the first item
names.push("Zara");
names.unshift("XX");
names.shift();
names.pop();
console.log(names);

// Array. split
const arr1 = ["Hi", "this", "is"];
const arr2 = ["me", "writing", "to", "you"];
//Array.concat() - to combine two arrays

const arrTotal = arr1.concat(arr2);
arrTotal.push("too");
console.log(arrTotal.join(" "));
// arrTotal.join() - it puts everything in one string, and it is not array anymore its a string

//Array.filter - filter is a callback function
let newArr = names.filter(name => name.length == 3 || name.length == 4);
console.log(names.filter(name => name.length == 3)); // anonymous function
// here the "name" is the parameter of the anonymous function

// Anonymous function

//Array.find() - // returns the value of the first element
let arrCall = names.find(name => name.length < 1);
// every index should be the result

//reverse()
//const str = "JavaScript"
// .slit("")
//.reverse()
//
