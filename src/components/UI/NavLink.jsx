import React from 'react'
import { Link } from 'react-router-dom';

const NavLink = ({link, children}) => {
  return (

    <Link className={`hover:bg-gray-200 rounded-full px-4 py-2 transition duration-200 cursor-pointer underline`} to={link}>{children}</Link>

  )
}

export default NavLink
