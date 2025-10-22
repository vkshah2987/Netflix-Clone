import refImg from '../../assets/refFiles/refImg.webp'
import refLogo from '../../assets/refFiles/refLogo.webp'

import PlayIcon from '../../assets/icons/playBtn.svg?react'
import InfoIcon from '../../assets/icons/info.svg?react'

const Hero = () => {

    return (
        <>
        <div
            style={{ backgroundImage: `url(${refImg})` }}
            className='relative z-1 w-full min-h-[57vw] bg-no-repeat bg-cover bg-center'>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-[#141414] to-transparent"></div>

                {/* Content */}
                <div className="absolute flex justify-between h-full w-full text-white z-10 pl-[3.5vw]">
                    <div className="w-[35vw] pt-[6vw] flex flex-col">
                        <img src={refLogo} alt="logo" />
                        <div>
                            <div className='text-[1.6vw] font-semibold tracking-wide my-[1vw]'>Watch in Hindi, Telugu, Tamil, Kannada, Malayalam</div>
                            <div className='text-[1.2vw] font-[300] tracking-wide'>Believing himself to be invincible, a demon vows revenge on Lord Vishnu for his brother's death, but his devout son stands in the way.</div>
                        </div>
                        <div className='flex gap-x-[1rem] mt-[1.5vw]'>
                            <button className='flex pl-[2rem] pr-[2.4rem] py-[0.8rem] gap-x-[1rem] bg-white text-black rounded-sm'>
                                <PlayIcon className="w-[2.4rem] h-[2.4rem] text-black" />
                                <span className='text-[1.6rem] font-[500] tracking-wide'>Play</span>
                            </button>
                            <button className='flex pl-[2rem] pr-[2.4rem] py-[0.8rem] gap-x-[1rem] bg-[rgba(109,109,110,0.7)] text-white rounded-sm'>
                                <InfoIcon className="w-[2.4rem] h-[2.4rem] text-white" />
                                <span className='text-[1.6rem] font-[500] tracking-wide'>More Info</span>
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center mt-[36vw] bg-[rgba(51,51,51,0.6)] border-l-[3px] border-[#dcdcdc] solid box-border text-[1.1vw] h-[2.4vw] px-[3.5vw] py-[0.5vw] pl-[0.8vw] tracking-wide">
                        U/A 13+
                    </div>
                </div>
        </div>
        </>
    )
}

export default Hero