import React from "react";
import RankCard from "../RankCard/RankCard";
import Card from '../Card/Card'

import { getData } from "../../service/processData";


interface Item {
  title: string;
  rank: boolean;
  type: string;
  category: string;
}

interface BannerProps {
  rank?: boolean;
  data: Item;
}

const CardBanner: React.FC<BannerProps> = ({ rank, data }) => {

  const { bindingData } = getData(data.type, data.category);
  const items = bindingData?.slice(0, 10);
  console.log("Movie List: ", items)

  return (
    <div id="ranked-cards" className="flex flex-col relative border-box my-[6vw] sm:my-[4vw] md:my-[3.5vw] lg:my-[3vw]">
        <h2 className='m-0 leading-[1.3] text-white'>
            <span>
                <div className='inline-block pl-[4vw] sm:pl-[3.5vw] text-[4vw] sm:text-[2.5vw] md:text-[2vw] lg:text-[1.6vw] xl:text-[1.4vw] text-[#e5e5e5] mr-[4%] mb-[0.5em]'>{ data.title }</div>
            </span>
        </h2>

        <div className='w-full'>
            <div className='px-[4vw] sm:px-[3.5vw]'>
                <div className='overflow-x-auto overflow-y-hidden whitespace-nowrap relative scrollbar-hide'>
                    {
                        items && items.map((item: { title: string; backdrop_path: string; poster_path: string; id: number; name: string }, index: number) => (
                            rank ? <RankCard key={item.id} id={item.id} rank={index+1} title={item.title} image={item.poster_path} /> :
                            <Card key={item.id} id={item.id} title={item.title} image={item.backdrop_path} name={item.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  );
};

export default CardBanner;
