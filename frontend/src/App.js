import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import NavBar from './components/navbar';
import DeckList from './components/decklist';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <DeckList/>
        </div>
      </div>
    );
  }
}

export default App;
