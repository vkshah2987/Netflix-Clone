import React from 'react';
import PlayIcon from '../../assets/icons/playBtn.svg?react';
import ThumbsupIcon from '../../assets/icons/thumbsup.svg?react';
import Plus from '../../assets/icons/plus.svg?react';
import ChevrondownIcon from '../../assets/icons/chevrondown.svg?react';

import refImg from '../../assets/img/28YL.webp';

const MiniModal: React.FC = () => {
    return (
        <div className='w-[23vw] bg-[#181818] shadow-[0px_3px_10px_rgba(0,0,0,0.75)]'>
            <div className='w-full h-[13.5vw] relative overflow-hidden'>
                <img src={refImg} className='w-full h-full' alt="" />
                <h2 className='absolute bottom-0 left-[1vw] text-white'>28 Year Later</h2>
            </div>
            <div className='w-full h-[8.5vw] p-[1em]'>
                <div className='w-full flex justify-between mb-[1em]'>
                    <div className='flex gap-x-[0.5rem]'>
                        <button className='border-solid border-[2px] border-white rounded-[999px] p-[0.8rem] bg-white flex items-center justify-center'>
                            <div className='w-[1.8rem] h-[1.8rem]'>
                                <PlayIcon className='w-full h-full' />
                            </div>
                        </button>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center'>
                            <div className='w-[1.8rem] h-[1.8rem]'>
                                <Plus className='w-full h-full text-white' />
                            </div>
                        </button>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center'>
                            <div className='w-[1.8rem] h-[1.8rem]'>
                                <ThumbsupIcon className='w-full h-full text-white' />
                            </div>
                        </button>
                    </div>
                    <div>
                        <button className='border-solid border-[2px] border-[rgba(255,255,255,0.7)] border-[hsla(0, 0%, 100%, .5)] rounded-[999px] p-[0.8rem] bg-[rgba(42, 42, 42, .6)] flex items-center justify-center'>
                            <div className='w-[1.8rem] h-[1.8rem]'>
                                <ChevrondownIcon className='w-full h-full text-white' />
                            </div>
                        </button>
                    </div>
                </div>
                <div className='flex align-center gap-x-[0.715em] text-white items-center my-[0.8em]'>
                    <span className='border-solid border-[hsla(0, 0%, 100%, .4)] border-[1px] px-[0.4em] text-[#bcbcbc] tracking-[0.2rem]'>U/A 13+</span>
                    <span className='text-[#bcbcbc]'>Limited Series</span>
                    <span className='border-solid border-[hsla(0, 0%, 100%, .4)] border-[1px] px-[0.5em] rounded-[3px] text-[0.7em] h-max'>HD</span>
                </div>
                <div className='flex items-center gap-x-[0.5rem] text-white mb-[0.5em]'>
                    <span>Quirky</span>
                    <span className='inline-block bg-[#646464] h-[0.35vw] pr-[0.35vw] rounded-[999px]'></span>
                    <span>Romantic</span>
                    <span className='inline-block bg-[#646464] h-[0.35vw] pr-[0.35vw] rounded-[999px]'></span>
                    <span>Period Piece</span>
                </div>
            </div>
        </div>
    );
}

export default MiniModal;