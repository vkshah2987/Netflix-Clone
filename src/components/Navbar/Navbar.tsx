import { useEffect, useState } from "react";

import NetflixIcon from '../../assets/icons/netflix.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';
import BellIcon from '../../assets/icons/bell.svg?react';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full h-[68px] flex items-center justify-between px-[3.5vw] text-white text-[14px] ${ scrolled ? 'bg-[#0C0C0C]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]' } `}>
            <div className='flex items-center gap-[45px]'>
                <NetflixIcon className='w-[4.5vw] h-max text-red-600' />
                <div className='flex gap-[20px]'>
                    <a href="/">Home</a>
                    <a href="/shows">Shows</a>
                    <a href="/movies">Movies</a>
                    <a href="/latest">New & Popular</a>
                </div>
            </div>
            <div className='flex items-center gap-[15px]'>
                <div><SearchIcon /></div>
                <div>
                    <a href="">Children</a>
                </div>
                <div>
                    <BellIcon />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <img className='rounded-[4px]' src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="profile" />
                    <span className='border-solid border-t-[5px] border-x-[5px] border-b-0 border-t-white border-x-transparent h-0 w-0 ml-[10px] transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,.07,1)]'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;