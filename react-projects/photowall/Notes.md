React elements describes how the page will look
the DOM actually renders the page
the DOM NODE IS CALLED ROOT

ol - stands for ordered list 

```javascript
import React from 'react';
import ReactDOM from 'react-dom'


const element = React.createElement('ol', null,
  React.createElement('li', null, 'Take out the trash'),
  React.createElement('li', null, 'shovel the driveway'),
  React.createElement('li', null, 'walk the dog')
);


ReactDOM.render(element, document.getElementById('root'));
```

second way

```javascript
import React from 'react';
import ReactDOM from 'react-dom'


const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];

const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', { key: index }, task))
);


ReactDOM.render(element, document.getElementById('root'));


// when using an array to represent my child elements every element of that array should be represented by a unique key Prop.

```