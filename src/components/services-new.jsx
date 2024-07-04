import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const ServicesNew = () => {

    useEffect(() => {

        if (window.innerWidth < 768) {
            // If the screen width is less than 768px, do not execute the function
            return;
          }

        gsap.to('.new-service-items , .n-service-heading', {
            scrollTrigger: {
                trigger: '#new-services-wrapper',
                start: '+=60%',
                end: '+=80%',
                scrub: 1,
            },
                top:0,
                left:0,
                right:0,
                transform: 'translate(0, 0) rotate(0deg) scale(1)'
        });
    }, []);

    useEffect(() => {
        let cursor = document.querySelector('#n-services-masking');
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
    <section id='n-services'>
        <section className="grenn-masking mask-hide" id='n-services-masking'>
            <div></div>
        </section>
        <div className="container-fluid">
            <div className="col-lg-11 mx-auto">
                <div className="row" id='new-services-wrapper'>
                    <div className="col-lg-4">
                        <div className="new-service-items" style={{ background: 'url(img/n-web-developnment.jpg)' }}>
                            <div className="shine"></div>
                            <div className="hover-hide">
                                <h3>Web Developnment</h3>
                            </div>
                            <div className="hover-show">
                                <h3>Web Developnment</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                                <div className="btn">
                                    <Link to='#'>
                                        <button className='hero-btn hover-mask-hide cr-hover'>
                                        <span>
                                            <svg>
                                            <text className="svg-text">Explore More</text>
                                            </svg>  
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="new-service-items" style={{ background: 'url(img/n-branding-services.jpg)' }}>
                            <div className="shine"></div>
                            <div className="hover-hide">
                                <h3>Branding</h3>
                            </div>
                            <div className="hover-show">
                                <h3>Branding</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                                <div className="btn">
                                    <Link to='#'>
                                        <button className='hero-btn hover-mask-hide cr-hover'>
                                        <span>
                                            <svg>
                                            <text className="svg-text">Explore More</text>
                                            </svg>  
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="new-service-items"  style={{ background: 'url(img/n-app-developnemt.jpg)' }}>
                            <div className="shine"></div>
                            <div className="hover-hide">
                                <h3>App Developnment</h3>
                            </div>
                            <div className="hover-show">
                                <h3>App Developnment</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                                <div className="btn">
                                    <Link to='#'>
                                        <button className='hero-btn hover-mask-hide cr-hover'>
                                        <span>
                                            <svg>
                                            <text className="svg-text">Explore More</text>
                                            </svg>  
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="new-service-items"   style={{ background: 'url(img/n-digital-marketing.jpg)' }}>
                            <div className="shine"></div>
                            <div className="hover-hide">
                                <h3>Digital Marketing</h3>
                            </div>
                            <div className="hover-show">
                                <h3>Digital Marketing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                                <div className="btn">
                                    <Link to='#'>
                                        <button className='hero-btn hover-mask-hide cr-hover'>
                                        <span>
                                            <svg>
                                            <text className="svg-text">Explore More</text>
                                            </svg>  
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="n-service-heading">
                            <img src="img/services-heading.svg" className='img-fluid' />
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="new-service-items"   style={{ background: 'url(img/n-sap-solution.jpg)' }}>
                            <div className="shine"></div>
                            <div className="hover-hide">
                                <h3>SAP Solutions</h3>
                            </div>
                            <div className="hover-show">
                                <h3>SAP Solutions</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe fugit obcaecati unde explicabo!</p>
                                <div className="btn">
                                    <Link to='#'>
                                        <button className='hero-btn hover-mask-hide cr-hover'>
                                        <span>
                                            <svg>
                                            <text className="svg-text">Explore More</text>
                                            </svg>  
                                        </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ServicesNew;