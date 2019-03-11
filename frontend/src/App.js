import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import DeckList from './components/decklist';
import Login from './components/login';
import Modal from 'react-responsive-modal';
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {

  state = {

  };

  render() {
    return (
      <div className="App">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <BrowserRouter>
          <div>
            <Route path="/" component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/decklist" component={DeckList} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
