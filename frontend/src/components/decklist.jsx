import React, { Component } from 'react';
import { Redirect } from 'react-router';
const Cookies = require('js-cookie');

class DeckList extends Component {
    state = { 
        isLoggedIn: false
    }

    constructor() {
        super();
        this.state.isLoggedIn = Cookies.get('token');
    }

    render() { 
        if (!this.state.isLoggedIn) {
            return <Redirect to="/login"/>
        }

        return ( 
            <div>
                <ul>
                    <li>Deck 1</li>
                    <li>Deck 1</li>
                    <li>Deck 3</li>
                </ul>
                <button className="button">New Deck!</button>
            </div>
         );
    }
}
 
export default DeckList;