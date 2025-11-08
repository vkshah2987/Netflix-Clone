import React from 'react';
import { getVideoData } from '../../service/processData';
import { useNavigate, useParams } from 'react-router-dom';
import BackArrowIcon from '../../assets/icons/backArrow.svg?react';

const Player: React.FC = () => {

    const {type, id} = useParams();
    const navigate = useNavigate();
    const { videoData } = getVideoData(type || 'movie', id || '0');
    const item = videoData && videoData.length > 0 ? videoData[0] : null;
    console.log("Video Data: ", videoData);

    return (
        <div className="player h-[100vh]">
            <span onClick={()=>{navigate('/')}} className='absolute top-[1vw] left-[0.6vw] bg-[#000] border-[2px] border-solid border-[#fff] p-[5px] rounded-[999px] cursor-pointer z-10 hover:scale-110 transition-transform'><BackArrowIcon className='text-white h-[2.5vw] w-auto' /></span>
            <iframe width="100%" height="100%" src={`https://www.youtube.com/embed/${item?.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
        </div>
    )
};

export default Player;