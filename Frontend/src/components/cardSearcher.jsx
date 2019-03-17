import React, { Component } from 'react';

class CardSearcher extends Component {
    state = {
        search: ''
    };

    onSearchUpdated = event => {
        this.setState({ search: event.target.value });
    }

    render() {
        return (
            <div>
                <input className="input" type="text" placeholder="Search..." ref={this.state.search} onChange={this.onSearchUpdated} />
                <div className="level-left">
                    <p>Colors:</p>
                </div>
                <div className="level-left">
                    <div className="Color-Select">
                        <input type="checkbox" />
                        <i className="ms ms-cost ms-g"></i>
                    </div>
                    <div className="Color-Select">
                        <input type="checkbox" />
                        <i className="ms ms-cost ms-r"></i>
                    </div>
                    <div className="Color-Select">
                        <input type="checkbox" />
                        <i className="ms ms-cost ms-u"></i>
                    </div>
                    <div className="Color-Select">
                        <input type="checkbox" />
                        <i className="ms ms-cost ms-b"></i>
                    </div>
                    <div className="Color-Select">
                        <input type="checkbox" />
                        <i className="ms ms-cost ms-w"></i>
                    </div>
                </div>
            </div>);
    }
}

export default CardSearcher;