import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import * as constants from '../utils/constants';
const Cookies = require('js-cookie');
const loginService = require('../services/loginService');
const axios = require('axios');

class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleEmailChange = event => {
        this.setState({ email: event.target.value });
    };

    handlePasswordChange = event => {
        this.setState({ password: event.target.value });
    };

    onLoginClick = async () => {
        try {
            await loginService.login(this.state.email, this.state.password);
            this.setState({});
        } catch (error) {
            console.error(error);
        }
    }

    onRegisterClick = async () => {
        try {
            await loginService.register(this.state.email, this.state.password);
            await loginService.login(this.state.email, this.state.password);
            this.setState({});
        } catch (error) {
            console.error(error);
        }
    }

    render() {
        if (Cookies.get('token')) {
            return <Redirect to="/decklist" />
        }

        return (
            <div className="columns">
                <div className="column"></div>
                <div className="column">
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
                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-primary" onClick={this.onLoginClick} >Login</button>
                        </div>
                        <div className="control">
                            <button className="button is-primary" onClick={this.onRegisterClick} >Register</button>
                        </div>
                    </div>
                </div>
                <div className="column"></div>
            </div>
        );
    }
}

export default Login;