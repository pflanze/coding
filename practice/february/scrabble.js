/*ARRAY: scores of alphabet*/
let letters = {
  1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
  2: ["D", "G"],
  3: ["B", "C", "M", "P"],
  4: ["F", "H", "V", "W", "Y"],
  5: ["K"],
  8: ["J", "X"],
  10: ["Q", "Z"]
};
/* to count scores*/
let sum;

/*FUNCTION: to return score of letter*/
function lettersToScore(letter) {
  for (let index in letters) {
    if (
      Object.keys(letters).indexOf(
        letters[index].indexOf(letter) !== -1 ? index.toString() : "-1"
      ) !== -1
    ) {
      return parseInt(index);
    }
  }
}

/*FUNCTION: count final score*/
let score = function(input) {
  sum = 0;
  if (input === null || input === "") {
    return 0;
  }

  input
    .toUpperCase()
    .split("")
    .forEach(function(elem, index, array) {
      sum += lettersToScore(elem);
    });
  return sum;
};

/*EXPORTS: export of function score*/
module.exports = score;

// return an empty object

function isEmpty(obj) {
  if (Array.isArray(obj)) {
    return obj.length === 0;
  } else if (typeof obj === "object") {
    for (var i in obj) {
      return false;
    }
    return true;
  } else {
    return !obj;
  }
}

// second way
/*  function isEmpty(o,i)
{
    for(i in o)
    {
        return!1
    }
    return!0
}
*/
//
function isEmpty(value) {
  if (Object.prototype.toString.call(value) === "[object Array]") {
    return value.length == 0;
  } else if (value != null && typeof value === "object") {
    return Object.getOwnPropertyNames(value).length == 0;
  } else {
    return !(value || value === 0);
  }
}

// another solution

const letters = [
  { tile: "N", score: 1 },
  { tile: "K", score: 5 },
  { tile: "Z", score: 10 },
  { tile: "X", score: 8 },
  { tile: "D", score: 2 },
  { tile: "A", score: 1 },
  { tile: "E", score: 1 }
];
function score(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += array;
  }
}
console.log(score);

// EXERCISE 3
console.log;
