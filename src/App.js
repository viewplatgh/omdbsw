import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Search from './Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
