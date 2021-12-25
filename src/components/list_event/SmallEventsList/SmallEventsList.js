import React, {useEffect, useState} from 'react';



class SmallEventsList extends React.Component {

    constructor() {
        super();

        this.state = {
            jsonReturnedValue: null
        }
    }

    componentDidMount() {
        fetch('https://api.binance.com/api/v3/depth?limit=100&symbol=BTCUSDT')
            .then(response => response.json())
            .then(json => {
                this.setState({ jsonReturnedValue: json });
            });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.jsonReturnedValue }</h1>
            </div>
        );
    }
}

export default SmallEventsList;