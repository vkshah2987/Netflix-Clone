import { Routes, Route } from "react-router-dom";
import './App.css'

import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import MiniModal from "./components/MiniModal/MiniModal";
import { ModalProvider, useModal } from "./service/modalService";

function AppContent() {
  const { isVisible, isHiding, position, cardData, cancelHideModal, scheduleHideModal } = useModal();

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
            left: `${position.x}px`,
            top: `${position.y}px`, // Center of the card
            transform: 'translate(-50%, -50%)', // Center the modal on card center
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
