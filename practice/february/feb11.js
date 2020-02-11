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
