import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GoToMarket from './pages/GoToMarket';
import GoToOffice from './pages/GoToOffice';
import GoToReturn from './pages/GoToReturn';
import Final from './pages/Final';
import MarketGame1 from './pages/MarketGame1';
import MarketGame2 from './pages/MarketGame2';
import OfficeGame1 from './pages/OfficeGame1';
import OfficeGame2 from './pages/OfficeGame2';
import CheckPart1 from './pages/CheckPart1';
import CheckPart2 from './pages/CheckPart2';
import CheckPart3 from './pages/CheckPart3';
import CheckPart4 from './pages/CheckPart4';
import Certification from './pages/Certification';
import QRScanner from './pages/QRScanner';
import UseScan from './pages/UseScan';

export default function DefaultRouter() {
  return (
    <Router basename="/jeongdam">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/GoToMarket" element={<GoToMarket />} />
        <Route path="/GoToOffice" element={<GoToOffice />} />
        <Route path="/GoToReturn" element={<GoToReturn />} />
        <Route path="/Final" element={<Final />} />
        <Route path="/MarketGame1" element={<MarketGame1 />} />
        <Route path="/MarketGame2" element={<MarketGame2 />} />
        <Route path="/OfficeGame1" element={<OfficeGame1 />} />
        <Route path="/OfficeGame2" element={<OfficeGame2 />} />
        <Route path="/CheckPart1" element={<CheckPart1 />} />
        <Route path="/CheckPart2" element={<CheckPart2 />} />
        <Route path="/CheckPart3" element={<CheckPart3 />} />
        <Route path="/CheckPart4" element={<CheckPart4 />} />
        <Route path="/Certification" element={<Certification />} />
        <Route path="/QRScanner" element={<QRScanner />} />
        <Route path="/UseScan" element={<UseScan />} />
      </Routes>
    </Router>
  );
}
