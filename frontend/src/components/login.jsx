import React, { Component } from 'react';

class Login extends Component {
    state = { 
        isLoading: false
    };

    onLoginClick = () => {
        this.setState({isLoading: true});
    };

    render() { 
        const { isLoading } = this.state;
        const buttonClass = "button is-primary" + (isLoading ? " is-loading" : "");
        return ( 
        <div>
            <h2>Login</h2>
            <div className="field is-horizontal">
                <div className="control">
                    <input type="text" className="input is-medium" placeholder="email"/>
                </div>
            </div>
            <div className="field">
                <div className="control">
                    <input type="password" className="input is-medium" placeholder="password"/>
                </div>
            </div>
            <button onClick={this.onLoginClick} className={buttonClass} >Login</button>
        </div> );
    }
}
 
export default Login;