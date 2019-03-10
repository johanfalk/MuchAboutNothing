import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css'
import DeckList from './components/decklist';
import Login from './components/login';
import Modal from 'react-responsive-modal';

class App extends Component {

  state = {
    loginOpen: false,
  };

  openLoginModal = () => {
    this.setState({ loginOpen: true });
  };

  closeLoginModal = () => {
    this.setState({ loginOpen: false });
  };

  render() {
    const { loginOpen } = this.state;
    return (
      <div className="App">
        <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" href="/">
                        <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="" />
                    </a>

                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" href="/">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary" href="/register">
                                    <strong>Sign up</strong>
                                </a>
                                <button className="button is-light" onClick={this.openLoginModal}>
                                    Log in
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        <div>
          <Modal open={loginOpen} onClose={this.closeLoginModal} center>
            <Login />
          </Modal>
          <DeckList/>
        </div>
      </div>
    );
  }
}

export default App;
