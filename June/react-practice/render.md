#### Why using parenthesis() and {} after render?

curly braces { } are special syntax in JSX. It is used to evaluate a JavaScript expression during compilation. A JavaScript expression can be a variable, function, an object, or any code that resolves into a value.

```javascript
const yellowStyle={color: 'yellow'} 
<Star style={yellowStyle} />

this is the same as we  write
<Star style={{color: ‘yellow’}} />
```

####  3 instances where you don’t need a curly brace:
```javascript
around a string <Component propKey = " " />
around the prop key <Component propKey = {this.prop.thing} />
creating an id or className <div id="hello">
```

#### Use curly braces where you:
```javascript
render your JSX element render() { return goes here }
initialize state state = { name: "irena" }
reference props { this.props.name }
setState this.setState({ number : "Gabi" })
are doing string interpolation I love ${snack.name}
parenthesis are used to group multiline of codes on JavaScript return statement so to prevent semicolon inserted automatically in the wrong place
```


it is not necessary to add a semicolon in JavaScript, JavaScript engine automatically inserts a semicolon at the first possible opportunity on a line after a return statement. If the JavaScript engine places the semicolon where it should not be, your code won’t compile.


so when place the opening bracket on the same line as return: return ( ….you are telling JavaScript engine that it can’t automatically insert a semicolon until the bracket is closed, 



```javascript
return (
    ...
    ...
); <-- inserts semicolon at the end of parenthesis
```
remember that for a single line statement, we don’t need to wrap it inside brackets:

```javascript
class StarsComponent {
  constructor(size) {
    this.size = size;
  }
  // Not required to wrap brackets around a single line of code
  render() {
    return <div>*</div>;
  }
}

```