// IIFE
/**
 *  A FUNCTION THAT IS executed immediately as it is defined or
 * it is self executable function
 */

// cool functions  - self evoking function
(function add() {
  console.log("Hi");
})();

// EXERCISES
// add();

// Create a function  average which accepts any amount of numbers and returns their mean average.
//the average of.
// function average(...params) {
//  console.log(params);

/* let totalSum = 0;
  for (let in nums) {
    totalSum += nums[i];
  }

  let numsCnt = params.length;

  let average = totalSum / ;
  console.log("Average is: " + average);
}



function average(...params) {

} */
//
function average(numbers) {
  // mean of [3, 5, 4, 4, 1, 1, 2, 3] is 2.875
  let total = 0,
    i;
  for (i = 0; i < numbers.length; i += 1) {
    total += numbers[i];
  }
  return total / numbers.length;
}
console.log();
// another option

function average(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

// Exercises

// exercise 1
// count ocurences
function char_count(str, letter) {
  var letter_Count = 0;
  for (var position = 0; position < str.length; position++) {
    if (str.charAt(position) == letter) {
      letter_Count += 1;
    }
  }
  return letter_Count;
}

console.log(char_count("o"));
// option two

function count(string) {
  return string.split("").reduce((acc, el) => {
    if (acc.hasOwnProperty(el)) acc[el]++;
    else acc[el] = 1;
    return acc;
  }, {});
}
var data = count("thequickbrownfoxjumpsoverthelazydog");
console.log(data);

// OPTION 3

function count(string) {
  return string.split("").reduce((a, letter) => {
    var currentCount = a[letter];
    if (currentCount) {
      currentCount = currentCount + 1; // If previously counted + 1
    } else {
      currentCount = 1; // Else initialize with first occurence.
    }

    a[letter] = currentCount; //Store the new count.

    return a;
  }, {});
}

console.log(count("thequickbrownfoxjumpsoverthelazydog"));

// Exercise 2
// calculate dog years

// Defining my age
let myAge = 31;

// Defining early years. The first two human years of a dog's life count as 10.5 dog years each
let earlyYears = 2;
earlyYears *= 10.5;

// Defining later years. Each human year following counts as 4 dog years
let laterYears = myAge - 2;
laterYears *= 4;

// Calculating my age in dog years
let myAgeInDogYears = earlyYears + laterYears;

// Defining my name and converting to lowercase
const myName = "Irie";
myName.toLowerCase();

// Displaying my name and age in dog years
console.log(
  `My name is ${myName}. I am ${myAgeInDogYears} years old in dog years.`
);

// OPTION TWO

const myDogAge = () => {
  //The first two human years of a dog's life count as 10.5 dog years each.
  let earlyYears = 2;
  earlyYears *= 10.5;
  // To account for calculation of later years
  laterYears = myAge - 2;
  // to calculate the number of dog years accounted for by your later years.
  laterYears *= 4;
  myAgeInDogYears = earlyYears + laterYears;
  myName = "Ernest";
  // Convert string to lowercase
  myName.toLowerCase();
  // statement that displays your name and age in dog years.
  console.log(
    `My name is ${myName}. I am ${myAgeInDogYears} old in dog years.`
  );
};

const validInput = myAge => {
  alert("Please only use numbers.");
  myAge = prompt("Please enter your age.");
  myDogAge();
};

let myAge = prompt("Please enter your age.");

if (myAge !== Number.isInteger(true)) {
  validInput();
} else {
  myDogAge();
}

// Write a function named calculateSupply that:
//     takes 2 arguments: age, amount per day.
//     calculates the amount consumed for rest of the life (based on a constant max age).
//     outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

var maxAge = 100;

var calculateSupply = function(age, amountPerDay) {
  timeLeft = maxAge - age;
  amountPerDay = Math.round(amountPerDay); //converts floating point values to a round number
  amountConsumed = timeLeft * amountPerDay;
  var message =
    "You will need " +
    amountConsumed +
    " to last you until the ripe old age of " +
    maxAge;
  console.log(message);
};

calculateSupply(34, 7.8);

// Calculate students grades
// Write a JavaScript program which compute, the average marks of the following students Then,
// this average is used to determine the corresponding grade.
let students = [
  ["David", 80],
  ["Daniel", 77],
  ["Anna", 88],
  ["Irina", 95],
  ["Thomas", 68]
];

let Avgmarks = 0;

for (let i = 0; i < students.length; i++) {
  Avgmarks += students[i][1];
  let avg = Avgmarks / students.length;
}

console.log("Average grade: " + Avgmarks / students.length);

if (avg < 60) {
  console.log("Grade : F");
} else if (avg < 70) {
  console.log("Grade : D");
} else if (avg < 80) {
  console.log("Grade : C");
} else if (avg < 90) {
  console.log("Grade : B");
} else if (avg < 100) {
  console.log("Grade : A");
}

// function get age

function getAge(DOB) {
  var today = new Date();
  var birthDate = new Date(DOB);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age = age - 1;
  }

  return age;
}

alert(getAge("6/17/1981"));

//Create a function that accepts a text from user and check if the user has entered a month name,
// if so print out that month and in which season it is.
const checkMonth1 = month => {
  month = month.toLowerCase();
  let months = [
    "February",
    "March",
    "April",
    "May",
    "June",
    "july",
    "August",
    "September",
    "October",
    "November",
    "December",
    "January"
  ];
  let autumn = ["august", "september", "october"];
  let winter = ["november", "december", "january"];
  let spring = ["february", "march", "april"];
  let summer = ["may", "june", "july"];
  months = months.map(editedMonth => editedMonth.toLowerCase());
  if (months.includes(month) && autumn.includes(month)) {
    console.log(month + " Autumn");
  } else if (months.includes(month) && winter.includes(month)) {
    console.log(month + " Winter");
  } else if (months.includes(month) && spring.includes(month)) {
    console.log(month + " Spring");
  } else if (months.includes(month) && summer.includes(month)) {
    console.log(month + " Summer");
  }
};
checkMonth1("june");

// Write a JavaScript function to get the month name from a particular date.

let month_name = function(date) {
  monthlist = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  return monthlist[date.getMonth()];
};
console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2019")));
