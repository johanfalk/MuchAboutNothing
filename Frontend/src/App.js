import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import DeckList from './components/decklist';
import Login from './components/login';
import { BrowserRouter, Route } from 'react-router-dom'
import Inventory from './components/inventory';
const loginService = require('./services/loginService');

class App extends Component {

  state = {

  };

  async componentWillMount() {
    await loginService.verifyToken();
  }

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <BrowserRouter>
          <div>
            <div>
              <Route exact path="" component={Login} />
              <Route path="/inventory" component={Inventory} />
              <Route path="/login" component={Login} />
              <Route path="/decklist" component={DeckList} />
            </div>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
