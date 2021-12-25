import React from 'react';

const ButtonPay = ({children, ...props}) => {
    return (

            <button {...props} type="button" className="btn btn-primary">
                {children}
            </button>

    );
};

export default ButtonPay;