import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const Footer = () => {

  useEffect(() => {
    // Mouse tracking animation for masking element
    let cursor = document.querySelector('#footer-masking');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        gsap.set(cursor, {
          css: {
            '-webkit-mask-position': `${mouseX}px ${mouseY}px`,
            'mask-position': `${mouseX}px ${mouseY}px`,
          },
        });
      },
    });

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    });
  }, []);

  return (
    <div className="footer-wrapper">
      <section id='footer-masking'>
        <div></div>
      </section>
      <section id='footer'>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">

            <div className="row" id='hand-animation'>
              <div className="col-lg-8">
                <canvas id='ft-hand'></canvas>
              </div>
              <div className="col-lg-4">
                <Link to='#'>
                  <button className='hero-btn'>
                    <span>
                      <svg>
                        <text className="svg-text">Let's Talk</text>
                      </svg>  
                    </span>
                  </button>
                </Link>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12">
                <div className="ct-divider"></div>
              </div>
            </div>

            <div className="row" id='ft-content'>
              <div className="col-lg-4">
                <div className="ft-logo">
                  <img  src="img/logo.png" className='img-fluid' />
                </div>
                <div className="content">
                  <h3>
                  Your brand,<br/>
                  built <span>amazing</span>
                  </h3>
                </div>
              </div>
              <div className="col-lg-2">
                  <h4>Company</h4>
                  <ul>
                    <li>
                      <Link to='/'>Home</Link>
                    </li>
                    <li>
                      <Link to='/'>About</Link>
                    </li>
                    <li>
                      <Link to='/'>Work</Link>
                    </li>
                    <li>
                      <Link to='/'>Services</Link>
                    </li>
                    <li>
                      <Link to='/'>Contact</Link>
                    </li>
                  </ul>
              </div>
              <div className="col-lg-3">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to='/'>Branding Services</Link>
                  </li>
                  <li>
                    <Link to='/'>Mobile Application Design<br/> and Development</Link>
                  </li>
                  <li>
                    <Link to='/'>Digital Marketing<br/> Services</Link>
                  </li>
                  <li>
                    <Link to='/'>SaaS Solutions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <Link to='/'>Phunk Creative, Salts<br/> Mill, Victoria Rd, Saltaire,<br/> Shipley BD18 3LA
                    </Link>
                  </li>
                  <li>
                    <a href='mailto:hello@hoplon.com'>hello@hoplon.com</a>
                    <a href='tel:+441133 908 188'>+441133 908 188</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" id='privacy'>
              <div className="col-lg-12">
                <div className="number">
                  <span>Company Number:</span> <a href='tel:13426455'>13426455</a>
                </div>
                <div className="number">
                  <Link to='/'>Terms & Conditions</Link>
                  <span></span>
                  <Link to='/'>Privacy Policy</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section> 
    </div>     
  );
}

export default Footer;
