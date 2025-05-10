import React, { useEffect, useRef, useState } from 'react';
import { pages } from '../../lib/utils';
import ArrowRightIcon from '../Icons/ArrowRightIcon';
import SearchIcon from '../Icons/SearchIcon';
import NavButton from './NavButton';

function SearchBar() {

    const [search, setSearch] = useState("");
    const [selected, setSelected] = useState(false);
    const [redirecting, setRedirecting] = useState(false);

    const searchString = search.toLowerCase();

    const filteredPages = pages.filter(page => page.title.toLowerCase().includes(searchString))
    .sort((a, b) => a.title > b.title ? 1 : -1);

    return (
        <>
            {/* Center Search */}
            <span className="relative flex gap-2">

                <div className="border-2 border-gray-300 rounded-md ml-15">
                    <input
                        value={search}
                        onFocus={()=>{setSelected(true)}}
                        onBlur={()=>{
                            setTimeout(()=>{
                                if(!redirecting) setSelected(false);
                            },100)
                        }}
                        onChange={(e) => { setSearch(e.target.value) }}
                        type="text"
                        placeholder=""
                        className="h-full pl-1 text-sm bg-transparent w-96"
                    />
                    {(selected && filteredPages.length > 0) &&
                        <div className='absolute w-96 h-min max-h-40 overflow-y-scroll bg-white top-8 border-2 bottom-rounded-md text-slate-500'>
                            <ul>
                                {filteredPages.map(page => (
                                    <li key={page.link} className="flex gap-2 items-center">
                                        <a 
                                            href={page.link} 
                                            onClick={()=>{
                                                setSearch(page.title)
                                                setRedirecting(true)
                                            }} 
                                            className="hover:bg-gray-200 w-full pl-2"
                                        >{page.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    }
                </div>
                <NavButton>
                    <SearchIcon />
                </NavButton>
            </span>
        </>
    );
}

export default SearchBar;