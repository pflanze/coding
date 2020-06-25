import React, { Component } from "react";
import Data from "./data.json";
import ProductList from "./components/ProductList";
export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <h1>Welcome to Mix store</h1>
        <div className='products-wrapper'><ProductList data={Data} /></div>

      </React.Fragment>
    );
  }
}
