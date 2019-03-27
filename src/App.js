import React, { Component } from 'react';
import './App.css';

import Search from './containers/Search';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1 className="title">OMDB api demo made by Rob Lao</h1>
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
