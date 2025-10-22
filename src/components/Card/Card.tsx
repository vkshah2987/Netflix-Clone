import React from 'react'

interface CardProps {
  id: number;
  image: string;
  title: string;
  name?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, name, className }) => {
    return (
        <div className=" relative w-[16.66666667%] h-[9.5vw] border-box inline-block px-[0.2vw] align-top">
          <div className="flex relative w-full h-full">
            <img src={`https://image.tmdb.org/t/p/original${image}`} key={id} alt={title} className={`w-full h-full object-cover brightness-70`} />
            <div className='absolute w-[13vw] text-wrap bottom-0 left-5 text-white'>
                <h2>{title || name}</h2>
            </div>
          </div>
        </div>
    )
}

export default Card