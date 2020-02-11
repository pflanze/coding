// compound object
const object = [{
    name: 'Ali',
    lastName: 'see'
},
/*{
    name: 'Olga',
    lastName: 'xs'
    //printOut: function(){
       // console.log('Hi');
    }
}, */
{
    name: 'Nancy',
    lastName: ""
}

];

// Cloning vs REference 

//String, Number, Boolean, when I assign another one is cloned
let str = 'Hi';
let newStr = str; // cloning
str ='something else';
console.log(newStr);
console.log(str);

let num = 222;
let newNum = num;
console.log(newNum);

// when i declare a string this is a primitive value, the clone will hold the value
// any primitive value assigned to another variable is cloning
// Compound 

// compound data type cloning
// Object, Array, function 

const names = ['Al', 'Olga', 'Nancy', 'Zein'];
let newArr = names; // reference ( newArray is reference to variable -names)
console.log(newArr);
newArr[i] = 'New';
console.log(names);

const car = {
    name: 'Ford',
    year: '2020',
    color: 'Red'

},
/*const newObject = car;
newObject.name = "BMW";
console.log(car.name); */

// Objects are reference by default
// I am able to access the object by reference

// Cloning an array 

// Shallow copy using ... spread operator 

let nameArr = ['Al','Anna'];
let newNamesArr = [...namesArr]; // shallow copy of array 
newNamesArr[0] = "Nancy";
console.log(newNamesArr);
console.log(namesArr);

// second example 
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = { ...food };

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }

// Shallow copy using concat 
let newNames2 = [].concat(namesArr); // using empty array []  to fake js ?



// Shallow copy with .slice
let newName3 = namesArr.slice(0);
console.log(newName3);


// note that Object.assign is a function 
//which modifies and returns the target object. 

const cloneFood = Object.assign({}, food)

/**
 * {} is the object that is modified. The target object is not referenced by 
 * any variable at that point, but because Object.assign returns the target object,
 *  we are able to store the resulting assigned object into the cloneFood variable. 
 * We could switch our example up and use the following
 */

const food = { beef: '🌽', bacon: '🥓' };

Object.assign(food, { beef: '🥩' });

console.log(food);
// { beef: '🥩', bacon: '🥓' }

// shallow copy using .assign()
// performs a shallow copy of an object, not a deep clone.
const original = {
    name: 'Fiesta',
    car: {
      color: 'blue'
    }
  }
  const copied = Object.assign({}, original)
  
  original.name = 'Focus'
  original.car.color = 'yellow'
  
  copied.name //Fiesta
  copied.car.color //yellow
/**
 * Being a shallow copy, values are cloned, and objects references are 
 * copied (not the objects themselves), so if you edit an object property 
 * in the original object, that’s modified also in the copied object, 
 * since the referenced inner object is the same:
 */

// shallow copy using .assign()
const newObject2 = Object.assign(car);
const newObject3 = { ...car}; // cloned object
console.log(cloneNewObject;)


// 
const food = { beef: '🥩', bacon: '🥓' };

const cloneFood = Object.assign({}, food);

console.log(cloneFood);
// { beef: '🥩', bacon: '🥓' }

// objects in JavaScript are references values, 
//I can't simply just copy using the =.  3 ways for you to clone an object 👍

const food = { beef: '🥩', bacon: '🥓' }


// "Spread"
{ ...food }


// "Object.assign"
Object.assign({}, food)


// "JSON"
JSON.parse(JSON.stringify(food))

// RESULT:
// { beef: '🥩', bacon: '🥓' }

// RECURSION

/**
 * 
 * recursion is the process of taking a big problem and sub-dividing 
 * it into multiple, smaller instances of the same problem.  
 * that generally means writing a function that calls itself. 
 * Probably the most classic example of this concept is the factorial function
 * 
 */
const factorial = function (num) {
   // console.log(num);
if (num == 1) { 
return 1;
 }
    // return num * factorial(num -1); // 8-7 = 1 // this function will keep calling itself , infinite loop
    return num * factorial(num -1);
};
console.log(factorial(8));

// recursion is a loop with a condition - iterative thinking
// recursion function is calling itself and stop calling itself
function countdown(n) {
    if (n <= -0) {
      console.log(0); // the base of recursion it immediatetly produces the obvious  result // the stack call
    } else {
      console.log(n);
      countdown(n - 1); //a recursive step: we transform the task into a simpler action?
    }
  }
  countdown(10);

 // is called, the execution splits into two branches: if and else 
