import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from './Icons/SearchIcon';
import SettingsIcon from './Icons/SettingsIcon';
import UserIcon from './Icons/UserIcon';

function NavBar() {
  return (
    <nav>
      <div className="h-10 flex w-full items-center justify-between bg-gray-50 border-b border-gray-200 w-full  px-4">
        {/* Left Side */}
        <div className="text-base font-medium text-gray-700 w-20 text-center">
          <Link className='w-6 h-6 underline' to="/">Home</Link>
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
          <button className="ml-10">
            <SearchIcon />
          </button>
        </span>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <button className="hover:bg-gray-200 rounded-full p-2">
            <span className="text-sm text-gray-700 underline">Usuário</span>
            <UserIcon className='w-8 h-6 text-2xl' />
          </button>
          <button className="hover:bg-gray-200 rounded-full p-1">
            <SettingsIcon className='w-8 h-6 text-2xl' />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;