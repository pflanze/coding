// Topic: Nesting Arrays

/**
 * An array is an ordered collection of values:
 *  each value is called an element, and each element has a numeric
 * position in the array, known as its index.
 */
//Nesting and accessing ARRAYS withing each other

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

//arr.forEach(array => array.forEach)(element)

// NESTING OBJECTS

// NESTING AND ACCESSING ObJECTS IN OBJECTS
