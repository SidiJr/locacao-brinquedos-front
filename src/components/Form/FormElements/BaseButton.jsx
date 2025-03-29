import clsx from 'clsx'
import React from 'react'

const Button = ({ isForm, text, buttonClass }) => {
  return (

    <button type={isForm ? "submit" : "button"} className={clsx("bg-black text-white px-4 py-2 rounded-md", buttonClass)}>{text}</button>

  )
}

export default Button
