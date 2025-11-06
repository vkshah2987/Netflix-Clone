import React, { createContext, useContext, useState, useRef, type ReactNode } from 'react';

export interface ModalPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface ModalContextType {
  isVisible: boolean;
  isHiding: boolean;
  position: ModalPosition | null;
  cardId: number | null;
  cardData: any | null;
  showModal: (cardId: number, position: ModalPosition, cardData?: any) => void;
  hideModal: () => void;
  scheduleHideModal: () => void;
  cancelHideModal: () => void;
  updatePosition: (position: ModalPosition) => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHiding, setIsHiding] = useState(false);
  const [position, setPosition] = useState<ModalPosition | null>(null);
  const [cardId, setCardId] = useState<number | null>(null);
  const [cardData, setCardData] = useState<any | null>(null);
  const hideTimeoutRef = useRef<number | null>(null);
  const animationTimeoutRef = useRef<number | null>(null);

  const showModal = (id: number, pos: ModalPosition, data?: any) => {
    // Cancel any pending hide
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
    
    // If switching cards, hide current modal first
    if (isVisible && cardId !== id) {
      setIsHiding(true);
      setIsVisible(false);
      
      // Wait for fade-out animation to complete before showing new modal
      animationTimeoutRef.current = window.setTimeout(() => {
        setIsHiding(false);
        setCardId(id);
        setPosition(pos);
        setCardData(data);
        setIsVisible(true);
      }, 150); // Match fade-out animation duration
    } else {
      setIsHiding(false);
      setCardId(id);
      setPosition(pos);
      setCardData(data);
      setIsVisible(true);
    }
  };

  const updatePosition = (pos: ModalPosition) => {
    setPosition(pos);
  };

  const hideModal = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
    }
    
    // Trigger fade-out animation
    setIsHiding(true);
    
    // Wait for animation to complete before fully hiding
    animationTimeoutRef.current = window.setTimeout(() => {
      setIsVisible(false);
      setIsHiding(false);
      setCardId(null);
      setPosition(null);
      setCardData(null);
    }, 150); // Match fade-out animation duration
  };

  const scheduleHideModal = () => {
    // Add a small delay before hiding to allow moving to the modal
    hideTimeoutRef.current = window.setTimeout(() => {
      hideModal();
    }, 200);
  };

  const cancelHideModal = () => {
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
    if (animationTimeoutRef.current) {
      clearTimeout(animationTimeoutRef.current);
      animationTimeoutRef.current = null;
    }
    // Cancel hiding state if we're hovering again
    if (isHiding) {
      setIsHiding(false);
    }
  };

  return (
    <ModalContext.Provider value={{ isVisible, isHiding, position, cardId, cardData, showModal, hideModal, scheduleHideModal, cancelHideModal, updatePosition }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
