import React from "react";

export default function HomeHeader(){
    return (
      <header className="flex flex-row w-full items-center justify-between px-4 py-2 bg-gray-50 border-b border-gray-200 w-full">
        {/* Left Side */}
        <div className="text-base font-medium text-gray-700">Home</div>

        {/* Center Search */}
        <div className="flex items-center border border-gray-300 rounded-md px-2 py-1">
          <input
            type="text"
            placeholder="" // No placeholder visible
            className="outline-none text-sm bg-transparent"
          />
          <button className="ml-1">
            {/* <SearchIcon /> */}
          </button>
        </div>

        {/* Right Side */}
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-700">Usuário</span>
          <button className="hover:bg-gray-200 rounded-full p-1">
            <i className="fa-regular fa-circle-user"></i>
          </button>
          <button className="hover:bg-gray-200 rounded-full p-1">
            {/* <SettingsIcon /> */}
          </button>
        </div>
      </header>
    )
}