import React from 'react'

const NavButton = ({ onClick, children}) => {
  return (

    <button className={`flex hover:bg-gray-200 rounded-full p-2 transition duration-200 cursor-pointer justify-center`} onClick={onClick}>{children}</button>

  )
}

export default NavButton
