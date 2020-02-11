// Topic: Nesting Arrays

/**
 * An array is an ordered collection of values:
 *  each value is called an element, and each element has a numeric
 * position in the array, known as its index.
 */
//Nesting and accessing ARRAYS withing each other -
//MULTI -dimensional arrays with nested loops to access all the elements

const arr = [
  [2, 4, 6, 7],
  [533, 54],
  [345, 58, 6]
];
console.log(arr[1][1]);
console.log(arr[2][1]);

// 111 222 333 444
console.log(arr[1][1]);
console.log(arr[2][1]);
for (let i = 0; i < arr.length; i++) {
  // o
  for (let j = 0; j < arr[i].length; j++) {
    // o
    console.log(arr[i][j]); // 2 0
  }
}
let arrayNew = [];
for (let i = 0; i <= 5; i++) {
  for (let j = 0; j <= 2; j++) {
    arrayNew.push([i, j, i, 44]); // pushing an array
  }
}
let names = ["Ali", "Olga", "Nancy"];
names.forEach(name => console.log(name)); // just an ex
names.map(name => console.log(name)); //
let family = [
  ["Al", 22, "teacher"],
  ["Olga", 40, "chef"]
];
for (let i = 0; i < family.length; i++) {
  for (let j = 0; j < family[i].length; j++) {
    console.log(family[i][j]);
  }
}
family.forEach;
// nested loops
// in nested loops we us [j] instead of [i], i stands for index,
// forEach
family.forEach(arr => arr.forEach(element => console.log(element)));
//arr.forEach(array => array.forEach)(element)

//  for in
// for in is getting only the index

console.log("array new");
for (let innerArray of family) {
  for (let element of innerArray) {
    console.log(element);
  }
}
// NESTING OBJECTS

// NESTING AND ACCESSING ObJECTS IN OBJECTS
const tShirts = {
  color: "red",
  size: ["XS", "S", "M", "L", "XL"],
  countries: {
    // countries is the object name
    names: ["China", "Germany"],
    capital: ["Bejin", "Berlin"], // names and capital are the array's names
    obj: {
      one: 3344,
      two: 5654,
      printOut: function() {
        console.log(this.one); // this.one refers to - object
      }
    },
    display: function() {
      console.log(this.name); // variety of methods inside the object
      // this.name refers to countries
    }
  },

  fabric: "cotton",
  method: function() {
    console.log(this.color);
    // this =>t-shirt
  }
};
console.log(tShirts.size[2]);
console.log(tShirts.countries.capital[1]); // accessing the second object of the array Berlin
console.log(tShirts.countries.names[0]);
console.log(tShirts.countries.obj.two);

tShirts.method(); // i inside tshirts

tShirts.countries.display(); // inside countries

tShirts.countries.obj.printOut(); // objectFit:

let newShortWay = tShirts.countries;
newShortWay.display(); // nesting and accessing arrays in objects,

// useful way of writing
let car = ["Ford", "pink", 2020, "enj", "xs"];
// let carName = car[0];
// let carColor = car[1];

let [carName, carColor, carYear, ...rest] = car; // inside brackets I am creating individual variables not array
console.log(carName);
console.log(rest);
console.log(car);

// NESTING AND ITERATING OVER OBJECTS IN ARRAYS

const object = {
  firstName: "Al",
  old: 22,
  country: "Germany"
};
console.log(object.firstName);
// preferable way of writing syntax to nest objects
({ firstName, old, country } = object); // all live in one place with the parentheses
// firstName refers to the first object
({ firstName, old, country } = obj);
console.log(firstName);
console.log(console);

// EXERCISE

// nested loops and multi-dimensional objects
// We can use nested loops to access all the elements
// inside multi-dimensional arrays or objects

let twoD = [
  [1, 2, 3, 4, 5, 6, 7],
  [8, 10, 5, 7, 3, 22, 6, 42],
  [123, 54, 12, 11, 9, 15]
];

let bigHero = {
  characters: [
    { name: "Helen", voice: "Anna Potter" },
    { name: "Bamboo", voice: "Scott Adsit", prop: 12 },
    { name: "Go Go Tamo", voice: "Jamie Chung" },
    { name: "Fred", voice: "T.J. Miller" }
  ]
};

let chars = bigHero["characters"]; //bigHero.characters
for (let i = 0, len = chars.length; i < len; i++) {
  //    console.log(chars[i]);
  //    console.log(chars[i].name);
  //    console.log(chars[i]['voice']);
  for (let prop in chars[i]) {
    console.log(prop, chars[i].prop, chars[i][prop]);
  }
}

//nested for loops
//let rows = twoD.length;
//for(let i=0; i<rows; i++){
//    let items = twoD[i].length;
//    console.log(i, items)
//    for(let n=0; n<items; n++){
//        console.log( twoD[i][n] );
//    }
//}

// EXERCISE
const donuts = [
  { type: "Jelly", cost: 1.22 },
  { type: "Chocolate", cost: 2.45 },
  { type: "Cider", cost: 1.59 },
  { type: "Boston Cream", cost: 5.99 }
];

donuts.forEach(({ type, cost }) =>
  console.log(`${type} donuts cost $${cost} each`)
);

// find the longest wordBreak:
function findLongestWord(str) {
  var longestWord = str.split(" ").reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}
findLongestWord("This is a web development course");

// with sort()

function findLongestWord(str) {
  var longestWord = str.split(" ").sort(function(a, b) {
    return b.length - a.length;
  });
  return longestWord[0].length;
}
findLongestWord("The quick development path");

//
var obj = [
  {
    "Has the house been sold?": "N"
  },
  {
    "Is the house on the market?": "Y"
  },
  {
    "Duration of Sale": "2 weeks"
  }
];

var newObj = [];

for (var i = 0; i < obj.length; i++) {
  for (var key in obj[i]) {
    newObj.push({ key: key, value: obj[i][key] });
  }
}
console.log(JSON.stringify(newObj));

//
var obj = [
    { "Has the house been sold?": "N" },
    { "Is the house on the Market?": "Y" },
    { "Duration of Sale": "2 weeks" }
  ],
  array = obj.map(function(a) {
    var key = Object.keys(a)[0];
    return { key: key, value: a[key] };
  });
console.log(array);
