import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import DeckList from './components/decklist';
import Login from './components/login';
import DeckBuilder from './components/deckbuilder';
import { BrowserRouter, Route } from 'react-router-dom'
import Inventory from './components/inventory';

class App extends Component {

  state = {

  };

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <link href="//cdn.jsdelivr.net/npm/mana-font@latest/css/mana.css" rel="stylesheet" type="text/css" />
        <BrowserRouter>
          <div>
            <div>
              <Route exact path="" component={Login} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/login" component={Login} />
              <Route path="/decklist" component={DeckList} />
              <Route path="/deckbuilder" component={DeckBuilder} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
