import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './header';
import MobileMenu from './components/mobilemenu';
import Home from './home';
import Footer from './footer';
import Mainjs from './components/mainjs';
import Mainloader from '../mainloader';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    const hoverElements = document.querySelectorAll('.cr-hover');
    hoverElements.forEach(element => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverElements.forEach(element => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      gsap.to('.small-hover-cursor', {
        x: event.clientX,
        y: event.clientY,
        duration: 0.1,
        ease: 'power2.out'
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const hoverMaskHideElements = document.querySelectorAll('.hover-mask-hide');

    hoverMaskHideElements.forEach(hoverElement => {
      hoverElement.addEventListener('mouseenter', () => {
        const maskHideElements = document.querySelectorAll('.mask-hide');
        maskHideElements.forEach(maskElement => maskElement.classList.add('hide'));
      });

      hoverElement.addEventListener('mouseleave', () => {
        const maskHideElements = document.querySelectorAll('.mask-hide');
        maskHideElements.forEach(maskElement => maskElement.classList.remove('hide'));
      });
    });

    return () => {
      hoverMaskHideElements.forEach(hoverElement => {
        hoverElement.removeEventListener('mouseenter', () => {});
        hoverElement.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);

  return (
    <Router>
      <Mainjs />
      <Mainloader />
      <div className={`small-hover-cursor ${isHovered ? 'show' : ''}`}></div>
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