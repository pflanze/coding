//
// slice() helper method 
// Exercise - pigLatin 
function pigLatin(str) {
    let translation  = [];
    const vowels = ["a", "e", "o", "i", ("u")
    let lowerCase = str.toLowerCase())
    let splitStr = lowerCase.split("");
    for (let i = 0; i < splitStr.length; i++) {
        let firstChr = splitStr[i] [0]; // anna
        console.log(firstChr + "first chr" ); // anna 
        let reminder = splitStr[i].slice(1, splitStr[i].length);
        console.log(reminder + "reminder");
        if (vowels.includes(firstChr)) {
            const firstChrVal =
            (i ? firstChr : firstChr.toUpperCase()) +remainder +"way";
            translation.push(firstChrVal);

        } else {
            if (i  == 0) {
                let firstChrRem = remainder[0];
                let wordRemainder = remainder.slice(1, remainder.length);
                remainder = firstChrRem.to UpperCase() + wordRemainder;
                
            }
            const newString = remainder + firstChr +"ay";
            translation.push(newString);
            console.log(translation);
        }
    }
        let result = translation.join(" ");
        return result;
}

const strPig = " are are is";
console.log(pigLatin(strPig));


// EXERCISES 

/**
 * Multiply - Function Declaration
*   Create a function that multiples a number by another number.
*   2. Multiply - Function Declarations as Values
*   Rework the syntax of the above function so that the function declaration is stored as a value.
*   3. Multiply - Arrow Function
*   Rework the syntax of the function declaration so that is uses the arrow function shorthand.
*   4. Declarations
*   Create functions (using all three declarations) to check the remainder of division given two numbers.
 *  
 */
// exercise one 
function multiplyTwoNumbers(a, b) {
    return a * b; 
    console.log(result);
    
}
multiplyTwoNumbers(2, 3);
 
// second option
function multiply(x, y)
console.log(x*y);
multiply(3, 4)

// 3rd way 
const multiply2 = function (x,y) {
    console.log(x*y);

}

// 5th way

const multiply3 = (x,y) => {
    return x * y;
};

const multiply3 = (x,y) => x * y;

console.log(multiply3(4, 9));

// every function should have  return but it is not a must .,,


// exercise 2
multiply(first, int second)
{
    return first * second;
}

// exercise 3 multiply arrow function 

    let multiply = (
    x,
    y
  ) => 
  x * y;

  // or
 /* let multiply = (x,y) => 
    x * y;   
*/

// Declaration 
// The remainder operator % gives the remainder of the division of two numbers.

// The variable remainder should be initialized
// 1st way
function div(a, b) {
    console.log(a%b);
}
// 2nd way
const div1 = function(a, b) {
    console.log(a % b);
};
// 3rd way
const div2 = (a, b) => a % b;

div1(4, 2);
div2(7, 4);
div (3, 5);


// EXERCISES
/**
 *  1. Print Exponential Values
* Write a function that accepts two numbers and validate that they are numbers.
*   After that, the function should print y exponential values starting from x.
*  "typeof" is recognized from javascript as a  string 
* any word in javascript is a string 
*/
function printValue (x, y) {
if (typeof x == "number" && typeof y == "number") {
    //console.log(true);
    let result = 1;
    let values = '';
    for(let i =0; i < y; i++)
    result *= x;
    values += `${result}`;
    return values;
}else {
    console.log("One of your vars is not a number");
}
}
console.log(printValue(4, 3)); // 2, 8, 10, 32, 64
// the function will return by the end one value 

