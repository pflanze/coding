function sum(x, y) {
  let z = x + y;
  return z;
}
let x;
console.log(sum(2, 3));
sum(10, 3);

// // variable in function
 function fun() {
   20;

   const num = 10;
   const num2 = 20;
//   //return num + num2;
//   return `Hi the sum is ${num + num2} \n I\'m \"`;
// }
// console.log(fun());
// let string = "This is a long text";
// console.log(string[0]);
// console.log(string.substring(0, 4));
// let newStr = string[0].toUpperCase() + string.substring(1).toLowerCase();
// let newStr2 =
//   string.substring(0, 2).toUpperCase() + string.substring(2).toLowerCase();
// console.log(newStr);
// console.log(newStr2);
// console.log(typeof d);
// console.log(typeof console);
// const arr = [1, 2, 3, 4, 5];
// console.log(typeof arr); // array is an object
// console.log(typeof console.log);

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
//  console.log() - is used only for debugging
//  ? question mark is called ternary operator

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

//  div is a variable and the value of it is a function so div is in the global scope

 const names = ["Ali", "Olga", "Nancy"];
//  Array . includes
 console.log(names.includes("Ali")); // true

// //Aray.indexOf
 console.log(names.indexOf("Ali"));

// Removing items
//Array.pop  // removing the last item
//Array.shift // removing the first item
 names.push("Zara");
names.unshift("XX");
 names.shift();
 names.pop();
 console.log(names);

//  Array. split
 const arr1 = ["Hi", "this", "is"];
 const arr2 = ["me", "writing", "to", "you"];
 //Array.concat() - to combine two arrays

 const arrTotal = arr1.concat(arr2);
 arrTotal.push("too");
console.log(arrTotal.join(" "));
//  arrTotal.join() - it puts everything in one string, and it is not array anymore its a string

// Array.filter - filter is a callback function
 let newArr = names.filter(name => name.length == 3 || name.length == 4);
 console.log(names.filter(name => name.length == 3)); // anonymous function
//  here the "name" is the parameter of the anonymous function
//  name is a parameter , we do not declare parameters

//  Anonymous function

//Array.find() - // returns the value of the first element
 const myArray = ["Irie", "Anna", "Daniel", "George"];
 let arrCall = names.find(name => name.length >= 1);
 console.log(arrCall);

// 
 const numbers = [1, 2, 4, 55, 67];
 let arrNumbers = numbers.find(num => (num = 55));
 console.log(arrNumbers);

//  every index should be the result

// reverse()
 const str3 = "JavaScript";
 let newRevStr = str3
   .split("")
   .reverse()
   .join("");
 console.log(newRevStr);

 /**
  * c4n y0u r34d th15? Create a function that takes a string as an argument and returns a coded (h4ck3r 5p34k)
  * version of the string. NB: for your program to work properly,
  * the function should replace all ’a’s with 4, ’e’s with 3, ’i’s with 1, ’o’s with 0, and ’s’s with 5.
  *
  *declare a variable at the top
 */
//  Examples

 const hacking = str => {
   let hackedArr = [];

  let toSmall = str.toLowerCase();
//   split the individual character  so crate another variable
   let letters = toSmall.split("");
   for (let i = 0; i < letters.length; i++) {
     if (letters[i] == "a") {
     //if it is equal to 'a'
       letters[i] = 4;
       hackedArr.push(letters[i]);
    } else if (letters[i] == "e") {
       letters[i] = 3;
      hackedArr.push(letters[i]);
    } else if (letters[i] == "i") {
      letters[i] = 1;
       hackedArr.push(letters[i]);
     } else if (letters[i] == "o") {
       letters[i] = 0;
       hackedArr.push(letters[i]);
           } else if (letters[i] == "s") {
      letters[i] = 5;
      hackedArr.push(letters[i]);
     } else {
       hackedArr.push(letters[i]);
    }
   }
   let result = hackedArr.join("");
   return result;
 };
 let codeStr = "Hi I am nice a";
 console.log(hacking(codeStr));

//  with one = we assign and with two == we compare

//
 function isSymmetrical(num) {
   let numToStr = num.toString();
   let result = numToStr
     .split("")
     .reverse()
     .join("");
  if (numToStr == result) {
     return true;
   } else {
     return false;
  }
 }
 console.log(isSymmetrical(33233));
 console.log(isSymmetrical(1234556));
 console.log(isSymmetrical(1));

// 
 function palindrome(str) {
   var len = str.length;
   var mid = Math.floor(len / 2);

   for (var i = 0; i < mid; i++) {
     if (str[i] !== str[len - 1 - i]) {
       return false;
     }
  }

   return true;
 }
 console.log(palindrome);

// EXERCISE
/**
 * snake_case ➞ camelCase Create a function toCamelCase() that takes a single string
 * in snake_case and converts it into camelCase.
 * Examples:
 * toCamelCase(“hello_world”) ➞ “helloWorld”
 * toCamelCase(“javascript_is_fun”) ➞ “javaScriptIsFun”
 *
 */
const toCamelCase = str => {
  let splitStr = str.split("_");
  let camelArray = [];
  for (let i = 0; i < splitStr.length; i++) {
    let firstChr, restStr;
    if (splitStr[i] == splitStr[0]) {
      camelArray.push(splitStr[0]);
      continue;
    } else {
      firstChr = splitStr[i].slice(0, 1);
      restStr = splitStr[i].slice(1, splitStr[i].length);
    }
    let newWord = firstChr.toUpperCase() + restStr;
    camelArray.push(newWord);
  }
  let result = camelArray.join("");
  return result;
};
console.log(toCamelCase("snake_Log_hi"));

// Exercise 

/*let strSplit = "I'm a little tea pot".split(' ');
var strSplit = ["I'm", "a", "little", "tea", "pot"];
str[i].charAt(0).toUpperCase()
*/


/**
 * Title Case a Sentence With a FOR Loop
 * 
 */
function titleCase(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  }
  return str.join(' ');
}
titleCase("I'm a little tea pot");


