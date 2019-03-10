import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import NavBar from './components/navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <span>
            This is the content that is professional
          </span>
        </div>
      </div>
    );
  }
}

export default App;