// de-cloning

// deep cloning  in react , whenever i need to copy an object

function deepCopy (object) {

    if (typeOf object == 'object') {
        return Object.keys(object) { 
        .map(key => ({[key]} : deepCopy{object[key]}) )// the call back is assigned to .map()
        .reduce((scc,cur) => Object.assign(acc,cur),{}) // initializing the accumulator with an empty objects
    } else if (typeOf object == 'array'){
        return // something
    }
    return object
}
const newObj = {1:'hi',, 2:'how are you', fun: () => console.log('Hi')};
const superNewObj = deepCopy(newObj);// calling my function to deep clone any object
console.log(superNewObj);


//let tempVar = JSON.parse(JSON.stringify(this.state.statename))

/**
 * 
 * making a copy of an array or object means is that it will create 
 * a new reference to its primitive values, copying them.
 * That means that changes to the original array will not affect the copied array,
 *  which is what would happen if only the reference to the array had been copied 
 * (such as would occur with the assignment operator =).
 * A shallow copy refers to the fact that only one level is copied. 
 * A shallow copy works fine for an array or object containing only primitive values.
 * 
 * For objects and arrays containing other objects or arrays, 
 * copying these objects requires a deep copy. Otherwise, 
 * changes made to the nested references will change the data nested in the original object or array.
 *  3 methods of making a shallow copy and then 3 methods of making a deep copy in JavaScript.
 */

 // The spread operator (…) is a convenient way to make a shallow copy 
 //of an array or object —when there is no nesting, it works great.

 const array = ['😉','😊','😇']

const copyWithEquals = array // Changes to array will change copyWithEquals
console.log(copyWithEquals === array) // true (The assignment operator did not make a copy)

const copyWithSpread = [...array] // Changes to array will not change copyWithSpread
console.log(copyWithSpread === array) // false (The spread operator made a shallow copy)

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSpread) // 😉 😊 😇

// This is the same way the .slice() method works on Arrays to copy objects
// — creating a shallow copy of one level:

const array = ['😉','😊','😇']

const copyWithEquals = array // Changes to array will change copyWithEquals
console.log(copyWithEquals === array) // true (The assignment operator did not make a copy)

const copyWithSlice = array.slice() // Changes to array will not change copyWithSlice
console.log(copyWithSlice === array) // false (Using .slice() made a shallow copy of the array)

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithSlice) // 😉 😊 😇

// Object.assign(), which can be used with objects or arrays:

const array = ['😉','😊','😇']

const copyWithEquals = array // Changes to array will change copyWithEquals
const copyWithAssign = [] // Changes to array will not change copyWithAssign
Object.assign(copyWithAssign, array) // Object.assign(target, source)

array[0] = '😡' // Whoops, a bug

console.log(...array) // 😡 😊 😇
console.log(...copyWithEquals) // 😡 😊 😇
console.log(...copyWithAssign) // 😉 😊 😇

/**
 * What is a deep copy?
 * For objects and arrays containing other objects or arrays, 
 * copying these objects requires a deep copy. Otherwise, 
 * changes made to the nested references will change the data nested in the original object or array.
 * This is compared to a shallow copy, which works fine for an object or array 
 * containing only primitive values, but will fail for any object or array that has nested references
 *  to other objects or arrays.
 * Understanding the difference between == and === can help visually 
 * see the difference between shallow and deep copy, a
 * s the strict equality operator (===) shows that the nested references are the same:
 * 
 */

const nestedArray = [["😉"], ["😊"], ["😇"]]
const nestedCopyWithSpread = [...nestedArray]

console.log(nestedArray[0] === nestedCopyWithSpread[0]) // true -- Shallow copy (same reference)

// This is a hack to make a deep copy that is not recommended because it will often fail:
const nestedCopyWithHack = JSON.parse(JSON.stringify(nestedArray))

console.log(nestedArray[0] === nestedCopyWithHack[0]) // false -- Deep copy (different references)

// A better solution would be using a library like lodash or Ramda's clone() method

// cool console 
// whe i want to know what is inside the object - console.log it
console.log(console);

console.table(newObject);

// using a loop, console.console.log();
for (let key in programming) {
    console.log(programming[key]);
}

programming.is = () function(){
    if (this.isChallenging && this.isRewarding)
    return 'Learning a programming language ${} '
}

// readable object , defining the property of an object

// a method is an action that can be performed with the object
// .length count how long my string is 