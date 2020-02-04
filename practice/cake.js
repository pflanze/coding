// METHODS AND OBJECTS
// Adding a method to an object

// Describe a cake
function describe(cake) {
  var description =
    "The " +
    cake.occasion +
    " cake has a " +
    cake.flavor +
    " flavor, " +
    cake.levels +
    " layers, and costs " +
    cake.price +
    ".";
  return description;
}

console.log(describe(cake));

/**
 * The function describe()  takes an object as a parameter.
 * I pass it the cake, and it accesses that object's properties and prints them out in that sentence.
 *  for an alternative approach: creating a describe property that houses a method.
 *
 *
 */
var cake = {
  flavor: "strawberry",
  levels: 2,
  price: "$10",
  occasion: "birthday",

  // Describe the cake
  describe: function() {
    var description =
      "The " +
      this.occasion +
      " cake has a " +
      this.flavor +
      " flavor, " +
      this.levels +
      " layers, and costs " +
      this.price +
      ".";
    return description;
  }
};

console.log(cake.describe());

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "$50";

console.log(cake.describe());
//Now our object has a new property available to it, describe. T
//he value of this property is a function that returns a text description of the cake.

// A property whose value is a function is called a method.

// The keyword this
//Now look at the body of the  describe()  method on our cake object.
// You see a new word: this. This is automatically set by JavaScript inside a method
// and represents the object on which the method was called.

// Beyond the CAKE

var cake = {
  flavor: "strawberry",
  levels: 2,
  price: "$10",
  occasion: "birthday",

  // Describe the cake
  describe: function() {
    var description =
      "The " +
      this.occasion +
      " cake has a " +
      this.flavor +
      " flavor, " +
      this.levels +
      " layers, and costs " +
      this.price +
      ".";
    return description;
  }
};

console.log(cake.describe());

// The cake is actually for a wedding!
cake.occasion = "wedding";

// Its number of layers and price both go up.
cake.levels = cake.levels + 8;
cake.price = "$50";

console.log(cake.describe());

// add some more pastries, as well as a "type" property to distinguish
// between multiple types of pastries.

// MUFFIN
var muffin = {
  type: "muffin",
  flavor: "blueberry",
  levels: 1,
  price: "$2",
  occasion: "breakfast",

  // Describe the pastry
  describe: function() {
    var description =
      "The " +
      this.type +
      " is a " +
      this.occasion +
      " pastry, has a " +
      this.flavor +
      " flavor, " +
      this.levels +
      " layers, and costs " +
      this.price +
      ".";
    return description;
  }
};

// OBJECTS AND PROTOTYPES IN JAVASCRIPT

// cake prototype

// NEXT LEVEL: MAKE A GAME
/**
 *
 * The baking example was relatively simple, but you can get as complicated as you like with
 * this structure (defining objects, creating objects, doing things with them through a series of methods).
 *  next-level now  look at an example with more significant interactions between objects. I
 * in this game, characters, players, and enemies are created.
 * A player can attack an opponent, but the reverse is also true!
 * If attacked, a character sees their life points decrease from the force of the attack.
 *  If a character's number of points reaches 0, then the character is eliminated.
 * If the winner is a player, they receive a number of experience points equal to the value of the
 * eliminated opponent.
 * Here are the associated object modeling. Read through it from beginning to end,
 * line by line, and you may find it's less complicated than it first appears:
 */
