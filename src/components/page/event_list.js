import React, {useState} from 'react';

const EventList = () => {
    const[events, setEvents] = useState([

    ])

    const remove = id => {
        setEvents(events.filter(event => event.id !== id));
    }

    return (
        <div>
            
        </div>
    );
};

export default EventList;