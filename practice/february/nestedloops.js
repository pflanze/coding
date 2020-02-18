// nested loops and multi- dimensional objects
// nested loops are used to access all the elements
//inside multi-dimensional arrays or objects

let outerArray = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 10, 5, 7, 3, 22, 6, 42][(123, 54, 12, 11, 9, 15)]
]; // two dimensional array and inside of it there are 3 other arrays

// bigHero is an OBJECT with one property characters,
// and that property is an array
// so I have an object which contains an array that contains objects 😇
let bigHero = {
  characters: [
    { name: "Hero", voice: "Mary Smith" },
    { name: "Anna", voice: "Melany Griffin", prop: 10 },
    { name: "Fred", voice: "John Miller" },
    { name: "Katie", voice: "Sofie Loren" }
  ]
};

bigHero.characters[0]["name"] === bigHero["characters"][0].name;

// nested for loops
// If I want to know how many elements are inside of my other array
// I use .length
for (let i = 0; i < bigHero.characters.length; i++) {
  console.log(bigHero.characters[i].name + ": " + bigHero.characters[i].voice);
}

// nested loop with objects I can combine for loop with for in loop or I can use a for each loop instead of for loop
let chars = bigHero["characters"]; //bigHero.characters
for (let i = 0, len = chars.length; i < len; i++) {
  for (let prop in chars[i]) {
    console.log(prop, chars[i].prop, chars[i][prop]);
  }
}

// I got undefined because .prop is a variable not a string, I cannot use the dot notation but square brackets [] syntax,

// never declare vars in loops

// prompt
let x = prompt("what??????");
console.log(x);
