
import './App.css';

import React, { Component } from 'react';
import Counter from './Counter/Counter';
class App extends Component {
  render() {
    return (
      <div className="App">
        <h3>Counter App</h3>
        <Counter />
      </div>
    )
  }
}



export default App;
