// spread syntax / spread operator . (...)

/*let array = [1, 3, 433, 6];
let array copyArray = [...array];
console.log(copyArray);

function sum(...args) // receiving an element 
{
    let array = args;
    console.log(array[0]); // the function will process it as array using the spread operator 
}

{
    results = x + y + z;
    sum(3,4, 4, 5);
}
*/

/**
 * This is the spread operator, and it essentially takes either an array or an object and expands
 *  it into its set of items. This lets you do fancy things, so for example if you have the code:
 *
 *
 */

// spread syntax / spread operator . (...)

let array = [1, 3, 433, 6];
let copyArray = [...array];
console.log(copyArray);

function sum(...args) {
  // receiving an element
  // let array = args;
  let result = 0;
  //something
  for (let i = 0; i < array.length; i++) {
    result += args[i];
  }
  return `the sum is ${result}`;
}

console.log(sum(3, 4, 4, 4, 5, 6, 7, 7, 88, 98, 9));
console.log(sum(7, 88, 98, 9));
console.log(sum(2, 4));

// Create a function howManyArgs which returns the total amount of arguments passed to it 

function hwManyArgs(...args) => console.log(args.length);
howManyArgs(3, 4, 56, 7, 8, 9, 9, 3);


// shopping list

let myList = [];
myList.push(["Chocolate", 15]);
myList.push(["Ramen", 50]);
myList.push(["Sweet Tea", 10]);
myList.push(["Protein Power", 5]);
myList.push(["Chicken", 1]);