import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ButtonPay from "./UI/buttons/ButtonPay";

const EventForm = (props) => {
    const [application, setApplication] = useState({name: '', cellphone: '', email: '', quantity: ''})
    const addNewApplication = (e) => {
        e.preventDefault()
        const newApplication = {
            ...application, id: Date.now()
        }
        create(newApplication)
        setApplication({name: '', cellphone: '', email: '', quantity: ''})
    }
    return (
        <div>
            <input type="text" placeholder="name" value={application.name} onChange={e => setApplication({...application, name: e.target.value})}/>
            <input type="text" placeholder="cellnumber"{...props}/>
            <input type="text" placeholder="email"{...props}/>
            <input type="number" id="quantity" name="quantity" min="1" max="10"{...props}/>
            <ButtonPay onClick={addNewApplication}/>
        </div>
    );
};

export default EventForm;