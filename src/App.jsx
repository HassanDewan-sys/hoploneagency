import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import MobileMenu from './components/mobilemenu'; 
import Home from './home'; 
import Footer from './footer';
import Mainjs from './components/mainjs';
import Mainloader from '../mainloader';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Mainjs></Mainjs>
      <Mainloader></Mainloader>
      <Header toggleMenu={toggleMenu} isMenuOpen={isOpen} />
      <MobileMenu isOpen={isOpen} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
