Props includes data that we give to  a component, whereas STATE includes DATA that is local or private to that component. So other components cannot access that state. It is completely internal to that component.

all the attributes that are set  are part of the props, the input of the component.  The state of this component cannot be accessed, the state is local and internal to that component. 

### PROPS is read only, we cannot change the input to this component inside of this component,

```javascript

import React, { Component } from 'react';

class Counter extends Component {
  state = {}
  render() {
    return ()
  }

}

export default Counter;

```