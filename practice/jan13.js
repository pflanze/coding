// Booleans
let x = 33.33333455;
console.log(x.toFixed(4));
let old, nice, crazy;

old = true;
nice = false;
//crazy = true;
crazy = !3 <= 3;

//console.log(!crazy);
console.log(1 !== 10); // real world usage

// Boolean inversion with !
console.log(crazy ? "Yeah" : "Nope");

// givenName

console.log("ABC");
let givenName, firstName;
firstName = "Irie";
console.log(givenName || firstName || "ABC");

// Let's do some Algorythms
// Nancy's income is 500 Euro per week.
// How much does Nancy makes every week?
const nancySalary = 500 * 52;

console.log(`Nancy salary ${nancySalary} Euro in one year`);

/**
 * The Number of hours Nancy worked over the last two weeks are 8, 6, 5, 9, 8, 2,1,8.5, 7, 4
 * what is nancy's average  hour ?
 */
let nancyWorkingHours = 8 + 6 + 5 + 9 + 8 + 2 + 1 + 8.5 + 7 + 4;
let nancyAvarage = nancyWorkingHours / 10;
console.log(`Nancy worked last two weeks ${nancyWorkingHours}, the Average`);

// CONDITIONALS in JAVASCRIPT

// if (<boolean>) {...}
console.log(true ? "Yeah cool" : "Nope sorry");
//if (true) {
// console.log("Yes it is true");
//}

//if (false)
//if (1 < 4 || (1 < 55 && true))
if (true || (1 < 55 && true)) {
  letSuperHero = 44;
  console.log("Yes it is true");
}
console.log("letSuperHero");

console.log(1 < 55 && true);
/**The if statement specifies a block of code to be executed if a condition is true:
 *
 * IF -Statements in JavaScript
 * if((my condition))
 */

//The if statement specifies a block of code to be executed if a condition is true:
//if (condition) {
// block of code to be executed if the condition is true
//}

//The else statement specifies a block of code to be executed if the condition is false:
/**if (condition) {
  // block of code to be executed if the condition is true
} else {
  // block of code to be executed if the condition is false
} */

/**let a, b, c;
a = true;
b = false;
c = true;

//if (a !== b)
//if (a == b && c)
if (a == b || c) {
  console.log("Nice");
} else {
  console.log("Not cool");
}
*/


let a, b, c;
a = 1 === 4;
b = 20 < 100;
c = true;

