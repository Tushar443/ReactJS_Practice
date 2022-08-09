import React, { Component } from 'react';
import {BrowserRouter , Route, Routes} from 'react-router-dom';

import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      <BrowserRouter >
      <Routes>
        <Route path='/'  element={()=>{<h1>Home</h1>}}  />
      </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
