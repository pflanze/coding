// function inside function
function main(num, num2) {
  // outer function above
  function second(n) {
    // inner function // private function for outer function
    //
    return n * n; // 9
  } // second num will be replace by 9  // 16 is num 2
  return second(num) + second(num2);
  // i am calling the second function with a value I don't know
}
console.log(main(3, 4));

// Nested scopes: Accessing outer global variables

var nice = true; // declared a variable outside of the scope
const outerFunction = (x, y) => {
  nice = false;
  let big = true; // the variable big is accessible throughout the global scope
  const innerFunction = num => {
    // the innerFunction is processing the num with 10
    big = false;
    nice = false;
    console.log(big + "innerFunction");
    return num + 10;
  };
  return innerFunction(x) + innerFunction(y);
};
//big = false; // variable big is not able to be accessed outside of the global scope
console.log(outerFunction(3, 4));
console.log(nice);

// closure
function fun() {
  // i declared a variable with var which means it is global and  with value 10
  var number = 10;

  function fun() {
    return number + number;
  }

console.log(fun());
console.log(number);

// closure
// var counter = 0;
function add ()  {
    var counter = 0;
    const adding = () => {counter++ }
    adding();
    //counter += 1;
    return function () {
        counter++;
        return counter;
}
    };
   
}) ();
add(); // 1
add(); //2
add(); // 3
//counter = 0;
console.log(add());
console.log(add());
console.log(add());
// console.log(add);
// self invoked function 

// closure is a function inside another function 
(function display() {
  let x = 0;
  console.log("Hi");
  return () => {
    x++;
    return x;
  }; // function inside a function is called closure
}) ();  // with the parenthesis  () we invoke or calling the function 
// the function is called by itself with the parenthesis 


// anonymous function 

// self invoking anonymous function