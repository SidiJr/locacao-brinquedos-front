import React from 'react'

const Button = ({ isForm, text }) => {
  return (

    <button type={isForm ? "submit" : "button"}>{text}</button>

  )
}

export default Button
