// to understand programming  I need to understand when I use a standard object and when a special
// type of object as an array;
// properties describe the object

// Object prototypes


function Person(name, age, height) {
  this.name = name;
  this.age = age;
  this.favColor = height;
}

Person.prototype.getName=function{
    return"Name is :"+this.name;
}
let father = new Person("John", 50, "green");

console.log(father.name);
// function.prototype has its own methods which are : 
// .call 
// .bind 
// .toString 

// Nested Object
