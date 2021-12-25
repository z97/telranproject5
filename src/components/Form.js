import React, {useState} from 'react';
import {Button} from "react-bootstrap";
import ButtonPay from "./UI/buttons/ButtonPay";

const Form = (props) => {
    const [name, setName] = useState('qwerty')
    const addNewEvent = (e) => {
e.preventDefault();
    }
    return (
        <div>
            <input type="text" placeholder="name" value={name} onChange={e => e.target.value} {...props}/>
            <input type="text" placeholder="cellnumber"{...props}/>
            <input type="text" placeholder="email"{...props}/>
            <input type="number" id="quantity" name="quantity" min="1" max="10"{...props}/>
            <ButtonPay onClick={addNewEvent}/>
        </div>
    );
};

export default Form;