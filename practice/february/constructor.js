// Constructor

// Why do I need a constructor function?
// Why do I need a blue print to create an object?

// a typical way to create an object is with a CONSTRUCTOR FUNCTION
// so my program can call upon this function dynamically and
// create an object from it, and when I create an object or
//an instance (which means a copy of the blueprint) and what I do
// I copy that blue print over and over and over and I create an instance of the blueprint and
// likewise I am creating many objects from this constructor function,
function Apple(x, y, color, score) {
  this.x = x;
  this.y = y;
  this.color = color;
  this.score = score;
  // return this;  // it returns by default
  // the current value is this. object I keep manipulating
  // and if I keep manipulating it what it is going to do is
  // just going to return this object wherever I invoke the function and
  // it is going to return all the values I assigned
}
var Apple1 = {new Apple(10, 20, "red", 200); }
// I can create more instances , meaning more copies with different values 
// each instance is independent from one another
// with different  values and with same structure if I will 
// each instance is unique even if they come from one construction place 
// the structure can also be modified 

var Apple1 = { x: 10, y: 20, color: "red", score: 200 };
var Apple2 = { x: 100, y: 200, color: "green", score: 50 };
var Apple3 = { x: 10, y: 200, color: "yellow", score: 20 };

// overall I am just creating objects from a constructor function; 
// my program can invoke this functions by itself 
// it cam mathematically map out where it wants to place these apples and 
// then it can call upon this constructor function when it needs to and 
// keep generating more nad more objects
    
