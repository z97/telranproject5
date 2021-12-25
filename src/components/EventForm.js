import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ButtonPay from "./UI/buttons/ButtonPay";

const EventForm = ({create}) => {
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
            <div className="d-flex flex-column mb-3">
            <h4><input type="text" value={application.name} onChange={e => setApplication({...application, name: e.target.value})} name="Имя" placeholder="Ваше имя..."/></h4>
            <input type="text" name="telephone" placeholder="Ваш телефон" {...props}/>
            <input type="text" placeholder="email" name="email"{...props}/>
            <input type="number" id="quantity" name="quantity" min="1" max="10"{...props}/>
            <ButtonPay onClick={addNewApplication}/>
            </div>
        </div>
    );
};

export default EventForm;