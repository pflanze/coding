// OBJECTS 
// OBJECT in JavaScript is a core data structure 
// we describe real world entities made up of properties and methods. 
// properties are the variables of an object 

/** 
 * JavaScript is designed on a simple object-based paradigm. 
 * An object is a collection of properties, and a property is an association 
 * between a name (or key) and a value. A property's value can be a function, 
 * in which case the property is known as a method. 
 * 
 * 
 * In JavaScript, an object is a standalone entity, with properties and type. 
 * Compare it with a cup, for example. A cup is an object, with properties. 
 * A cup has a color, a design, weight, a material it is made of, etc. 
 * The same way, JavaScript objects can have properties, which define their characteristics.
 * 
 * OBJECTS STORE DATA IN PROPERTIES AND ACTIONS IN METHODS.
 * 
 * Objects alLows us to group related data together and split the code into logical pieces.
 * Object has a KEY/VALUE
 * /
 
 // In JS there are two types of VALUES 

 // PRIMITIVE VALUES
 // REFERENCE VALUES

 /**
  * PRIMITIVE VALUES are:
  * - Numbers, Strings, Booleans , null, undefined, Symbol
  */

  /**
   * Reference Value types are ONLY OBJECTS :
   * {...}
   * Arrays
   * DOM Nodes
   */

   // Property is an association between a name and a value that is part of an object 
   // PROPERTIES ARE THE BUILDING BLOCKS OF AN OBJECT 
   // A property whose value is a function is called a method. 

  // Object.entries()

  const person = {
      name: 
  }

  /**
   * For plain objects, the following methods are available:

    Object.keys(obj) – returns an array of keys.
    Object.values(obj) – returns an array of values.
    Object.entries(obj) – returns an array of [key, value] pairs.
   */
  // object.keys brings back an array of keys
  console.log(Object.keys(person));

  // Object.values 
  console.log(Object.values(person));

  /**
   * Object.entries() method in JavaScript returns an array consisting of 
   * enumerable property [key, value] pairs of the object which are passed as the parameter 
   * whereas Object.values() method in JavaScript returns an array whose elements 
   * are the enumerable property values found on the object. 
   * 
   */

  // Object.entries() 
  /**
   * Object.entries() method is used to return an array consisting of 
   * enumerable property [key, value] pairs of the object which are passed as the parameter. 
   * The ordering of the properties is the same as that given by looping over the property values 
   * of the object manually.
   */
  for (let [key, value] of Object.entries(person)) { 
  console.log(`${key} : ${value}`);
    }

    // Methods
    person.print();
    console.log();

    // Create an object named person. Loop through the object and print both the property
    // and value of the object.

    for (let prop in person) {
        console.log(`person.${prop} : ${person[prop]}`);
    }

    /**
     * 
     * In the living world of object-oriented programming we already know the importance of classes and objects 
     * but unlike other programming languages, JavaScript does not have the traditional classes 
     * as seen in other languages. 
     * But JavaScript has objects and constructors which work mostly in the same way to perform 
     * the same kind of operations.
     * Constructors are general JavaScript functions which are used with the “new” keyword. 
     * Constructors are of two types in JavaScript i.e. built-in constructors(array and object) and 
     * custom constructors(define properties and methods for specific objects).
     * Constructors can be useful when we need a way to create an object “type” that can be used multiple times 
     * without having to redefine the object every time and this could be achieved using 
     * the Object Constructor function. 
     * It’s a convention to capitalize the name of constructors to distinguish them from regular functions.
     * For instance, consider the following code:
     */

    function Automobile(color) {
        this.color=color;
      }
      
      var vehicle1 = new Automobile ("red");

      /**
       * The function “Automobile()” is an object constructor, and its properties and methods i.e “color” 
       * is declared inside it by prefixing it with the keyword “this”. 
       * Objects defined using an object constructor are then made instants using the keyword “new”.
       * When new Automobile() is called, JavaScript does two things:
       */

     // It creates a fresh new object(instance) Automobile() and assigns it to a variable.
      //It sets the constructor property i.e “color” of the object to Automobile.

    /**
     * Object.assign() Method 
     * Among the Object constructor methods, there is a method Object.assign() which is used
     *  to copy the values and properties from one or more source objects to a target object. 
     * It invokes getters and setters since it uses both [[Get]] on the source and [[Set]] on the target. 
     * It returns the target object which has properties and values copied from the target object. 
     * Object.assign() does not throw on null or undefined source values.
     * Applications:
     * Object.assign() is used for cloning an object.
     * Object.assign() is used to merge object with same properties.
     * Syntax:
     * Object.assign(target, ...sources)
     * 
     */

     /**
      * 
      * Parameters Used:
      * target : It is the target object from which values and properties have to be copied.
      * sources : It is the source object to which values and properties have to be copied.
      * Return Value:
      * Object.assign() returns the target object.
      */
    // OBJECT assign
    const obj1 = {1 : 2, 2: 300}; // the target object 
    const obj2 = {1: 4, 3: 3224};
    const totalObj = Object.assign(obj1, obj2); // obj1 is the target , and obj2 is source
    console.log(totalObj);
    
    // Get Values. Create a function that returns an array of all values of an object’s properties.
const   getObjectValues = {
    return Object.values(object)
        choice1: "tea",
        choice2: "coffee",
        choice3: "milk"
      })

      const getValues = (object) =>{
          return Object.values(object);
        
      };
      
      console.log(getValues(person));
      console.log(getValues(car));
    
      //
      person.printOut = () =>{
          return
      };

      // Object.defineProperty()
      Object.defineProperty(person, "birthday",{
        value: 20,
        variable: false
      });
      //person.birthDay = 20;
      console.log(person.birthday);

      //Object.defineProperties
      Object.defineProperties(person, {
          p1: {
              value: 33,
              variable: true
          },
          p2: { 
          value: {},
          variable: false
         },
         p3: {}

      });
      console.log()

      // one value can be stored in one property