import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import Persons from './containers/Persons/Persons';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
      
      <br/>
      <br/>
      <br/>
      <br/>

      <Persons />
      </div>
    );
  }
}

export default App;
