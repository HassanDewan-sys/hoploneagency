import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import * as THREE from 'three';

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <section id='header' className={isMenuOpen ? 'headerfixed' : ''}>
      <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-lg-3 col-6">
              <div className="logo">
                <Link to='/'>
                  <img  src="img/logo.png" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="col-lg-7"></div>
            <div className="col-lg-2 col-6">
              <div className="menu" id='mobilemenu-open' onClick={toggleMenu}>
                <h2>{isMenuOpen ? 'Close' : 'Menu'}</h2>
                <div className="menu-img">
                  <img  src="img/healment01.png" alt="Menu Image 1" />
                  <img  src="img/healment02.png" alt="Menu Image 2" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;