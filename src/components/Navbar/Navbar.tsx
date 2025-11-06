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
        <div className={`w-full h-[56px] sm:h-[60px] md:h-[68px] flex items-center justify-between px-[4%] sm:px-[4%] md:px-[3.5vw] text-white text-[12px] sm:text-[13px] md:text-[14px] fixed top-0 left-0 z-50 ${ scrolled ? 'bg-[#0C0C0C]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]' } `}>
            <div className='flex items-center gap-[20px] sm:gap-[30px] md:gap-[45px]'>
                <NetflixIcon className='w-[20vw] sm:w-[12vw] md:w-[8vw] lg:w-[4.5vw] h-max text-red-600' />
                <div className='hidden md:flex gap-[15px] lg:gap-[20px]'>
                    <a href="/">Home</a>
                    <a href="/shows">Shows</a>
                    <a href="/movies">Movies</a>
                    <a href="/latest">New & Popular</a>
                </div>
                {/* Mobile menu button - you can expand this with a hamburger menu */}
                <div className='md:hidden text-[11px] sm:text-[12px]'>
                    <a href="/">Browse</a>
                </div>
            </div>
            <div className='flex items-center gap-[10px] sm:gap-[12px] md:gap-[15px]'>
                <div className='hidden sm:block'><SearchIcon className='w-[18px] h-[18px] md:w-[20px] md:h-[20px]' /></div>
                <div className='hidden lg:block'>
                    <a href="">Children</a>
                </div>
                <div className='hidden sm:block'>
                    <BellIcon className='w-[18px] h-[18px] md:w-[20px] md:h-[20px]' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <img className='rounded-[4px] w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]' src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="profile" />
                    <span className='border-solid border-t-[4px] border-x-[4px] md:border-t-[5px] md:border-x-[5px] border-b-0 border-t-white border-x-transparent h-0 w-0 ml-[6px] sm:ml-[8px] md:ml-[10px] transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,.07,1)]'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;