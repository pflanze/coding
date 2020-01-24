### Functions

##### Practical application of CALL, APPLY and BIND functions.

In JavaSCript those functions let us borrrow functionality from other functions, which is powerful. 
We can do full mixes, multiple inheritance, 
We can borrow one object prototype from another
### CALL

```javascript

```

### Different ways to declare variables
**val**, **let**, **const**

### SCOPE 

```javascript
var a = 10; // a is global scope variable
console.log(a);

// window is the global scope of the browser

function fn() {
    var b = true; // b is limited to the scope of the function
    console.log(b);
}

fn();
console.log(b);
```

### Variable reassignment 
```javascript

var c = 1;
c = 2; //  reassigning value

function fn2() {
    c = 3
}
fn2();
```

#### Redeclaration 

```javascript
// variable d is in the global scope
var d = false;
var d = true; // redeclaration and assigned another value to it 

function fn3() { 
    var d = 5; // the variable d is in function scope
}
fn3(); // true

```

#### Hoisting 

```javascript

e = 5;
var e;

```
### Scopes -Global, Function and Block scope


**SCOPES**
```javascript
// Global scope 
var a;

// Function Scope
function fn() {
    var b;
}
fn();
//Block Scope 
{
    var b;
}

if (true) {

}else {

}
for (var i=0; i<5; i++) {

}

```

**LET**
How let behaves? **Let** is not replacement of the **var**

```javascript

// Global scope 
let a;

// Function Scope
function fn() {
    var b;
}
fn();
//Block Scope 
{
    let b;
}

if (true) {

}else {

}
for (let i=0; i<5; i++) {

}

```
With let Hoisting does not work.
### Difference between **let** and **var**
1. **let** is limited to global scope, function scope and block scope but **var** is limited only to global scope and function scope. 
2. If variable is declared using **let** we are not able to declare it again using **let** in the same scope. In this case we get error. With **var** it is possible to redeclare a variable in the same scope. 
3. Variables declared with **let** are not **HOISTED**.

**CONST**
Variable cannot be reassigned.
```javascript
// const - contains only pointer 
const myConst = 10;
myConst = 20;

```

### Variable Usage Guidelines
1. Make code readable 
2. Always declare variable before first usage
   
   ```javascript
   a = 10;
   var a;

   ```
3. Always add "use strict" at the beginning of each JS file.
    ```javascript
    "use strict"
   var b = 10;
   functin fn(){
       var d = b; // if do not declare d  we will get error
       return d;
   }
   fn();

   ```

4. Don't expose to the outer scopes locally used variables.
   ```javascript
   // Expose
   var myArray;
   var i;
    function fn2() {
        myArray = [1, 2, 3];
        for (i = 0; i< myArray.length; i++) {
            console.log(myArray[i]);
        }
    }
    fn2();


    // Don't expose!
    
    function fn2() {
        myArray = [1, 2, 3];
        for (var i = 0; i< myArray.length; i++) {
            console.log(myArray[i]);
        }
    }
    fn2();
   ```
#### Which variable declaration to use: 🍄 🙃 🔔 🌸 😳 🔨
**Let** is **var** extention., not new var. 
**USAGE**
**VAR** - for variables that are used accross entire function.Declared usually at the beginning of the scope. 
**LET** - for temporal variables that are limited to the block scopes. Declared directly in the block or just before it. 
**CONST** - for variables that should't be reassigned. Declaration place depends on the **const** usage.

**const**
   
   ```javascript
    //Example 1


   // Example 2 (Execute in Node.js)
   const path = require("path");

   console.log(path.resolve())

   // Example 3 
   // 
   const sum = function(a, b) {
       return a + b;
   }
    //
   // sum = 5;  // gives error 
   console.log(sum(2, 5)); // 7 

   ```

   ####  Where to use **let**

      
   ```javascript
   a = 10;
   var a;

   ```

   **var**

      
   ```javascript
   a = 10;
   var a;

   ```