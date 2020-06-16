```javascript
import React, { Component } from 'react';
// embedded expressions
// the state objects includes any data that this component needs
state ={
  count: 0;
  address: {
    street:''
  }
};

class Counter extends Component {
  state = {}
  render() {
    return (
      <div>
      // an expression produces a VALUE
      <h1>Hello There </h1>
      <button>Increment</button>
      </div>
    )
  }

}

export default Counter;

```

Second Example

```javascript
import React, { Component } from 'react';
// embedded expressions
// the state objects includes any data that this component needs
state ={
  count: 0;
  address: {
    street:''
  }
};

class Counter extends Component {
  state = {}
  render() {
    return (
      <div>
      // an expression produces a VALUE
      <span> </span>
      <button>Increment</button>
      </div>
    );
  }
// adding a method to the class
// i want to check the value of the count property
formatCount() { 
  // object destructuring 
  const {count} = this.state;
  return this.state.count === 0 ?  'Zero' : this.state.count
}

}
// jsx expressions compiled to react element
export default Counter;
```
jsx expressions are like normal javascript objects, they can be returned from a function, can be passed to a function, 