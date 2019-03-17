import React, { Component } from 'react';
import NavBar from './navbar';
import CardSearcher from './cardSearcher';

class DeckBuilder extends Component {
    state = {}
    render() {
        return (<div>
            <NavBar />
            <h2>Deckbuilder</h2>
            <CardSearcher />
        </div>);
    }
}

export default DeckBuilder;