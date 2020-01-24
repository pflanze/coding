### CLOSURE concept

#### 🚀Closure is a special JavaScript feature
A closure is the combination of a function and the lexical environment (scope) within which that function was declared. Closures are a fundamental and powerful property of Javascript. 

A closure is a function that has access to its outer function scope even after the outer function has returned. This means a closure can remember and access variables and arguments of its outer function even after the function has finished.

It is created when specific function returns other function. First we call the parent function and after that somewhere in the code we call function that is returned by parent function. 

Closures are stateful functions. They remember their private variable data after call. 
On Stack when any variable is created - the function is executed, variable created and then released.
```javascript

// declaring the function "outerFn" and all happens in the global execution context 
function outerFn() {
    const a = 10; // declare variable "a" and assign value 10 to it 
    function innerFn(b) {
        console.dir(innerFn);
        return a + b; // "b" is a single parameter  with value 20
    }

return innerFn;

}

// assign "res" variable, result of the function call
const res = outerFn();
console.log(res(20)); // 30
// 20 is passed as single argument

```
### closure

```javascript

function outerFn() {
    const a = 10; // declare variable "a" and assign value 10 to it 
    
    function innerFn(b) { // variables used in this function body 
    //are different depending on the closures,
        console.dir(innerFn);
        return (a + b * mult); // mult holds value 2
    }

return innerFn;

}

// call outerFn function with different arguments 
//and that created different closures for the function res1 and res2 
const res1 = outerFn(2); // passing argument 2
console.log(res1(20)); // 60 
// assign "res" variable, result of the function call
const res2 = outerFn(3); // passing argument 3
console.log(res(20)); //  90



```
#### 🚀we can create different function by passing different initial arguments, which performs the same actions. 

### How do Closures Work?

To really understand how closures work in JavaScript, we have to understand the two most important concepts in JavaScript, that is, 1) Execution Context and 2) Lexical Environment.

### Execution Context


An execution context is an abstract environment where the JavaScript code is evaluated and executed. When the global code is executed, it’s executed inside the global execution context, and the function code is executed inside the function execution context.

There can only be one currently running execution context (Because JavaScript is single threaded language), which is managed by a stack data structure known as Execution Stack or Call Stack.

An execution stack is a stack with LIFO (Last in, first out) structure in which items can only be added or removed from the top of the stack only.

The currently running execution context will be always on the top of the stack, and when the function which is currently running completes, its execution context is popped off from the stack and the control reaches to the execution context below it in the stack.


### Lexical Environment

Every time the JavaScript engine creates an execution context to execute the function or global code, it also creates a new lexical environment to store the variable defined in that function during the execution of that function.
A lexical environment is a data structure that holds identifier-variable mapping. (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function type object] or primitive value).
A Lexical Environment has two components: (1) the environment record and (2) a reference to the outer environment.
The environment record is the actual place where the variable and function declarations are stored.
The reference to the outer environment means it has access to its outer (parent) lexical environment. This component is the most important in order to understand how closures work.


The outer lexical environment of the function is set to the global lexical environment because the function is surrounded by the global scope in the source code.
**Note** — When a function completes, its execution context is removed from the stack, but its lexical environment may or may not be removed from the memory depending on if that lexical environment is referenced by any other lexical environments in their outer lexical environment property.
### What is a Lexical Scope?

```javascript



```

### How Functions within functions work?
Closures get involved when the returned inner function is not self-contained

THe function body has access to variables that are defined outside the function.