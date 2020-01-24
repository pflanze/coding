##Array Properties 🚀 🤖

###Property	Description 🚀
1.constructor............ 🤖Returns the function that created the Array object's prototype
2. length.................🔔Sets or returns the number of elements in an array
3. prototype........... 🌼Allows you to add properties and methods to an Array object
###Array Methods

###Method  Description
concat()............🔔Joins two or more arrays, and returns a copy of the joined arrays
copyWithin().........Copies array elements within the array, to and from specified positions
entries()..............Returns a key/value pair Array Iteration Object
every()..............Checks if every element in an array pass a test
fill()...............Fill the elements in an array with a static value
filter()............Creates a new array with every element in an array that pass a test
find()..............Returns the value of the first element in an array that pass a test
findIndex().......... 🔔 the index of the first element in an array that pass a test
forEach()............ ☎️Calls a function for each array element
from()................ 🍎Creates an array from an object
includes()............. 💢Check if an array contains the specified element
indexOf()............🍎Search the array for an element and returns its position
isArray()...........🔔Checks whether an object is an array
join().................🔔Joins all elements of an array into a string
keys()..................🛎Returns a Array Iteration Object, containing the keys of the original array
lastIndexOf()...........🚀Search the array for an element, starting at the end, and returns its position
map().................🤖Creates a new array with the result of calling a function for each array element
pop()................🚀Removes the last element of an array, and returns that element
push()..............🚀Adds new elements to the end of an array, and returns the new length
reduce()............🔔Reduce the values of an array to a single value (going left-to-right)
reduceRight()...... 🍎Reduce the values of an array to a single value (going right-to-left)

reverse().........🍺Reverses the order of the elements in an array
shift()............🔔Removes the first element of an array, and returns that element
slice()............🐞Selects a part of an array, and returns the new array
some()............🔔Checks if any of the elements in an array pass a test
sort()............🛰Sorts the elements of an array
splice()..........🤖Adds/Removes elements from an array
toString()...... 🚀Converts an array to a string, and returns the result
unshift()......... 🤖Adds new elements to the beginning of an array, and returns the new length
valueOf()....... 🔔Returns the primitive value of an array


### Everything in JavaScript is an OBJECT
#####Array is an OBJECT with NUMERIC property names. Its behavior is the same as any object.

####Ways of creating an Array 🚀

#####Array Literal Notation 

```javascript
const myArray = [1, 2, 3];
console.log(myArray);
// [1, 2, 3]

```

```javascript 
const myArray2 = new Array(1, 2, 3,);
console.log(myArray2); 
// [1, 2, 3]
```
######the second syntax with the parenthesis is used when we want to create new instance of the class or function constructor. In this case it is called a built-in array function and using this built-in function we create new instance of the array.

######Objects are reference types and both Arrays are equal. They both hold pointers which point to places in memory, they are actually equal but pointers are different.

```
```

Array Literal differs from other literals simply by adding the square brackets. Inside of the square brackets is put the value, separated by commas. After each comma add additional space.

###NOTE!!!
####Arrays can hold values of any types: numbers, objects, strings, booleans. 
######In the given example there are 3 number values 

####Arrays VS Object

```javascript
const myArray = [1, 2, 3];
console.log(myArray);
// [1,2,3]
// _proto_ is an ARRAY 
// length property appears automatically
```

####OBJECT Literal Notation 
```javascript
const myObject = {
    0: 1,    // 0, 1, 2 are numeric properties
    1: 2,
    2: 3,
    length: 3 // length is added 
    // _proto_ property will be created automatically 

};
console.log(myObject);
// {0: 1, 1: 2, 2: 3, length: 3}
// the result is in OBJECT LITERAL FORMAT 
// the _proto_ is an OBJECT 
```

#####What is the difference between the two myArray and myObject ? 
######In the first case is used Array Literal and in the second is used Object Literal. The only difference is in _proto_ field. Each array have access to different array methods. But myObject will not have access to those methods.

###How to READ Array Values
```javascript

const myArray = [1, 2, 3, 4];
console.log(myArray); //  [1, 2, 3, 4]

console.log(myArray[0]); // 1 
console.log(myArray[1]); // 2
// [0] , [1] etc. are numeric property names
// any element of the array can be accessed by its Numeric Property Name


console.log(myArray.length); // 4



```
####Using bracket notation we get access to specific element of the array. Inside the square brackets we put the index of the specidic element. Indexes start from zero[0]. ZERO produces value zero 
#### DOT Notation is not allowed to be used in order to access those property names. 

###