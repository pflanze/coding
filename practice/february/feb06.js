function newUser (fName, lName,age, hope) { // outer function is userName
let result ={
    firstName: fName, // 
    lastName: lName,
    old: age,
    funThingsToDo: hope,function() { // inner function which is a method 

        // this is the inner return in my scope, // inner function as method
        return `Hey ${this.firstName} you are very old ${this.old},`  // firstName is a key and it lives somewhere, 
        // i need to mention the object name so js will read it
    }
  //  printOut: 
};
// outer return in my global function scope, which is inner function call
return result.printOut(); // executing the method of the object
// the js will replace it with the value of return of object 


 }
// this is function call
let x = newUser("Ali", "st", "22", "dance");
console.log("this is x");
console.log(x.printOut());
//console.log(newUser("Ali", "st",  22, "dance"));


let arr = 12, (name: "Ali", age: 22, 6);
console.log(arr[i]["age"]); 

// array of objects , every object is different with different values 
let arr [
    (i: "Ali", age: 22),
    (i: "Hadi", age: 33),
    { 
    i: "Olga",
    sum: function() {
        return " Hi":
    }
 }
];
//console.log(arr[2].sum()); // dot notation 
console.log(arr[2][`sum`]()); // 

// how to access my function ? so to get result, how to call function is important 


[3, 4, 5].findIndex(num => num > 3); // tells where the element is 
// num is a variable, as soon as it founds something it stops searching
[3, 4, 5].find(num => num > 3); 


// return is what return 
// self invoked function i no need to call it , 

// i cannot printOut the objectName , ? is there method that tells the name object 

//this function in the example is  method inside of an object 
// closure is function inside of a function 

// the object keys can be properties 
// 

// ADDING  and removing elements

// - Begining of the array two methods
// shift() - removes first PropTypes.element,
// unshift(e1, e2, ...) add to beginning , to put more stuff from the beginning, it takes as many arguments as i want to give 


// example
let arr = [3, 4, 5]; // 3 elements, position 0,1,2
arr.shift() // return 3 // with shift i am mutating the data i am working with 

arr = []
arr.unshift(3,4,5);
// 5

//- end of array 
// pop() - remove last element
// push(e1, e2, ...) - add new elements to the end of the array , can have as many arguments 

// example

arr.pop()

// changing an entire array 
// reverse ()
// sort(compare) - sort in ascending order
arr.reverse - // it reverse the order of the elements in the opposite direction

// Iterating over  arrays

// forEach(callback) it knows how many itteration , we do something with the elements but do not touch the array
// callback arguments : value 
arr.forEach (e => console.log(e)); 
// i am passing a function to "e" and the function decide what to do with the element
["Bird", "Dog", "Cat"].forEach(animal => console.log("My pet is", animal));

// why forEach is more useful?
// map(callback) - callback arguments: value, index, array , returns new array , or do the same as forEach but I create a new array same time

arr.map(e => e + 1) we get every element as argument 
// i am not chaNGING THE ORIGINAL array, if i console.log it gives me the original array, with map i get a new array 
// 
const increasedArr = arr

arr.filter(e  => e < 4) // filtering the array, it returns a new array back and has new elements that passed the test
arr.filter(e  => e >= 4) 
// when we have sequence of things and we want only the specific once we use .filter, we can make several conditions
// it depends what i want to check
// the signature of a function 
// arr, it describes what the parameters of the function are 

arr.filter (value, index) => {console.log(value, 'is at index', index); return true;})

// the signature is the outline of the function , it describes 

arr.reduce((result, current) => result + current, 0) // the zero is called initial value , accumulator 
// i have a sequence of data and i use reduce to turn in one single thing the data, 
// with every iteration I can do something with the array

arr.reduce((result, current) => result.concat([current]), [] )
// reduce took an empty array and 
// every time reduce iterates it remembers the sum of the elements i have so far 

arr.reduce((result, current, index, array) => {console.log('sum of far', result); return result + current: ), 0);

// if i have an array to derive the element of the object in real life, i take the array and reduce it to a single value 
// with reduce method 

// strings and the length of strings 
const animals = ['cat', 'bird', 'dog', 'worm']
    animals.find(animal => animal.length > 3)
    animals.filter(animal => animal.length > 3)
    console.log( animals.find(animal => animal.length > 3))

    // function inside an object is a method 
    //

    // Switch Keys and Values. Create a function to get a copy of an object.
    //  The copy must switch the keys and values.
// Example:

let person = {
    name: 'Alex',
    job: 'teacher'
}
function keyToValue (obj) {
    const keysValuesPair  = Object.entries(obj)
    console.log(keysValuesPair);
let reverseArr = []
    for (let i =0; i < keysValuesPairs.length; i++) {
        reversArr.push(keyValuesPair[i].reverse())
    }
    return  Object.formEntries(reverseArr);
   // console.log(Object.formEntries(reverseArr));
}

keysToValuePairs(person);

// object with capital O belongs to javascript, it is default js object
// [i] ai stands for index 
// where I am calling the object 
// js works line by line 
// let is not hoisted 
// if i use var , it will be hoisted
// var in the local scope stays local 
// use var only when i really need to 
// if javascript doesn't accept the method itself?
// JSON is an object too

// develop the code 
function zodiac1(name, day, month, year) {
    const result = {
      userName: name,
      birthDay: day,
      birthMonth: month,
      birthYear: year,
      yourZodiac: function() {
        let singNames = [
          "Capricorn",
          "Aquarius",
          "Pisces",
          "Aries",
          "Taurus",
          "Gemini",
          "Cancer",
          "Leo",
          "Virgo",
          "Libra",
          "Scorpio",
          "Sagittarius",
          "Capricorn"
        ];
   
        let endsAt = [19, 18, 20, 20, 21, 21, 22, 22, 21, 22, 21, 20, 19];
  // do something 🤓
  return `Hey ${this.userName}, your zodiac sing is ${yourZodiac}`;
      }
    };
    return result.yourZodiac();
  }
  console.log(zodiac1("Hadi", "01", "09", "1989") + " 2nd way");