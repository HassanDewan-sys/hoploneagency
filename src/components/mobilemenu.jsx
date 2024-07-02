import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const Menu = ({ isOpen }) => {

  const cursorRefmenu = useRef(null);

  useEffect(() => {
    const cursor1menu = cursorRefmenu.current;

    // Mouse move event to update cursor1menu position
    const moveCursormenu = (e) => {
      gsap.to(cursor1menu, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1,
        ease: 'power2.out',
      });
    };

    // Attach the mouse move event listener
    document.addEventListener('mousemove', moveCursormenu);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener('mousemove', moveCursormenu);
    };
  }, []);

  return (
    <>
      <div id="main-menu" className={isOpen ? 'open' : 'closed'}>
        <div className="main-menu-loader"></div>
          <video loop muted preload='true' autoPlay playsInline>
            <source src='video/menu.mp4' type="video/mp4" />
          </video>
          <div className="main-menu-cursor" ref={cursorRefmenu}>
          </div>
          <ul>
            <li>
              <Link>
                Home
              </Link>
            </li>
            <li>
              <Link>
                About
              </Link>
            </li>
            <li>
              <Link>
                Services
              </Link>
            </li>
            <li>
              <Link>
                Contact
              </Link>
            </li>
          </ul>
      </div>
    </>
  );
};

export default Menu;