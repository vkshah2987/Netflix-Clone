import React, { useEffect, useState } from 'react';
import Hero from '../../components/HeroSection/HeroSection';
import CardBanner from '../../components/CardBanner/CardBanner';
import { mainPageData } from '../../assets/jsonData/mainPageData';

interface MainPageProps {
    state: string;
}

const MainPage: React.FC<MainPageProps> = ({ state }) => {
    const [data, setData] = useState<{ title: string; rank: boolean; type: string; category: string; }[]>([])
    useEffect(() => setData(mainPageData[state as keyof typeof mainPageData]), [state])
    
    return (
        <div className="main-page">
            {state != 'latest' && <Hero state={state} />}
            <div className={`${state != 'latest' ? 'mt-[-19vw]' : 'pt-[50px]'} relative z-2`}>
                {
                    data.map((item, index) => (
                        <CardBanner key={index} data={item} rank={item.rank} />
                    ))
                }
            </div>
        </div>
    );
};

export default MainPage;