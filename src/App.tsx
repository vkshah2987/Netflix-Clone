import { Routes, Route } from "react-router-dom";
import './App.css'

import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MiniModal from "./components/MiniModal/MiniModal";
import { ModalProvider, useModal } from "./service/modalService";

function AppContent() {
  const { isVisible, isHiding, position, cardData, cancelHideModal, scheduleHideModal } = useModal();

  // Calculate safe position to keep modal within viewport with padding
  const getSafePosition = () => {
    if (!position) return { left: 0, top: 0 };

    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    // Negative padding - allow modal to extend beyond viewport edges
    const viewportPadding = viewportWidth < 640 ? 10 : -160;
    
    // Modal half-widths (approximate based on responsive sizes)
    const modalHalfWidth = viewportWidth < 640 ? 160 : viewportWidth < 768 ? 200 : viewportWidth * 0.225;
    
    // Calculate boundaries
    const minX = viewportPadding + modalHalfWidth;
    const maxX = viewportWidth - viewportPadding - modalHalfWidth;
    
    // Clamp the position
    const safeX = Math.max(minX, Math.min(maxX, position.x));
    
    return { left: safeX, top: position.y };
  };

  const safePos = getSafePosition();

  return (
    <div className="relative">
      <div className="sticky inset-0 z-3 top-0 -mb-[68px]"><Navbar /></div>
      <Routes>
        <Route path='/' element={<MainPage state={"home"} />} />
        <Route path='/shows' element={<MainPage state={"shows"} />} />
        <Route path='/movies' element={<MainPage state={"movies"} />} />
        <Route path='/latest' element={<MainPage state={"latest"} />} />
        
        <Route path='/modal' element={<div className="py-[10vw] flex justify-center"><MiniModal /></div>} />
      </Routes>
      <div><Footer /></div>
      
      {/* Positioned MiniModal based on card hover */}
      {(isVisible || isHiding) && position && (
        <div 
          className={`absolute z-50 transition-all duration-300 ease-in-out ${
            isHiding ? 'animate-fadeOutScale' : 'animate-fadeInScale'
          }`}
          style={{
            left: `${safePos.left}px`,
            top: `${safePos.top}px`,
            transform: 'translate(-50%, -50%)',
          }}
          onMouseEnter={cancelHideModal}
          onMouseLeave={scheduleHideModal}
        >
          <MiniModal data={cardData} />
        </div>
      )}
    </div>
  )
}

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  )
}

export default App
