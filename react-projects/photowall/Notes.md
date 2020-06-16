React elements describes how the page will look
the DOM actually renders the page
the DOM NODE IS CALLED ROOT

ol - stands for ordered list

```javascript
import React from "react";
import ReactDOM from "react-dom";

const element = React.createElement(
  "ol",
  null,
  React.createElement("li", null, "Take out the trash"),
  React.createElement("li", null, "shovel the driveway"),
  React.createElement("li", null, "walk the dog")
);

ReactDOM.render(element, document.getElementById("root"));
```

second way

```javascript
import React from "react";
import ReactDOM from "react-dom";

const tasks = ["take out the trash", "shovel the driveway", "walk the dog"];

const element = React.createElement(
  "ol",
  null,
  tasks.map((task, index) => React.createElement("li", { key: index }, task))
);

ReactDOM.render(element, document.getElementById("root"));

// when using an array to represent my child elements every element of that array should be represented by a unique key Prop.
```

JSX

```javascript
import React from "react";
import ReactDOM from "react-dom";

const tasks = ["take out the trash", "shovel the driveway", "walk the dog"];

const element = (
  // whenever I want to write javascript expressions and include them in these <li></li> tags they must be enclosed by two curly braces.
  <ol>
    // I want the amount of list items to reflect the number of tasks inside of
    my right ,to do I need a js expression inside of my ordered list and enclose
    it with two curly braces
    {task.map(task)}
    <li>{task[0]}</li>
    <li>{task[1]}</li>
    <li>{task[2]}</li>
  </ol>
);

ReactDOM.render(element, document.getElementById("root"));
```

```javascript
import React from "react";
import ReactDOM from "react-dom";

const tasks = ["take out the trash", "shovel the driveway", "walk the dog"];

const element = (
  <ol>
    // I want the amount of list items to reflect the number of tasks inside of
    //my right ,to do I need a js expression inside of my ordered list and
    enclose it with two curly braces
    {task.map((task, index) => (
      <li key={index}> {task} </li>
    ))}
    // instead of declaring JSX elements individually I mapped out an array of
    JSX to describe my content.
  </ol>
);

ReactDOM.render(element, document.getElementById("root"));
```

When writing JSX everything must equate to a single jsx element, I have to capsulate them with a div tag,
