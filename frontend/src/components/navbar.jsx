import React, { Component } from 'react';
import { Redirect } from 'react-router'
import Cookies from 'js-cookie';

class NavBar extends Component {
    state = {
        redirectToLogin: false
    };

    constructor() {
        super();
        if (Cookies.get('token')) {
            //TODO validate token with server to see if we need to login or not
        }
    }

    onLogoutClick = () => {
        Cookies.remove('token');
        this.setState({ redirectToLogin: true });
    }

    render() {
        if (this.state.redirectToLogin) {
            return <Redirect to="/login" />
        }

        if (!Cookies.get('token')) {
            return (<div></div>);
        }

        return (
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
                                <button className="button is-primary" onClick={this.onLogoutClick}>Logout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavBar;