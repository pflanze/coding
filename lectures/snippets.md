# Cheatsheet  --- JavaScript Syntax
#### Reference Cheatsheet

### ES6  Arrow function (Async function)
```javascript

const getData = async() => { 
    var data = "Hello World"; 
    return data; 
} 
  
getData().then(data => console.log(data)); 
// Output: Hello World 



```
### Await function 
```javascript

const getData = async() => { 
    var y = await "Hello World"; 
    console.log(y); 
} 
  
console.log(1); 
getData(); 
console.log(2); 

```

### Simple Function 
```javascript

```

### Variable declaration 

```javascript


```
### Nested Function

```javascript


```



### Function Declaration 

```javascript



```

### Closures

```javascript

```

### CallBacks 
```

```
### LOOPS
```javascript

```
### copy function to another variable
```javascript
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

```
### this - keyword
with this. we create a public property that can be accessible from outside

```javascript
// house

this.table ="window table"; // the global table
// cleanTable is a function 
const cleanTable = function(soap) {


    const innerFunction = function(_soap) {  
    console.log(`cleaning ${this.table}`);
     }
     innerFunction.call(this, soap);
     // bind can be used as well
     // innerFunction.bind(this)(soap);
};
// call function to rescue 
cleanTable.call(this, 'some soap');

this.garage = {
    table: "garage table"
    cleanTable() {  // clean table is a method of the garage
        console.log(`cleaning ${this.table}`)
    }

};
// this inside object
let marysRoom ={
    // adding a method (we have a table we have to clean it)
    table: 'marys table',
    cleanTable() { // cleanTable is a method of marysRoom 
        console.log(`cleaning ${this.table}`)
    }
};

console.log(marysRoom.table);
this.garage.cleanTable();

```
Constructor is nothing but a function