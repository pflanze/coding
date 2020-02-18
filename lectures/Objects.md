#### Advanced Objects Introduction
Remember, objects in JavaScript are containers that store data and functionality. 
In this lesson, we will build upon the fundamentals of creating objects and explore some advanced concepts.

So if there are no objections, let’s learn more about objects!

In this lesson we will cover these topics:

how to use the <b>this</b> keyword.
conveying privacy in JavaScript methods.
defining getters and setters in objects.
creating factory functions.
using destructuring techniques.

Advanced objects are not a different type of object, they are mentioned as advanced, because of the advanced features we can implement to our objects. For example, we can build an object like so:
```javascript
let peson = {
  name: 'Axel',
  location: 'US',
  isAdvsor: true
  ```

  But what if we wanted to create many people, doing it one by one will be tiresome, so an advanced feature we can use is the Factory function 29 and it can purposely be created to make objects, ie.:
```javascript
const makeCodecademyPeople = (name, location, isAdvisor) => {
  return {
    name,
    location,
    isAdvisor
    }
	};
};

//now, calling the function will create a new object
// that we can assign to 
//a variable:
let axelAdvisor = makeCodecademyPeople('Axel', 'US', true);

console.log(axelAdvisor.name) //Axel
```


```javascript
const robot = {
  model: 'B-4MI',
  mobile: true,
  greetMaster() {
  	console.log(`I'm model ${this.model}, how may I be of service?`);
  }
}

const massProdRobot = (model, mobile) => {
  return {
    model,
    mobile,
    greetMaster() {
      console.log(`I'm model ${this.model}, how may I be of service?`);
    }
  }
}

const shinyNewRobot = massProdRobot('TrayHax', true)

const chargingStation = {
  _name: 'Electrons-R-Us',
  _robotCapacity: 120,
  _active: true,
  _chargingRooms: ['Low N Slow', 'Middle of the Road', 'In and Output'],

  set robotCapacity(newCapacity) {
    if (typeof newCapacity === 'number') {
      this._robotCapacity = newCapacity;
    } else {
      console.log(`Change ${newCapacity} to a number.`)
    }
  },
  get robotCapacity() {
    return this._robotCapacity;
  }
}
```

The this Keyword
Objects are collections of related data and functionality. We store that functionality in methods on our objects:

```javascript
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  }
};
```

In our goat object we have a .makeSound() method. We can invoke the .makeSound() method on goat.

goat.makeSound(); // Prints baaa
Nice, we have a goat object that can print baaa to the console. Everything seems to be working fine. What if we wanted to add a new method to our goat object called .diet() that prints the goat‘s dietType?

```javascript
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(dietType);
  }
};
goat.diet(); 

// Output will be "ReferenceError: dietType is not defined"
```

That’s strange, why is dietType not defined even though it’s a property of goat? That’s because inside the scope of the .diet() method, we don’t automatically have access to other properties of the goat object.

Here’s where the this keyword comes to the rescue. If we change the .diet() method to use the this, the .diet() works! :

```javascript
const goat = {
  dietType: 'herbivore',
  makeSound() {
    console.log('baaa');
  },
  diet() {
    console.log(this.dietType);
  }
};

goat.diet(); 
// Output: herbivore
```

The this keyword references the calling object which provides access to the calling object’s properties. In the example above, the calling object is goat and by using this we’re accessing the goat object itself, and then the dietType property of goat by using property dot notation.


