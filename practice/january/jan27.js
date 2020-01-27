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