/*  For example if we have function(3, 5) The function should print 3 9 27 81 243. Prints 5 exponential values of 3.
*  function(2, 8) The function prints 2 4 8 16 32 64 128 256. Prints 8 exponential values of 2.
2. Fruits
*  Create a function named printFavoriteFruit. Declare a variable outside of the function 
*   and store your favorite fruit as a value. 
*   Reassign the variable within the function and print “My favorite fruit is: x”.
*/
let fruit = 'Apple';
function printFavoriteFruit () {
    fruit = 'Banana';
    console.log('My favourite fruit is: ${fruit}');

}
printFavoriteFruit();
/*
3. Multiply a Number by Itself
*  Create a function named exponent that takes two numbers as parameters. 
*  The second parameter defines how many times the first number should be multiplied by itself.
*  Save the output in a variable named result.
*  Then, try to access the variable result outside of the exponent function. Is this possible?
*  Why/Why not? Comment your answer in the index.js file.

*/

function exponent(staterNum, exponent) {
    let result = 0;
    let multi = staterNum * staterNum;
    for (let i = 0; i < exponent; i++) {
        result += multi;
    }
    return result; 

}
console.log(exponent(2, 4));

// exercise one 

function maxTwoNum(x, y){	
    if( x>= 40 && x <= 60 && y >= 40 && y <= 60) {
    if(x === y){
    return "Numbers are the same";
    }else if (x > y){
    return x;
    }else{
    return y;
    }
    }else{
    return "Numbers don't fit in range";
    }
    }
    
    console.log(max_townums_range(45, 60));
    console.log(max_townums_range(25, 60));
    console.log(max_townums_range(45, 80));
    
// another option 

var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
  { 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
  }   
else
  if(parseInt(num2, 10) > parseInt(num1, 10)) 
  {
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
  }                  
else
  {
   console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
  




// 3 numbers 
function three_numbers(x, y, z) {
    if (x == y && y == z) {
      return 30;
    }
  
    if (x == y || y == z || z == x) {
      return 40;
    }
  
    return 20;
  }
  console.log(three_numbers(8, 8, 8));
  console.log(three_numbers(8, 8, 18));
  console.log(three_numbers(8, 7, 18));


  // second option 
  var a = add(1, 3)
var b = add(a, 7)
var c = add(b, 21)

function add () {
    var total = 0
  
    for (var i = 0; i < arguments.length; i++) {
      total += parseFloat(arguments[i])
    }
  
    return total
  }

  // EXERCISE PRINT MY FAVORITE FRUIT 


    let fruit = ['pear', 'banana', 'orange', 'apple', 'pineapple'];
    let print = function(item, index, object) { console.log(item); }
    fruit.forEach( print );


    fruit.forEach((item, index, object) => {
    console.log(item, index, object);
    });



  // EXERCISE 2
  /**
   * Fruit or Vegetable Write a JS function to print "fruit" , "vegetable" or "unknown" depending on the input string.

    * Fruits are: banana, apple, kiwi, cherry, lemon, grapes, peach

    * Vegetable are: tomato, cucumber, pepper, onion, garlic, parsley

    * All others are unknown

    * The input comes as array of one string element, the name of the fruit. 
    * The output should be printed to the console.

    * Example: input ['banana'] output: fruit
    *  Example: input ['cucumber'] output: vegetable
    *  Example: input ['pizza'] output: unknown
   */

  function fruitOrVegetable(inputArr) {
    var fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    var vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];
  
    var result = [];
    for (var i = 0; i < inputArr.length; i++) {
  
      var isFruit = false;
      var isVegetable = false;
  
      for (var j = 0; j < fruits.length; j++) {
        if (inputArr[i] === fruits[j]) {
          result.push('fruit');
          isFruit = true;
          break;
        }
      }
  
      if (isFruit) {
        // skip rest of the body of the loop as it is a Fruit
        continue;
      }
  
      for (var j = 0; j < vegetables.length; j++) {
        if (inputArr[i] === vegetables[j]) {
          result.push('vegetable');
          isVegetable = true;
          break;
        }
      }
  
      if (isVegetable === false) {
        // at this point we know its neither a fruit nor a vegetable
        result.push('unknown');
      }
  
    }
    return result;
  }
  
  console.log(fruitOrVegetable(['tomato', 'banana', 'cucumber', 'pizza', 'apple']));
  // [ 'vegetable', 'fruit', 'vegetable', 'unknown', 'fruit' ]
  
