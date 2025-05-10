import React from 'react';
import { pages } from '../lib/utils';
import SettingsIcon from './Icons/SettingsIcon';
import UserIcon from './Icons/UserIcon';
import NavButton from './UI/NavButton';
import SearchBar from './UI/SearchBar';

function NavBar() {

  const path = window.location.pathname;

  const currentPage = pages.find(page => page.link == path);

  return (
    <nav>
      <div className="flex w-full items-center justify-between bg-gray-50 border-b-2 border-gray-200 w-full px-4 py-1">
        {/* Left Side */}
        <p className="text-base font-medium text-gray-700 w-full max-w-30 text-nowrap text-center underline">{`${currentPage?.section.toUpperCase()} > ${currentPage?.title.toUpperCase()}`}</p>

        {/* Center Search */}
        <SearchBar/>

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