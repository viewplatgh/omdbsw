import React, { Component } from 'react';
import './App.css';
import { loadWatchlist } from './actions';

import Header from './components/Header';
import Watchlist from './containers/Watchlist';
import Search from './containers/Search';

class App extends Component {
  componentDidMount() {
    this.props.store.dispatch(loadWatchlist());
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <Watchlist />
          <Search />
        </div>
      </div>
    );
  }
}

export default App;
