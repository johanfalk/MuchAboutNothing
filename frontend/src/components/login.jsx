import React, { Component } from 'react';
import { Redirect } from 'react-router'
const Cookies = require('js-cookie');

class Login extends Component {
    state = {
        isLoading: false,
        isLoggedIn: false,
        email: '',
        password: ''
    };

    constructor() {
        super();
        this.state.isLoggedIn = Cookies.get('token');
    }

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    onSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        Cookies.set('token', 'fakeToken123', { expires: 1});
        this.setState({ isLoggedIn: true });
    }

    render() {
        if (this.state.isLoggedIn) {
            return <Redirect to="/decklist" />
        }

        const buttonClass = "button is-primary" + (this.state.isLoading ? " is-loading" : "");
        return (
            <div className="columns">
                <div className="column"></div>
                <div className="column">
                    <form onSubmit={this.onSubmit}>
                        <label className="field">Login</label>
                        <div className="field">
                            <p className="control has-icons-left has-icons-right">
                                <input className="input" type="email" placeholder="Email" ref={this.state.email} onChange={this.handleEmailChange} />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-envelope"></i>
                                </span>
                                <span className="icon is-small is-right">
                                    <i className="fa fa-check"></i>
                                </span>
                            </p>
                        </div>
                        <div className="field">
                            <p className="control has-icons-left">
                                <input className="input" type="password" placeholder="Password" ref={this.state.password} onChange={this.handlePasswordChange} />
                                <span className="icon is-small is-left">
                                    <i className="fa fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        <input type="submit" value="Login" className={buttonClass} />
                    </form>
                </div>
                <div className="column"></div>
            </div>
        );
    }
}

export default Login;