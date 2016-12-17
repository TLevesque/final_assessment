import React, { Component } from 'react';
import './App.css';

import Upcoming from './Upcoming.js';
import New from './New.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-Upcoming">
          <Upcoming/>
        </div>
        <div className="App-New">
          <New/>
        </div>
      </div>
    );
  }
}

export default App;
