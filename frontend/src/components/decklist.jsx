import React, { Component } from 'react';

class DeckList extends Component {
    state = { 
        
    }

    render() { 
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