//

function titleCase(str) {
  // Step 1. Lowercase the string
  str = str.toLowerCase();
  // str = "I'm a little tea pot".toLowerCase();
  // str = "i'm a little tea pot";
  
  // Step 2. Split the string into an array of strings
  str = str.split(' ');
  // str = "i'm a little tea pot".split(' ');
  // str = ["i'm", "a", "little", "tea", "pot"];
  
  // Step 3. Create the FOR loop
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
  /* Here str.length = 5
    1st iteration: str[0] = str[0].charAt(0).toUpperCase() + str[0].slice(1);
                   str[0] = "i'm".charAt(0).toUpperCase()  + "i'm".slice(1);
                   str[0] = "I"                            + "'m";
                   str[0] = "I'm";
    2nd iteration: str[1] = str[1].charAt(0).toUpperCase() + str[1].slice(1);
                   str[1] = "a".charAt(0).toUpperCase()    + "a".slice(1);
                   str[1] = "A"                            + "";
                   str[1] = "A";
    3rd iteration: str[2] = str[2].charAt(0).toUpperCase()   + str[2].slice(1);
                   str[2] = "little".charAt(0).toUpperCase() + "little".slice(1);
                   str[2] = "L"                              + "ittle";
                   str[2] = "Little";
    4th iteration: str[3] = str[3].charAt(0).toUpperCase() + str[3].slice(1);
                   str[3] = "tea".charAt(0).toUpperCase()  + "tea".slice(1);
                   str[3] = "T"                            + "ea";
                   str[3] = "Tea";
    5th iteration: str[4] = str[4].charAt(0).toUpperCase() + str[4].slice(1);
                   str[4] = "pot".charAt(0).toUpperCase() + "pot".slice(1);
                   str[4] = "P"                           + "ot";
                   str[4] = "Pot";                                                         
    End of the FOR Loop*/
  }
  
  // Step 4. Return the output
  return str.join(' '); // ["I'm", "A", "Little", "Tea", "Pot"].join(' ') => "I'm A Little Tea Pot"
}

titleCase("I'm a little tea pot");

//Preserve proper capitalization in javascript as in the

/*let str = ‘Cats are great pats.’;


let lower = str.toLowerCase();

let upper = str.toUpperCase();

let firstLetter = str.charAt(0).toUpperCase() + str.slice(1); */


// EXERCISE 

/**
 * 
 * Pig Latin Translation. Create a function that takes a string of words and 
 * moves the first letter of each word to the end of it, then adds ‘ay’ to the end of the word. 
 * This is a basic form of “Pig Latin”.
* Move the first letter of each word to the end of the word.
* Add “ay” to the end of the word.
* Words starting with a vowel (A, E, I, O, U) append “way” to the end instead.
 * 
 */

function pigLatin(str){
  let translation = []; // declare an empty array 
  let lowerCase = str.toLowerCase();
  let splitStr = lowerCase.split(' ');

  //const vowels = ['a', 'e', 'o', 'i','u'];
  for (let i =0; i < splitStr.length; i++) { // i is 0  splitStr = hi
    let firstChr = splitStr[i] [0]; // with bracket notation we register "hi"
    let remainder = splitStr[i].slice(1,splitStr[i].length);  // igo

    /*if (vowels.includes(firstChr.toLowerCase)) { */
const newString = remainder + firstChr + "ay" 
     /* const (vowels.includes(firstChr.toLowerCase)) { */
      let firstChrVal = 
        (i? firstChr : firstChr.toUpperCase()) + remainder +'hay';

    }else {
      if (i == 0) {
        let firstChrRan =brestOfŜtr[0];
        let wordRem =restOfStr.slice(1, remainder.length);
        remainder = firstChrRan.toUpperCase() + wordRem;
      }
    }
    const firstChrMain =  reminder + firstCh + 'ay';
    translation.push(firstChrMain)
  }
  let result = translation.join("");
  return result;
  

}
const strPig = "hi go";
console.log(pigLatin(strPig))