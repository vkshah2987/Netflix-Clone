// RankCard.tsx
import React from "react";
import { RankIcon } from "../../service/RankIcon"; // Reusable SVG component

interface RankCardProps {
  id: number
  rank: number;
  image: string;
  title: string;
  iconClass?: string;
}

const RankCard: React.FC<RankCardProps> = ({ rank, image, title, iconClass }) => {
  return (
        <div className=" relative w-[16.66666667%] h-[11.1vw] border-box inline-block px-[0.2vw] align-top" aria-label={title}>
          <div className="flex w-full h-full">
            <RankIcon rank={rank} className={`w-[49%] h-full ${iconClass}`} />
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${image})` }} className="w-[51%] h-full bg-no-repeat bg-cover bg-center"></div>
          </div>
        </div>
  );
};

export default RankCard;
