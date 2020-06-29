import React, { Component } from 'react';
import './sass/main.scss';
import './components/icons/font-awesome-library';

import Header from './components/header/header-component';
import Profile from './components/profile/profile-component';
import Content from './components/inner/inner-component';

// load our data
// In the future we might add an API / MongoDB or MySQL
import data from './data.json';

class App extends Component {
  constructor() {
    super();
    this.state = {
      bags: data,
      searchField: '',
    };
  }

  handleChange = (event) => {
    this.setState({ searchField: event.target.value });
  };

  
  render() {
    const { bags, searchField } = this.state;

    const filteredBags = bags.filter((bag) => bag.race.toLowerCase().includes(searchField.toLowerCase()));

    return (
      // wrapping div-container
      <div className="App">
        <Header handleChange={this.handleChange} />
        <div className="main">
          <Profile />
          <Content data={filteredBags} />
        </div>
      </div>
    );
  }
}

export default App;
