import React from 'react';

const SmallEvent = (props) => {
    return (
        <div>
            <strong>{props.event.title}</strong>
            <div>
                {props.event.body}
            </div>
            <div>
                <button onClick={() => router.push(`/`)}
            </div>
        </div>
    );
};

export default SmallEvent;