// RankCard.tsx
import React, { useRef, useEffect } from "react";
import { RankIcon } from "../../service/RankIcon"; // Reusable SVG component
import { useModal } from "../../service/modalService";

interface RankCardProps {
  id: number;
  type: string;
  rank: number;
  image: string;
  title: string;
  iconClass?: string;
}

const RankCard: React.FC<RankCardProps> = ({ id, type, rank, image, title, iconClass }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { showModal, scheduleHideModal, cancelHideModal, updatePosition, cardId } = useModal();
  const hoverTimeoutRef = useRef<number | null>(null);
  const isHoveredRef = useRef(false);

  // Update position on scroll when this card's modal is visible
  useEffect(() => {
    if (cardId !== id || !isHoveredRef.current) return;

    const updatePos = () => {
      if (cardRef.current && isHoveredRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;
        
        updatePosition({
          x: rect.left + scrollX + rect.width / 2,
          y: rect.top + scrollY + rect.height / 2,
          width: rect.width,
          height: rect.height
        });
      }
    };

    window.addEventListener('scroll', updatePos, { passive: true });
    return () => window.removeEventListener('scroll', updatePos);
  }, [cardId, id, updatePosition]);

  const handleMouseEnter = () => {
    // Cancel any scheduled hide
    cancelHideModal();
    isHoveredRef.current = true;
    
    hoverTimeoutRef.current = window.setTimeout(() => {
      if (cardRef.current) {
        const rect = cardRef.current.getBoundingClientRect();
        const scrollY = window.scrollY || window.pageYOffset;
        const scrollX = window.scrollX || window.pageXOffset;
        
        // Calculate absolute position (relative to document, not viewport)
        const centerX = rect.left + scrollX + rect.width / 2;
        const centerY = rect.top + scrollY + rect.height / 2;
        
        showModal(id, {
          x: centerX,
          y: centerY,
          width: rect.width,
          height: rect.height
        }, {
          id,
          type,
          image,
          title,
          rank
        });
      }
    }, 300);
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    // Schedule hide with delay instead of immediate hide
    scheduleHideModal();
  };

  return (
        <div 
          ref={cardRef}
          className="relative w-[45%] h-[32vw] sm:w-[32%] sm:h-[22vw] md:w-1/4 md:h-[18vw] lg:w-1/5 lg:h-[14vw] xl:w-[16.66666667%] xl:h-[11.1vw] border-box inline-block px-[0.5vw] sm:px-[0.3vw] md:px-[0.2vw] align-top cursor-pointer" 
          aria-label={title}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex w-full h-full">
            <RankIcon rank={rank} className={`w-[45%] sm:w-[48%] md:w-[49%] h-full ${iconClass}`} />
            <div style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${image})` }} className="w-[55%] sm:w-[52%] md:w-[51%] h-full bg-no-repeat bg-cover bg-center rounded-r-[2px] md:rounded-r-[4px]"></div>
          </div>
        </div>
  );
};

export default RankCard;
