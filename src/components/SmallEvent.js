import React from 'react';

const SmallEvent = (props) => {
    return (
        <div>
            <strong>{props.event.title}</strong>
            <div>
                {props.event.body}
            </div>
            <div></div>
            <div>
                <button onClick={}>подробнее</button>
            </div>
        </div>
    );
};

export default SmallEvent;