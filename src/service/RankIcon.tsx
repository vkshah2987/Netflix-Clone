import React from 'react';

import One from '../assets/icons/one.svg?react';
import Two from '../assets/icons/two.svg?react';
import Three from '../assets/icons/three.svg?react';
import Four from '../assets/icons/four.svg?react';
import Five from '../assets/icons/five.svg?react';
import Six from '../assets/icons/six.svg?react';
import Seven from '../assets/icons/seven.svg?react';
import Eight from '../assets/icons/eight.svg?react';
import Nine from '../assets/icons/nine.svg?react';
import Ten from '../assets/icons/ten.svg?react';

type RankIconProps = {
  rank: number;
  className?: string;
};

export const RankIcon: React.FC<RankIconProps> = ({ rank, className = '' }) => {
    const defaultClass = 'w-12 h-12 text-gray-500';
    const icons = {
        1: <One className={`${defaultClass} ${className}`} />,
        2: <Two className={`${defaultClass} ${className}`} />,
        3: <Three className={`${defaultClass} ${className}`} />,
        4: <Four className={`${defaultClass} ${className}`} />,
        5: <Five className={`${defaultClass} ${className}`} />,
        6: <Six className={`${defaultClass} ${className}`} />,
        7: <Seven className={`${defaultClass} ${className}`} />,
        8: <Eight className={`${defaultClass} ${className}`} />,
        9: <Nine className={`${defaultClass} ${className}`} />,
        10: <Ten className={`${defaultClass} ${className}`} />,
    };

  return icons[rank as keyof typeof icons] || null;
};
