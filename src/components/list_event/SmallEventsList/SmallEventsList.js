import React, {useEffect, useState} from 'react';
import json from './package.json'


class SmallEventsList extends React.Component {

    constructor() {
        super();

        this.state = {
            jsonReturnedValue: null
        }
    }

    componentDidMount() {
        fetch(`./package.json`,
            {headers : {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }}
        )
            .then(response => response.json())
            .then(json => {
                this.setState({jsonReturnedValue: json });
            });
    }

    render() {
        return (
            <div>
            </div>
        );
    }
}

export default SmallEventsList;