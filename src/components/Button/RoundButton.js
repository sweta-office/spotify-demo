import React from 'react'
import Button from 'react-bootstrap/Button';
import RoundedButton from './RoundedButtonStyled';

const RoundButton = ({ buttonText }) => {
    return (
        
        <RoundedButton>
            <button variant="light" className="roundedButton rounded-pill">{buttonText}</button>
        </RoundedButton>
    )
}

export default RoundButton;

