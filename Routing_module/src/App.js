import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Blog from './containers/Blog/Blog';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Blog />
        </div>
      </Router>
    );
  }
}

export default App;
