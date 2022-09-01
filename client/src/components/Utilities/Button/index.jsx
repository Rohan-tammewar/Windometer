import React from 'react'

import StyledButton from './Button.styled'

const Button = ({ styleClass, children, buttonType, value }) => {
  const myClass = `button ${styleClass}`
  return <StyledButton type={buttonType} className={myClass} value={value} />
}

export default Button
