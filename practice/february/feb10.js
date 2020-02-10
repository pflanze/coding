// compound object
const object = [{
    name: 'Ali',
    lastName: 'see'
},
{
    name: 'Olga',
    lastName: 'xs'
    printOut: function(){
        console.log('Hi');
    }
},
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
const newObject = car;
newObject.name = "BMW";
console.log(car.name);

// Objects are reference by default
// I am able to access the object by reference

// Cloning an array 

// Shallow copy using ... spread operator 

let name Arr = ['Al','Anna'];
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