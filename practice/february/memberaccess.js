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


console.log(car.make); // shows the actual PropTypes.string,
console.log(car.engine);

// with the dot syntax I am referencing a member , so if it has mambers is goint to be an object,
// and I have the method /function log that is being invoked, passing in 
//the parentheses
// with member access I am and I am passing values  targeting the main hyerarcy
// the top of the tree 
