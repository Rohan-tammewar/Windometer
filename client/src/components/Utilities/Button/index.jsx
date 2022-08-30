import React from 'react';

import StyledButton from './Button.styled';

const Button = ({ styleClass, onClick, children, buttonType, value }) => {
    const handleClick = (event) => onClick(event);

    const myClass = `button ${styleClass}`;
    return (
        <StyledButton type={buttonType} className={myClass} onClick={handleClick} value={value} />
    );
};

export default Button;