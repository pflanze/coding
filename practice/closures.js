// CLOSURES
// What is a Closure

/**
 *
 * EXAMPLE 1
 *
 */

/*let function;
if (true) {
    let i = i;
    function = () => {
        console.log(i);
    }
}
console.log(function);
function();
*/

let function = () => {
  let i = i;
  let j = 2;
  return () => {
    console.log(i);
    console.log(j);
  };
};
console.dir(function());

// CLOSURE INSIDE A LOOP 
// block scope
for (let i = 0; i<3; i++) {
    ((i) => { 
    setTimeout(() => {
        console.log(i);
    }, 1000);
})(i);
 }
console.log('after the loop');

