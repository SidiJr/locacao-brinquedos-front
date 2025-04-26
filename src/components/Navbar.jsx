import React from 'react';
import { pages } from '../lib/utils';
import SearchIcon from './Icons/SearchIcon';
import SettingsIcon from './Icons/SettingsIcon';
import UserIcon from './Icons/UserIcon';
import NavButton from './UI/NavButton';

function NavBar() {

  const path = window.location.pathname;

  return (
    <nav>
      <div className="flex w-full items-center justify-between bg-gray-50 border-b-2 border-gray-200 w-full px-4 py-1">
        {/* Left Side */}
        <p className="text-base font-medium text-gray-700 w-min text-nowrap text-center underline">{pages.find(page => page.link == path)?.navText}</p>

        {/* Center Search */}
        <span className="flex gap-2">

          <div className="border-2 border-gray-300 rounded-md">
            <input
              type="text"
              placeholder=""
              className="h-full pl-1 text-sm bg-transparent w-96"
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