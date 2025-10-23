import { Routes, Route } from "react-router-dom";
import './App.css'

import MainPage from "./pages/MainPage/MainPage";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="relative">
      <div className="sticky inset-0 z-3 top-0 -mb-[68px]"><Navbar /></div>
      <Routes>
        <Route path='/' element={<MainPage state={"home"} />} />
        <Route path='/shows' element={<MainPage state={"shows"} />} />
        <Route path='/movies' element={<MainPage state={"movies"} />} />
      </Routes>
      <div><Footer /></div>
    </div>
  )
}

export default App
