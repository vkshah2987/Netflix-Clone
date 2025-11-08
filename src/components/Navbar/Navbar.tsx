import { useEffect, useState } from "react";

import NetflixIcon from '../../assets/icons/netflix.svg?react';
import SearchIcon from '../../assets/icons/search.svg?react';
import BellIcon from '../../assets/icons/bell.svg?react';

import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuState, setMenuState] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 0);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className={`w-full h-[56px] sm:h-[60px] md:h-[68px] flex items-center justify-between px-[4%] sm:px-[4%] md:px-[3.5vw] text-white text-[12px] sm:text-[13px] md:text-[14px] fixed top-0 left-0 z-50 ${ scrolled ? 'bg-[#0C0C0C]' : 'bg-[linear-gradient(180deg,rgba(0,0,0,0.7)_10%,transparent)]' } `}>
            <div className='flex items-center gap-[20px] sm:gap-[30px] md:gap-[45px]'>
                <NetflixIcon onClick={()=>{navigate("/")}} className='w-[15vw] sm:w-[12vw] md:w-[8vw] lg:w-[4.5vw] h-max text-red-600' />
                <div className='hidden md:flex gap-[15px] lg:gap-[20px]'>
                    <a href="/">Home</a>
                    <a href="/shows">Shows</a>
                    <a href="/movies">Movies</a>
                    <a href="/latest">New & Popular</a>
                </div>
                {/* Mobile menu button - you can expand this with a hamburger menu */}
                <div className='flex justify-center items-center relative md:hidden text-[11px] sm:text-[12px]'>
                    <span className="flex justify-center items-center" onClick={() => { setMenuState(!menuState) }}>
                        <a>Browse</a>
                        <span className='border-solid border-t-[4px] border-x-[4px] md:border-t-[5px] md:border-x-[5px] border-b-0 border-t-white border-x-transparent h-0 w-0 ml-[6px] sm:ml-[8px] md:ml-[10px] transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,.07,1)]'></span>
                    </span>
                    <div className={`absolute top-full left-center mt-2 flex flex-col items-center bg-black/95 border border-gray-700 border-t-[1.5px] border-t-white rounded-md py-2 min-w-[150px] ${menuState ? 'block' : 'hidden'}`}>
                        <a href="/" className="px-4 py-2 hover:bg-white/10 transition-colors h-[50px] flex items-center">Home</a>
                        <a href="/shows" className="px-4 py-2 hover:bg-white/10 transition-colors h-[50px] flex items-center">Shows</a>
                        <a href="/movies" className="px-4 py-2 hover:bg-white/10 transition-colors h-[50px] flex items-center">Movies</a>
                        <a href="/latest" className="px-4 py-2 hover:bg-white/10 transition-colors h-[50px] flex items-center">New & Popular</a>
                    </div>
                </div>
            </div>
            <div className='flex items-center gap-[10px] sm:gap-[12px] md:gap-[15px]'>
                <div className=''><SearchIcon className='w-[18px] h-[18px] md:w-[20px] md:h-[20px]' /></div>
                <div className='hidden lg:block'>
                    <a href="">Children</a>
                </div>
                <div className=''>
                    <BellIcon className='w-[18px] h-[18px] md:w-[20px] md:h-[20px]' />
                </div>
                <div className='flex items-center cursor-pointer'>
                    <img className='rounded-[4px] w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]' src="https://occ-0-6245-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="profile" />
                    <span className='hidden lg:block border-solid border-t-[4px] border-x-[4px] md:border-t-[5px] md:border-x-[5px] border-b-0 border-t-white border-x-transparent h-0 w-0 ml-[6px] sm:ml-[8px] md:ml-[10px] transition-transform duration-[367ms] ease-[cubic-bezier(.21,0,.07,1)]'></span>
                </div>
            </div>
        </div>
    )
}

export default Navbar;