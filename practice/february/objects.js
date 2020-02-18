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
