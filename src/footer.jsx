import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import * as THREE from 'three';

const Footer = () => {
  useEffect(() => {
    function generateFilePaths(prefix, count, extension) {
      const paths = [];
      for (let i = 1; i <= count; i++) {
        paths.push(`${prefix}${i}${extension}`);
      }
      return paths;
    }

    function page03canvas() {
      const canvas = document.querySelector("#ft-hand");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      const files = generateFilePaths('./img/ft-hand/hand', 70, '.png');
      const frameCount = files.length;

      const images = [];
      const imageSeq = {
        frame: 0,
      };

      let loadedCount = 0; // Track loaded images count

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = function() {
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesLoaded();
          }
        };
        img.src = files[i];
        images.push(img);
      }

      function imagesLoaded() {
        gsap.to(imageSeq, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          scrollTrigger: {
            trigger: "#footer",
            start: "top top", // Align trigger's top with viewport's top
            end: "+=300%", // Align trigger's bottom with viewport's bottom
            scrub: 1, 
            pin: true,
            onUpdate: render, // Callback function to execute on each update
          }
        });    
        
        // Start rendering initially
        render();
      }

      function render() {
        if (images[imageSeq.frame]) {
          scaleImage(images[imageSeq.frame], context);
        }
      }

      function scaleImage(img, ctx) {
        const canvas = ctx.canvas;
        const hRatio = canvas.width / img.width;
        const vRatio = canvas.height / img.height;
        const ratio = Math.min(hRatio, vRatio);
        const centerShift_x = (canvas.width - img.width * ratio) / 2;
        const centerShift_y = (canvas.height - img.height * ratio) / 2;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(
          img,
          0,
          0,
          img.width,
          img.height,
          centerShift_x,
          centerShift_y,
          img.width * ratio,
          img.height * ratio
        );
      }
    }

    page03canvas();
  }, []);

  return (
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
  );
}

export default Footer;
