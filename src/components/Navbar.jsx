import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/SearchIcon';
import SettingsIcon from './Icons/SettingsIcon';
import UserIcon from './Icons/UserIcon';
import NavButton from './UI/NavButton';
import NavLink from './UI/NavLink';

function NavBar() {
  return (
    <nav>
      <div className="flex w-full items-center justify-between bg-gray-50 border-b border-gray-200 w-full px-4 py-1">
        {/* Left Side */}
        <div className="text-base font-medium text-gray-700 w-20 text-center">
          <NavLink>Home</NavLink>
        </div>

        {/* Center Search */}
        <span className="flex gap-2">

          <div className="border border-gray-300 rounded-md px-2 py-1">
            <input
              type="text"
              placeholder=""
              className="outline-none text-sm bg-transparent w-96"
            />
          </div>
          <NavButton>
            <SearchIcon />
          </NavButton>
        </span>

        {/* Right Side */}
        <div className="flex items-center ">
          <NavButton>
            <span className=" text-gray-700 underline">Usuário</span>
            <UserIcon className='w-8 h-6 text-2xl' />
          </NavButton>
          <NavButton>
            <SettingsIcon className='w-8 h-6 text-2xl' />
          </NavButton>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;