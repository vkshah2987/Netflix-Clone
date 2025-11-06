import FacebookIcon from '../../assets/icons/facebook.svg?react';
import InstagramIcon from '../../assets/icons/instagram.svg?react';
import TwitterIcon from '../../assets/icons/twitter.svg?react';
import YoutubeIcon from '../../assets/icons/youtube.svg?react';

const Footer = () => {
    return (
        <div className="mt-[20px] mx-auto mb-0 px-[6%] sm:px-[5%] md:px-[4%] w-full max-w-[1200px] pt-[30px] sm:pt-[40px] md:pt-[50px]">
            <div className="flex mb-[1em] gap-[12px] sm:gap-[15px] text-white">
                <div><FacebookIcon className='h-[20px] w-[28px] sm:h-[22px] sm:w-[32px] md:h-[25px] md:w-[36px]' /></div>
                <div><InstagramIcon className='h-[20px] w-[28px] sm:h-[22px] sm:w-[32px] md:h-[25px] md:w-[36px]' /></div>
                <div><TwitterIcon className='h-[20px] w-[28px] sm:h-[22px] sm:w-[32px] md:h-[25px] md:w-[36px]' /></div>
                <div><YoutubeIcon className='h-[20px] w-[28px] sm:h-[22px] sm:w-[32px] md:h-[25px] md:w-[36px]' /></div>
            </div>
            <ul className='flex flex-start flex-row flex-wrap text-[11px] sm:text-[12px] md:text-[13px] mb-[14px] p-0 text-[#808080]'>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Audio Description</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Help Centre</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Gift Cards</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Media Centre</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Investor Relations</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Jobs</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Terms of Use</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Privacy</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Legal Notices</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Cookie Preferences</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Corporate Information</a></li>
                <li className='basis-1/2 sm:basis-1/3 md:basis-1/4 list-none mb-3 sm:mb-4 pr-[12px] sm:pr-[18px] md:pr-[22px] box-border'><a href="">Contact Us</a></li>
            </ul>
            <div className='text-[10px] sm:text-[11px] text-[#808080] mb-[15px]'>
                <span className='block sm:inline'>© 1997-2025 Netflix, Inc.</span>
                <span className='block sm:inline sm:ml-1'>| Made with ❤️ by Vishal Kumar Shah</span>
            </div>
        </div>
    )
}

export default Footer;