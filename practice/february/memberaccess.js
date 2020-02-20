//MEMBER ACCESS OPERATOR ( .) dot symbol

var car ={
    make: "Ferarri",
    speed: 160,
    engine: {
        size:2.0,
        make"ferarri",
        fuel:"petrol",
        pistons: [
            {maker: "BMW"},
            {maker: "BMW2"}
        ]
    },
    drive: function(){return"drive";}
};

//make is a member 
// I create a reference in memory called car - car.make; pulls out the string "ferarri"
var array = [
    "string",
    100,
    ["embed", 200],
    {car:"ford"},
    function(){return "drive";} // i can access the function with its number, [4]
];
// when I have the computed member access
//whatever is inside of the brackets is treated as javascript statement; 😲

console.log(car.make); // shows the actual PropTypes.string,
console.log(car.engine);

// with the dot syntax I am referencing a member , so if it has mambers is goint to be an object,
// and I have the method /function log that is being invoked, passing in 
//the parentheses
// with member access I am and I am passing values  targeting the main hyerarcy
// the top of the tree 


// SCOPES AND CLOSURES
//{  scope = Access  }

var engine = {
    maker: "Ford",
    headGasket:{
        pots:[
            "piston1",
            "piston2"
        ]
    }
}

function runExpression(){
    var a = 10;
    // add is embedded callable object inside the curly brackets
    function add() {
        return a +90; // the callable object returns an expression (a) which is 
        // defined outside of the callable object 
    }
    return add();
    //return 100;

    console.log( 
    add(90),
    add(20)
    );
}
// callable objects goes with execution stack 
// closure encapsulates/ keep together all of the symbols that have reference to them 

// garbage Collection - gets rid of waste symbols, we no longer need
// functions are also called callable objects, 
//they have their own scope , they have their own execution context;

// I can have function inside of function, object inside of an object 
// callable object inside of callable object 
// and when I invoke each one I am in fact adding to the STACK

// Outer Execution Environment is for execution to happen
// Execution stack or Main Tread

// functions are callable objects 
// callable objects have scopes just like regular objects 
// callable objects are closure where any sort of symbol that is created 
// inside the execution stack as long as there is another callable object
// in there still in the execution stack, it keeps the symbol, 
// it encloses everything together and it keeps those symbols
// whilst we are executing all those instructions on the execution stack
// or the main thread then once all of it has been executed it returns the 
// the final values and it does all of its operations; 
// it then clears out the symbols that I can no longer reference 
// in my program, once I have executed these list of instructions
// I have done what I need to do with these instructions 
// they are thrown in the bin, and I have garbage collection 
// as well that deletes out those symbols so I am not wasting memory

// in javascript we are writing statements 
