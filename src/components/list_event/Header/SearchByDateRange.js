

import React, { Component } from 'react'

import { $ }  from 'react-jquery-plugin'

class SearchByDateRange extends Component {
    componentDidMount() {
        $(window).scroll(() => {
            // put your code here
            $( function() {
                $( "#datepicker" ).datepicker();
            } );
        });

    }
    render () {
        return (
            <div>
                <h2>Date Range:</h2>
                <p>From: <input type="date" id="datepicker"/></p>
                <p>To: <input type="date" id="datepicker"/></p>

            </div>
        )
    }
}

export default SearchByDateRange;