import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import NavBar from './navbar';
import * as constants from '../utils/constants';
import { getConfig } from '../utils/requestUtil';
const axios = require('axios');
const Cookies = require('js-cookie');
require('../utils/requestUtil');

class DeckList extends Component {
    state = {
        decks: []
    };

    constructor() {
        super();
        axios.get(constants.DECK_SERVICE_URL + '/decks/' + Cookies.get('userId'), getConfig()).then((response) => {
            this.setState({ decks: response.data });
        }).catch((error) => {
            console.error(error);
        });
    };

    onNewDeckClick = () => {
        axios.put(constants.DECK_SERVICE_URL + '/' + Cookies.get('userId'), {}, getConfig()).then((response) => {
            let decks = this.state.decks;
            decks.push(response.data);
            this.setState({ decks: decks });
        }).catch((error) => {
            console.error(error);
        });
    };

    onDeleteClick = (id) => {
        axios.delete(constants.DECK_SERVICE_URL + '/decks/' + id, getConfig()).then((response) => {
            const decks = this.state.decks.filter((deck) => {
                return deck._id !== id;
            });

            this.setState({ decks: decks });
        }).catch((error) => {
            console.error(error);
        });
    }

    renderDecks = () => {
        return this.state.decks.map((deck, index) => {
            const link = '/deckbuilder/' + deck._id;

            return <li key={index}>
                <div className="columns is-centered">
                    <div className="column has-text-centered is-2">
                        <Link to={link}>{deck.name}</Link>
                    </div>
                    <div className="column has-text-centered is-2">
                        <button className="delete is-medium" onClick={e => this.onDeleteClick(deck._id)} />
                    </div>
                </div>
            </li>
        })
    };

    render() {
        if (!Cookies.get('token')) {
            return <Redirect to="/login" />
        }

        const decks = this.renderDecks();

        return (
            <div>
                <NavBar />
                <div className="columns">
                    <div className="column"></div>
                    <div className="column is-half">
                        <ul>
                            {decks}
                        </ul>
                        <button className="button is-primary" onClick={this.onNewDeckClick}>New Deck!</button>
                    </div>
                    <div className="column"></div>
                </div>
            </div>
        );
    }
}

export default DeckList;