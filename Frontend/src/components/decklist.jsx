import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import NavBar from './navbar';
const Cookies = require('js-cookie');
const deckService = require('../services/deckService');

class DeckList extends Component {
    state = {
        decks: []
    };

    async componentWillMount() {
        const decks = await deckService.getDecks();
        this.setState({ decks: decks });
    }

    onNewDeckClick = async () => {
        const deck = await deckService.createDeck();

        let decks = this.state.decks;
        decks.push(deck);
        this.setState({ decks: decks });
    };

    onDeleteClick = async (id) => {
        await deckService.deleteDeck(id);

        const decks = this.state.decks.filter((deck) => {
            return deck._id !== id;
        });

        this.setState({ decks: decks });
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
        });
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