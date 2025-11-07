import React, { useState, useEffect } from 'react'

import { heroSectionData } from '../../assets/jsonData/heroSectionData'

import PlayIcon from '../../assets/icons/playBtn.svg?react'
import InfoIcon from '../../assets/icons/info.svg?react'

interface HeroProps {
    state: string;
}

const Hero: React.FC<HeroProps> = ({ state }) => {
    const [data, setData] = useState<{id: number, backdrop: string, logo: string, name: string, description: string, languages: string, rating: string} | undefined>()

    useEffect(() => {
        if(state === "home"){
            const randomCategory = Math.random() < 0.5 ? "shows" : "movies";
            state = randomCategory;
        }

        const totalLength = heroSectionData['shows'].length;
        const indx = Math.floor(Math.random() * totalLength);
        setData(heroSectionData[state as keyof typeof heroSectionData][indx])
    }, [state])

    return (
        <>
        <div
            style={{ backgroundImage: `url(${data?.backdrop})` }}
            className='relative z-1 w-full min-h-[90vw] lg:min-h-[60vw] bg-no-repeat bg-cover bg-center'>
                {/* Bottom gradient overlay */}
                <div className="absolute bottom-0 left-0 right-0 h-100 bg-gradient-to-t from-[#141414] to-transparent"></div>

                {/* Content */}
                <div className="absolute flex justify-between h-full w-full text-white z-10 pl-[3.5vw]">
                    <div className="w-[35vw] pt-[35vw] lg:pt-[8vw] flex flex-col">
                        <img src={data?.logo} alt="logo" />
                        <div>
                            <div className='text-[1.6vw] font-semibold tracking-wide my-[1vw]'>Watch in {data?.languages}</div>
                            <div className='text-[1.2vw] font-[300] tracking-wide'>{data?.description}</div>
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
                    <div className="flex items-center mt-[64vw] lg:mt-[38vw] bg-[rgba(51,51,51,0.6)] border-l-[3px] border-[#dcdcdc] solid box-border text-[1.1vw] h-[2.4vw] px-[3.5vw] py-[0.5vw] pl-[0.8vw] tracking-wide">
                        {data?.rating}
                    </div>
                </div>
        </div>
        </>
    )
}

export default Hero