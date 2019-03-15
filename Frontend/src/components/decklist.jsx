import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
const Cookies = require('js-cookie');

class DeckList extends Component {
    state = {

    };

    render() {
        if (!Cookies.get('token')) {
            return <Redirect to="/login" />
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