import React, { Component } from 'react';
import NavBar from './navbar';

class Inventory extends Component {
    state = {
        search: ''
    };

    constructor() {
        super();

        this.state.cards = [
            { cardName: 'Counterspell', color: '{U}', available: 2, quantity: 4 },
            { cardName: 'Lightning bolt', color: '{R}', available: 0, quantity: 1 },
            { cardName: 'Demonic tutor', color: '{B}', available: 1, quantity: 1 }
        ]
    }

    onSearchUpdated = event => {
        this.setState({ search: event.target.value });
    }

    getCards = () => {
        if (this.state.search) {
            return this.state.cards.filter((card) => {
                return card.cardName.toUpperCase().includes(this.state.search.toUpperCase());
            });
        }

        return this.state.cards;
    }

    onCardChanged = (event, index) => {
        let newCards = this.state.cards;
        const oldQuantity = this.state.cards[index].quantity;
        newCards[index].quantity = event.target.value;
        let cardUpdate = { cards: newCards };

        if (oldQuantity < event.target.value) {
            newCards[index].available++;
        } else {
            newCards[index].available--;
        }

        this.setState(cardUpdate);
    }

    render() {
        const cards = this.getCards().map((card, index) => {
            return <tr key={index}>
                <td>{card.cardName}</td>
                <td>{card.color}</td>
                <td>{card.available}</td>
                <td>
                    <input className="input" type="number" value={card.quantity} onChange={e => this.onCardChanged(e, index)} />
                </td>
            </tr>
        });

        return (
            <div>
                <NavBar />
                <span>Inventory</span>
                <input className="input" type="text" placeholder="Search..." ref={this.state.search} onChange={this.onSearchUpdated} />
                <table className="table is-fullwidth is-hoverable">
                    <thead>
                        <tr>
                            <th>Card</th>
                            <th>Colors</th>
                            <th>Available</th>
                            <th>Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cards}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Inventory;