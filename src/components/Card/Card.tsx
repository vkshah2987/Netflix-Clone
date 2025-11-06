import React, { useRef, useEffect } from 'react'
import { useModal } from '../../service/modalService'

interface CardProps {
  id: number;
  image: string;
  title: string;
  name?: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ id, image, title, name }) => {
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
      
      // Add a slight delay before showing the modal
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
            image,
            title: title || name
          });
        }
      }, 300); // 300ms delay before showing modal
    };

    const handleMouseLeave = () => {
      isHoveredRef.current = false;
      // Clear the timeout if mouse leaves before modal shows
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
      // Schedule hide with delay instead of immediate hide
      scheduleHideModal();
    };

    return (
        <div 
          ref={cardRef}
          className="relative w-1/2 h-[45vw] sm:w-1/3 sm:h-[30vw] md:w-1/4 md:h-[22vw] lg:w-1/5 lg:h-[16vw] xl:w-[16.66666667%] xl:h-[9.5vw] border-box inline-block px-[0.2vw] align-top cursor-pointer"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex relative w-full h-full">
            <img src={`https://image.tmdb.org/t/p/original${image}`} key={id} alt={title} className={`w-full h-full object-cover brightness-70`} />
            <div className='absolute w-full sm:w-[20vw] md:w-[18vw] lg:w-[15vw] xl:w-[13vw] text-wrap bottom-0 left-2 sm:left-3 md:left-4 lg:left-5 text-white text-xs sm:text-sm md:text-base'>
                <h2>{title || name}</h2>
            </div>
          </div>
        </div>
    )
}

export default Card