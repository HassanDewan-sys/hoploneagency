import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const about = () => {

  useEffect(() => {
    const serviceLine = document.getElementById('bigheadingabout');

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('viewh');
          } else {
            entry.target.classList.remove('viewh');
          }
        });
      });

      observer.observe(serviceLine);
    } else {
      const onScroll = () => {
        const rect = serviceLine.getBoundingClientRect();
        const inView = (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );

        if (inView) {
          serviceLine.classList.add('view');
        } else {
          serviceLine.classList.remove('view');
        }
      };

      window.addEventListener('scroll', onScroll);
      return () => window.removeEventListener('scroll', onScroll);
    }
  }, []);

  useEffect(() => {
    const animationAbout = () => {
      const heading = document.querySelector('#About .heading h3');
      gsap.to(heading, {
        background: 'linear-gradient(to right, #000000 10%, #DADADA 100%)',
        ease: 'none',
        scrollTrigger: {
          trigger: '#About',
          start: 'top center',
          end: 'center center',
          scrub: true,
          onUpdate: self => {
            const progress = self.progress.toFixed(3);
            heading.style.background = `linear-gradient(to right, #000000 ${progress * 100}%, #DADADA ${progress * 100}%)`;
          },
        },
      });
    };

    animationAbout();
  }, []);

  useEffect(() => {
    const lineAbout = () => {
      if (window.innerWidth < 768) {
        // If the screen width is less than 768px, do not execute the function
        return;
      }
    
      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: '#About',
          start: 'top',
          end: 'bottom',
          scrub: true,
          pin: true,
        }
      });
    
      tl.set('#About .counter .counter-item span', {
        className: '+=visible'
      });
    
      tl.to('#About .counter .counter-item span', {
        height: (index, target) => {
          if (index === 1) return '300px';
          return '370px';
        },
        stagger: 0.1
      });
    
      tl.to('#About .counter .counter-item img', {
        visibility: 'visible',
        opacity: 1,
        duration: 0.5,
        stagger: 0.1 
      });
    };
    
    // Call the function
    lineAbout();
    
    // Optional: Add an event listener to handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth >= 768) {
        lineAbout();
      }
    });
    
  }, []);

  return (
    <section id='About'>
      <div className="container-fluid">
        <div className="col-lg-11 mx-auto">
          <div className="row">
            <div className="col-lg-7">
              <div className="heading">
                <div className="smallheading">
                  <h3>About</h3>
                </div>
                <div className="bigheading" id='bigheadingabout'>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={861}
                    height={185}
                    viewBox="0 0 861 185"
                    fill="none"
                  >
                    <g opacity="0.2" clipPath="url(#clip0_266_393)">
                      <path
                        d="M80.0099 13.9L1.56995 180.84H38.7199L55.1899 144.46H142.35L158.95 180.84H196.36L117.17 13.9H80.0199H80.0099ZM68.1699 115.82L98.6199 48.58L129.3 115.82H68.1699Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <path
                        d="M350.28 58.15C340.04 52.56 328.3 49.76 315.06 49.76C303.53 49.76 293.73 51.48 285.65 54.92C277.56 58.36 271.03 63.14 266.04 69.24C261.05 75.35 257.4 82.44 255.07 90.53C255.02 90.69 254.99 90.85 254.94 91.01V1H221.4V180.84H252.62C253.14 176.88 253.65 171.77 254.17 165.49C254.69 159.21 254.94 153.32 254.94 147.82V139.06C255.03 139.36 255.11 139.65 255.2 139.95C257.61 147.78 261.3 155 266.29 161.62C271.28 168.24 277.81 173.58 285.9 177.62C293.98 181.66 303.7 183.68 315.06 183.68C327.96 183.68 339.57 180.88 349.89 175.29C360.21 169.7 368.38 161.87 374.4 151.81C380.42 141.75 383.43 130.1 383.43 116.85C383.43 103.6 380.46 91.48 374.53 81.5C368.6 71.53 360.51 63.74 350.28 58.15ZM343.57 138.39C339.87 144.5 334.67 149.27 327.96 152.71C321.25 156.15 313.34 157.87 304.22 157.87C294.07 157.87 285.3 156.15 277.9 152.71C270.5 149.27 264.83 144.45 260.87 138.26C256.91 132.07 254.94 124.93 254.94 116.84C254.94 108.07 256.96 100.63 261 94.52C265.04 88.42 270.76 83.73 278.16 80.46C285.55 77.19 294.24 75.56 304.22 75.56C318.5 75.56 329.55 79.35 337.38 86.91C345.21 94.48 349.12 104.46 349.12 116.84C349.12 125.1 347.27 132.28 343.57 138.38V138.39Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <path
                        d="M526.25 57.51C514.12 52.35 499.97 49.77 483.81 49.77C467.65 49.77 453.4 52.35 441.11 57.51C428.81 62.67 419.22 70.28 412.34 80.34C405.46 90.4 402.02 102.66 402.02 117.11C402.02 131.56 405.46 143.73 412.34 153.62C419.22 163.51 428.81 171.04 441.11 176.2C453.41 181.36 467.64 183.94 483.81 183.94C499.98 183.94 514.13 181.36 526.25 176.2C538.38 171.04 547.88 163.52 554.76 153.62C561.64 143.73 565.08 131.56 565.08 117.11C565.08 102.66 561.64 90.4 554.76 80.34C547.88 70.28 538.38 62.67 526.25 57.51ZM524.83 139.43C520.7 145.54 515.07 150.18 507.93 153.36C500.79 156.54 492.75 158.13 483.81 158.13C474.87 158.13 466.52 156.54 459.3 153.36C452.08 150.18 446.4 145.53 442.27 139.43C438.14 133.33 436.08 125.88 436.08 117.11C436.08 108.34 438.18 100.6 442.4 94.4C446.61 88.21 452.33 83.48 459.56 80.21C466.78 76.94 474.87 75.31 483.81 75.31C492.75 75.31 501.01 76.95 508.06 80.21C515.11 83.48 520.7 88.25 524.83 94.53C528.96 100.81 531.02 108.33 531.02 117.11C531.02 125.89 528.96 133.32 524.83 139.43Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <path
                        d="M704.66 124.13C703.02 127.94 700.75 131.88 697.82 135.94C693.6 141.79 688.14 146.74 681.44 150.78C674.73 154.82 666.73 156.84 657.44 156.84C650.38 156.84 644.28 155.9 639.12 154C633.96 152.11 630.05 148.8 627.38 144.07C624.71 139.34 623.38 132.85 623.38 124.59V52.6H589.84V130.26C589.84 140.75 591.47 149.44 594.74 156.32C598.01 163.2 602.39 168.66 607.9 172.7C613.4 176.74 619.55 179.63 626.35 181.34C633.14 183.06 640.06 183.92 647.12 183.92C656.06 183.92 663.8 182.41 670.34 179.4C676.88 176.39 682.38 172.52 686.85 167.79C691.32 163.06 694.98 158.12 697.82 152.95C700.66 147.79 702.76 142.93 704.14 138.37C704.32 137.77 704.49 137.19 704.66 136.63V180.82H738.2V52.6H704.66V124.13Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                      <path
                        d="M859.22 52.6H826.19V17.51H792.65V52.6H759.62V78.66H792.65V180.84H826.19V78.66H859.22V52.6Z"
                        stroke="black"
                        strokeWidth={2}
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_266_393">
                        <rect width="860.22" height="184.94" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
              <div className="content">
                <div className="text">
                  <p>
                    More than just a design agency, <img src="img/gif.gif" className='img-fluid' />we help brands ditch their garish identities in favor of<br/><img src="img/gif.gif" className='img-fluid' />ideas and daring creative solutions that set our clients apart. In other words, we offer bold and<br/> whimsical<img src="img/gif.gif" className='img-fluid' />concepts that make brands hotter than the big bang.
                  </p>
                </div>
              </div>
              <div className="btn">
                  <Link to='#'>
                    <button className='hero-btn'>
                      <span>
                        <svg>
                          <text className="svg-text">Learn More</text>
                        </svg>  
                      </span>
                    </button>
                  </Link>
                </div>
            </div>
            <div className="col-lg-5">
              <div className="counter">

                <div className='counter-item'>
                  <span></span>
                  <h4>19</h4>
                  <h5>Years of Experience</h5>
                  <img src="img/years-of-experience.png" className='img-fluid' />
                </div>

                <div className='counter-item'>
                  <span></span>
                  <h4>16</h4>
                  <h5>Active Clients</h5>
                  <img src="img/active-clients.png" className='img-fluid' />
                </div>

                <div className='counter-item'>
                  <span></span>
                  <h4>20</h4>
                  <h5>Happy Customers</h5>
                  <img src="img/happy-customers.png" className='img-fluid' />
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>        
  )
}

export default about