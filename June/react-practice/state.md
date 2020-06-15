The heart of every React component is its “state”, an object that determines how that component renders & behaves.  “state” is what allows  to create components that are dynamic and interactive.

If props hold immutable data and are rendered by components, then state stores data about the component that can change over time. Change could come in the form of user events or system events such as response to user input or server requests. Working with a state’s component normally involves setting a component’s default state, accessing the current state and updating the state. 
The first thing we must do is to initialize our state data before we can use it in render(). To set the initial state, we use this.state in the constructor with our React.Component syntax. If you’re getting logic from a parent component, be sure to call the super() method with props:

class Counter extends React.Component {
    constructor(props) {
      super(props)
      this.state = { ...
      }
    }
    render() { ...
    }
  }



A state in React Component is its own local state, the state cannot be accessed and modified outside the component and can only be used inside the component which is very similar to, you already guessed it a function own local scope. We can define variables inside the function which can only be used inside the function block scope. Let’s demonstrate this with an example.



class DummyComponent extends React.Component {
  state = {
    name: 'Manoj'
  }
  render() {
    return <div>Hello {this.state.name}</div>;
  }
  
}
const DummyFunction = () => {
  let name = 'Manoj';
  console.log(`Hey ${name}`)
}

State is referred to the local state of the component which cannot be accessed and modified outside of the component and only can be used & modified inside the component. Props, on the other hand,make components reusable by giving components the ability to receive data from the parent component in the form of props.


By opening a parenthesis on the same line as the return and closing it after the jsx, the compiler knows where the return value starts and ends,
The parentheses are used to wrap JSX, or to mark the start and end of what's included in a return statement. Curly brackets are used to return an object.

Use curly braces where you:
render your JSX element render() { return goes here }
initialize state state = { name: "jeff" }
reference props { this.props.name }
setState this.setState({ number : "james" })
are doing string interpolation I love ${snack.name}

class Toggle extends React.Component {
state = {
  toggleOn: true
};

  handleClick= () => {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    const buttonStyle = {};
    if (this.state.toggleOn) {
      buttonStyle.backgroundColor = "red"
    } else {
      buttonStyle.backgroundColor = "blue"
    }

    return (
      <button style={buttonStyle} onClick={this.handleClick}>
        {this.state.toggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
 here is a great resource to learn more about JSX and its curly braces

#### 3 instances where you don't need a curly brace:

```javascript

around a string <Component propKey = " " />
around the prop key <Component propKey = {this.prop.thing} />
creating an id or className <div id="hello">

 Use curly braces where you:
```javascript
render your JSX element render() { return goes here }
initialize state state = { name: "irena" }
reference props { this.props.name }
setState this.setState({ number : "gabriela" })
are doing string interpolation I love ${snack.name}
```

```javascript
class Toggle extends React.Component {
state = {
  toggleOn: true
};

  handleClick= () => {
    this.setState({
      toggleOn: !this.state.toggleOn
    });
  }

  render() {
    const buttonStyle = {};
    if (this.state.toggleOn) {
      buttonStyle.backgroundColor = "red"
    } else {
      buttonStyle.backgroundColor = "blue"
    }

    return (
      <button style={buttonStyle} onClick={this.handleClick}>
        {this.state.toggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}
```

The render method should return JSX. You don't have to use parens (), but if you want your JSX to take up multiple lines, it's handy.

