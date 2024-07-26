import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GoToMarket from './pages/GoToMarket';
import GoToOffice from './pages/GoToOffice';
import GoToReturn from './pages/GoToReturn';
import Final from './pages/Final';
import MarketGame1 from './pages/MarketGame1';
import OfficeGame1 from './pages/OfficeGame1';
import Certification from './pages/Certification';
import QRScanner from './pages/QRScanner';
import HomeDescription from './pages/HomeDescription';
import MarketDescription from './pages/MarketDescription';
import OfficeDescription from './pages/OfficeDescription';
import Char1 from './pages/Char1';
import Char2 from './pages/Char2';
import Char3 from './pages/Char3';
import Quiz1 from './pages/Quiz1';
import Quiz2 from './pages/Quiz2';

export default function DefaultRouter() {
  return (
    <Router basename="jeongdam">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GoToMarket" element={<GoToMarket />} />
        <Route path="/GoToOffice" element={<GoToOffice />} />
        <Route path="/GoToReturn" element={<GoToReturn />} />
        <Route path="/Final" element={<Final />} />
        <Route path="/MarketGame1" element={<MarketGame1 />} />
        <Route path="/OfficeGame1" element={<OfficeGame1 />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/QRScanner" element={<QRScanner />} />
        <Route path="/HomeDescription" element={<HomeDescription />} />
        <Route path="/MarketDescription" element={<MarketDescription />} />
        <Route path="/Char1" element={<Char1 />} />
        <Route path="/Char2" element={<Char2 />} />
        <Route path="/Char3" element={<Char3 />} />
        <Route path="/Quiz1" element={<Quiz1 />} />
        <Route path="/Quiz2" element={<Quiz2 />} />
        <Route path="/OfficeDescription" element={<OfficeDescription />} />
      </Routes>
    </Router>
  );
}
