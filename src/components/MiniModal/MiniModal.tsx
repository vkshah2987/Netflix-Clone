import React from 'react';
import PlayIcon from '../../assets/icons/playBtn.svg?react';
import ThumbsupIcon from '../../assets/icons/thumbsup.svg?react';
import Plus from '../../assets/icons/plus.svg?react';
import ChevrondownIcon from '../../assets/icons/chevrondown.svg?react';
import { Link } from 'react-router-dom';

import refImg from '../../assets/img/28YL.webp';

interface MiniModalProps {
  data?: {
    id: number;
    type: string;
    image?: string;
    title?: string;
    rank?: number;
  } | null;
  onClose?: () => void;
}

const MiniModal: React.FC<MiniModalProps> = ({ data, onClose }) => {
    // Use data from props or fallback to default
    const displayImage = data?.image 
        ? `https://image.tmdb.org/t/p/original${data.image}` 
        : refImg;
    const displayTitle = data?.title || '28 Year Later';

    return (
        <div className='w-[320px] sm:w-[400px] md:w-[45vw] lg:w-[32vw] xl:w-[23vw] max-w-[95vw] bg-[#181818] shadow-[0px_3px_10px_rgba(0,0,0,0.75)] rounded-[6px] sm:rounded-[4px] overflow-hidden'>
            <div className='w-full h-[180px] sm:h-[225px] md:h-[26vw] lg:h-[18vw] xl:h-[13.5vw] relative overflow-hidden'>
                <Link 
                    to={`/player/${data?.type}/${data?.id}`}
                    onClick={() => {
                        // Close the modal when clicking to navigate
                        if (onClose) {
                            onClose();
                        }
                    }}
                >
                    <img
                        src={displayImage}
                        className='w-full h-full object-cover'
                        alt={displayTitle}
                        onError={(e) => {
                            // Fallback if image fails to load
                            e.currentTarget.src = refImg;
                        }}
                    />
                    <div className='absolute bottom-0 left-0 right-0 p-[12px] sm:p-[16px] md:p-[1.5vw] lg:p-[1.2vw] xl:p-[1vw] bg-gradient-to-t from-[#181818] to-transparent'>
                        <h2 className='text-white text-[18px] sm:text-[20px] md:text-[2vw] lg:text-[1.5vw] xl:text-[1.2vw] font-bold m-0 line-clamp-2'>
                            {/* {hasRank && <span className='text-[2vw] font-black mr-2'>#{data.rank}</span>} */}
                            {displayTitle}
                        </h2>
                    </div>
                </Link>
            </div>
            <div className='w-full p-[16px] sm:p-[18px] md:p-[1em]'>
                <div className='w-full flex justify-between mb-[12px] sm:mb-[14px] md:mb-[1em]'>
                    <div className='flex gap-x-[8px] sm:gap-x-[10px] md:gap-x-[0.5rem]'>
                        <button className='border-solid border-[2px] border-white rounded-[999px] p-[10px] sm:p-[12px] md:p-[0.7rem] lg:p-[0.8rem] bg-white flex items-center justify-center hover:bg-opacity-80 transition-all'>
                            <div className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[1.6rem] md:h-[1.6rem] lg:w-[1.8rem] lg:h-[1.8rem]'>
                                <PlayIcon className='w-full h-full' />
                            </div>
                        </button>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[10px] sm:p-[12px] md:p-[0.7rem] lg:p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center hover:border-white transition-all'>
                            <div className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[1.6rem] md:h-[1.6rem] lg:w-[1.8rem] lg:h-[1.8rem]'>
                                <Plus className='w-full h-full text-white' />
                            </div>
                        </button>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[10px] sm:p-[12px] md:p-[0.7rem] lg:p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center hover:border-white transition-all'>
                            <div className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[1.6rem] md:h-[1.6rem] lg:w-[1.8rem] lg:h-[1.8rem]'>
                                <ThumbsupIcon className='w-full h-full text-white' />
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[10px] sm:p-[12px] md:p-[0.7rem] lg:p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center hover:border-white transition-all'>
                            <div className='w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] md:w-[1.6rem] md:h-[1.6rem] lg:w-[1.8rem] lg:h-[1.8rem]'>
                                <ChevrondownIcon className='w-full h-full text-white' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='flex flex-wrap align-center gap-x-[8px] sm:gap-x-[10px] md:gap-x-[0.715em] gap-y-[6px] text-white items-center my-[10px] sm:my-[12px] md:my-[0.8em] text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px]'>
                    <span className='border-solid border-[hsla(0, 0%, 100%, .4)] border-[1px] px-[6px] py-[2px] text-[#bcbcbc] tracking-[0.1rem] sm:tracking-[0.15rem] md:tracking-[0.2rem]'>U/A 13+</span>
                    <span className='text-[#bcbcbc]'>Limited Series</span>
                    <span className='border-solid border-[hsla(0, 0%, 100%, .4)] border-[1px] px-[6px] py-[2px] rounded-[3px] text-[11px] sm:text-[12px] h-max'>HD</span>
                </div>
                <div className='flex flex-wrap items-center gap-x-[8px] sm:gap-x-[10px] gap-y-[6px] text-white mb-[8px] text-[13px] sm:text-[14px] md:text-[13px] lg:text-[14px]'>
                    <span>Quirky</span>
                    <span className='inline-block bg-[#646464] h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[0.35vw] md:w-[0.35vw] rounded-[999px]'></span>
                    <span>Romantic</span>
                    <span className='inline-block bg-[#646464] h-[4px] w-[4px] sm:h-[5px] sm:w-[5px] md:h-[0.35vw] md:w-[0.35vw] rounded-[999px]'></span>
                    <span>Period Piece</span>
                </div>
            </div>
        </div>
    );
}

export default MiniModal;