let counter = 0;
let logIn = false;
//if (a !== b)
//if (a == b && c)
if (a == b && c) {
  console.log("Nice");
  counter = 2;
  logIn = true;
} else {
  console.log("Not cool");
  counter = 3;
  logIn = false;

  console.log(logIn, counter);

  //-Write a JavaScript program which compute, the average marks of the students 
  //Then, this average is used to determine the corresponding grade.



var students = [['Alex', 80], ['Irena', 77], ['Anna', 88], ['Erika', 95], ['Thomas', 68]];

var Avgmarks = 0;

for (var i=0; i < students.length; i++) {
        Avgmarks += students[i][1];
        var avg = (Avgmarks/students.length);
}

console.log("Average grade: " + (Avgmarks)/students.length);

        if (avg < 60){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 80) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

// 
// EXERCISE 1
// A math student scored 75, 70, 85, 90, 100 on the first five tests he took .
  // After he took his sixth math test, the average is now 85. What did he score on the sixth test?
// Expected output: Score in the sixth test: --.

let student = [['score', 75], ['score', 70], ['score', 85], ['score', 90], ['score', 100]];

let scores = "75, 70, 85, 90, 100";
let scoresArr = scores.split(",");
console.log(scoresArr);



let Avgmarks = 85;

for (let i=85; i < student.length; i++) {
        Avgmarks += student[i][1];
        let avg = (Avgmarks/student.length);
}

console.log("Average grade: " + (Avgmarks)/student.length);

        if (avg < 75){
          console.log("Grade : F");      
          } 
        else if (avg < 70) {
                console.log("Grade : D"); 
                  } 
        else if (avg < 85) 
             {
                console.log("Grade : C"); 
        } else if (avg < 90) {
                console.log("Grade : B"); 
        } else if (avg < 100) {
                console.log("Grade : A"); 
}

// Exercise 1 Second Option 

let totalTest = 85 * 6;
let total5th = 7 + 70 + 85 +90 + 100;
let sixthTest = totalTest - total5th;
console.log(`the sixth test result is $ {sixthTest}`);

// EXERCISE 2
// For James to get a 1st class degree, he needs to get an average of 80% in all 9 of his assessments. 
//He has taken 8 assessments and his average is 78%. What is the minimum percentage 
//he must get in his last assessment to ensure he gets a first class?

//const totalAve = 80 * 9;
const totalSCore = 80 * 9;
const currentAvg = 78 * 8;
let diffTotal =totalScore - currentAvg;
console.log(`James needs a minimum of ${diffTotal} to get an 80%`);


// EXERCISE 3
// Check if three given integer values 
//are in the range 50 to 99 (inclusive). Print true if one or more of them are in the range.
// Solution 1
function check_numbers(x, y) 
  {
  if ((x >= 50 && x <= 99) || (y >= 50 && y <= 99))
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

console.log(check_numbers(12, 101));
console.log(check_numbers(52, 80));
console.log(check_numbers(15, 99));

//Solution 2
let int1 = 4;
let int2 = 50;

/*if (int1 >= 50 && int1 <= 99)  (int2 >= 50 && int2 <= 99)) {
console.log("true");
} */

// EXERCISE 3
//Check if two given integer values are in the range 50 to 99 (this includes both 50 and 99).
// Print true if either of them are in the range.
let int3 = 66;
if (true) {
    (int >)
}

// EXERCISE 4
//Check if three given integer values are in the range 50 to 99 (inclusive). 
// Print true if one or more of them are in the range.


// Exercise
//Declare the variables a, b and c, and give them number values. 
//Check which one out of the three variables has the largest value and print it to the console.
 //Then change the values of the variables to see if your conditional still works.
let a, b, c;
a = 10;
b = 20;
c = 22;
console.log(Math.max(a, b, c));

//EXERCISE 
//Create a new string adding “Py” in front of a given string. 
//If the given string begins with “Py” then print the original string.
let str = "Python";
if (str.substring(0, 2) == 'Py') {
    console.log(str);
}

// EXERCISE 5 
// Calculate the sum of the two integers. If the sum is in the range 50 to 80,
// print 65, otherwise print 80.

// Solution 1 
function sumTriple (x, y) {
    if (x == y) {
      return 3 * (x + y);
      } 
     else
     {
      return (x + y);
     }
   }
  console.log(sumTriple(10, 20));
  console.log(sumTriple(10, 10));

  // solution 2
  let sumInt = int1 + int2;
  console.log(sumInt);
  if (sumInt >= 50 && sumInt <= 80) {
      console.log(65);
  } else {
      console.log(80);
  }
  
// EXERCISE 6

//Check whether the sum of two integers is 8, 
//or whether their difference is 8. If one of these is the case, print true.

let int5 = 3;
let int6 = 5;
let numDiff = Math.abc(int5 - int6);
console.log(numDiff);
if (numSum == 8 || numDiff == 8) {
    console.log(true);
}

// EXERCISE 7
// Check whether either one of two integers is 15, 
//or if their sum is 15. If one of these is the case, print true.

// Solution  1
let int7 = 5;
let int8 = 10;
let intSum = int + int8;
if (int7 = 15 || int == 15) {
    console.log(true);
}

// Solution 2
function test15(x, y) 
{
  return ((x == 15 || y == 15) || (x + y == 15));
}
console.log(test50(15, 15))
console.log(test50(0, 15))

// EXERCISE 8
//Check whether one of two integers is a multiple of 7 or 11. If so, print true.

//let int9 = 27;
//let int10 = 33;
//let int9div7 = int9  /7;
//let int9div11 = int10 / 7;
//let int10div11 = int10 / 11;

let number1 = 1;
let number2 = 7;
if (number1 % 7 == 0 || 
    number2 % 7 == 0 || 
    number1 % 11 == 0 ||
    number2 % 11 == 0
    ) {
        console.log(true);
    }

//console.log(int9 / 7);
//console.log(int9 / 11);

// 77 is the smaller number between 0 and 100 which multiple by 7 and 11 at the same time ..
let number = 11;
console.log(77 % number == 0 ? "Multiply" : "Not Multiply");

// EXERCISE 
//Calculate the sum of the two given integers. If the two values are the same, 
//then print triple their sum.
let int22 = 4;
let int21 = 3;
let numTrip = (int22 + int21) *3; 
if (int22 === int21) {
    console.log(numTrip);
}


// EXERCISE

/** Calculate the difference between a specified number and 19. 
Print double the difference if the specified number is greater than 19. */

let num1 = 3;
let numDiff = Math.abc(num1 -19);
let numDo = numDiff * 2;
if (numDiff < 19) {
    console.log(numDo);
}

// EXERCISE 9
//Make a variable for firstName and age and give each variable values. 
//Create an if/else statement to check whether the person’s age is less than 13. 
//If so, print “firstName is a child”. If the age is equal to or more 
 //13 and less than 20, print “firstName is a teenager”. 
 //If the person’s age is equal to 20 and less than 30, then print “firstName is a young adult”. 
 //If none of these conditions apply, print “firstName is a adult”.

let firstName = 'Mark' ;
let Age = 11;
 if (Age < 13) {
   console.log(`${firstName} is child `);
 }

//Addition Syntax
/**
 *   2 + 3          // returns 5
*   true + 2       // interprets true as 1 and returns 3
*   false + 5      // interprets false as 0 and returns 5
*   true + "bar"   // concatenates the boolean value and returns "truebar"
*   5 + "foo"      // concatenates the string and the number and returns "5foo"
*   "foo" + "bar"  // concatenates the strings and returns "foobar"
 */
