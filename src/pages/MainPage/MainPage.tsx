import React from 'react';
import Hero from '../../components/HeroSection/HeroSection';
import CardBanner from '../../components/CardBanner/CardBanner';

import refImg from '../../assets/refFiles/refImg.webp'

const MainPage: React.FC = () => {
    const data = [
        {
            title: 'Top 10 Shows in India Today',
            rank: true,
            type: 'tv',
            category: 'top_rated'
        },
        {
            title: 'Crime TV Shows',
            rank: false,
            type: 'movie',
            category: 'now_playing'
        },
        {
            title: 'Top 10 Movies in India Today',
            rank: true,
            type: 'movie',
            category: 'top_rated'
        },
        {
            title: 'Popular TV Shows',
            rank: false,
            type: 'tv',
            category: 'popular'
        },
        {
            title: 'Popular Movies',
            rank: false,
            type: 'movie',
            category: 'popular'
        },
        {
            title: 'Airing Today TV Shows',
            rank: false,
            type: 'tv',
            category: 'airing_today'
        }
    ];

    return (
        <div className="main-page">
            <Hero />
            <div className='mt-[-19vw] relative z-2'>
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