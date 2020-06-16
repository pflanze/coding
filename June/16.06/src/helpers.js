import React from "react";
import { display, add } from "./helpers";
import { render } from "node-sass";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    display("Irena");
    // bind function
    this.handleSubmit = this, handleSubmit.bind(this);
  }

  print = () => {
    console.log("I am function without this and do not need to be bind")
  }
  // i have to create a variable and 
  //function need to be bind
  handleSubmit() {
    console.log("Hi I am from bind");
  }
}

render() {
  // this is render
  this.newUser = () => (
    console.log("Iam function been built in render")
  );

  return (
    <React.Fragment>
      <h1 className="container">Hi I am Irena</h1>

      {
        this.newUser()
      }
      (this.handleSubmit())
      ()
    </React.Fragment>
  );
}
}

// when using helpers do not use this keywords
// .bind() method