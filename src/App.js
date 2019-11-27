import React, { Component } from 'react';
import './App.css';

import Header from '../src/components/Header';
import PostList from '../src/components/PostList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PostList />
       
      </div>
    )
  }
}

export default App;