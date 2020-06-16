import React from 'react';
import ReactDOM from 'react-dom'


const tasks = ['take out the trash', 'shovel the driveway', 'walk the dog'];

const element = React.createElement('ol', null,
  tasks.map((task, index) => React.createElement('li', { key: index }, task))
);


ReactDOM.render(element, document.getElementById('root'));


// when using an array to represent my child elements every element of that array should be represented by a unique key Prop.

