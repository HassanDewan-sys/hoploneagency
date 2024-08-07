import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const blogs = () => {

    const cursorRefblog = useRef(null);

    useEffect(() => {
      const cursor = cursorRefblog.current;

      // Mouse move event to update cursor position
      const moveCursor = (e) => {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: 'power2.out',
        });
      };

      // Attach the mouse move event listener
      document.addEventListener('mousemove', moveCursor);

      // Clean up the event listener on component unmount
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    }, []);

  return (
    <section id='blogs'>
      <section id='blog-masking'>
        <div></div>
      </section>
      <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="heading">
                          <div className="smallheading">
                              <h3>Our Blogs</h3>
                          </div>
                          <div className="bigheading" id='blogsbigheading'>
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 1366.12 254">
                                <defs>
                                    <style
                                    dangerouslySetInnerHTML={{
                                        __html:
                                        "\n      .cls-1 {\n        fill: none;\n        stroke: #000;\n        stroke-width: 2px;\n      }\n    "
                                    }}
                                    />
                                </defs>
                                <path
                                    className="cls-1"
                                    d="M123.33,194.03c-22.19,0-41.15-3.48-56.89-10.45-15.74-6.96-27.78-16.9-36.12-29.8-8.35-12.9-12.51-28.38-12.51-46.44s4.17-33.8,12.51-46.7c8.34-12.9,20.38-22.83,36.12-29.8,15.74-6.97,34.7-10.45,56.89-10.45s41.37,3.48,57.02,10.45c15.65,6.97,27.65,16.9,35.99,29.8,8.34,12.9,12.51,28.47,12.51,46.7s-4.17,33.54-12.51,46.44c-8.35,12.9-20.34,22.84-35.99,29.8-15.65,6.97-34.66,10.45-57.02,10.45ZM123.33,164.36c13.76,0,25.84-2.06,36.25-6.19,10.41-4.13,18.58-10.41,24.51-18.84,5.93-8.43,8.9-19.09,8.9-31.99s-2.97-23.56-8.9-31.99c-5.93-8.43-14.11-14.75-24.51-18.96-10.41-4.21-22.49-6.32-36.25-6.32s-25.72,2.11-36.38,6.32c-10.67,4.22-19.01,10.54-25.03,18.96-6.02,8.43-9.03,19.09-9.03,31.99s3.01,23.57,9.03,31.99c6.02,8.43,14.36,14.71,25.03,18.84,10.66,4.13,22.79,6.19,36.38,6.19Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M374.63,129.01l.26,8.77c-.35,2.41-1.21,5.89-2.58,10.45-1.38,4.56-3.48,9.42-6.32,14.58s-6.49,10.11-10.97,14.84c-4.48,4.73-9.98,8.6-16.51,11.61-6.54,3.01-14.28,4.52-23.22,4.52-7.06,0-13.98-.86-20.77-2.58-6.8-1.72-12.95-4.6-18.45-8.64-5.51-4.04-9.89-9.5-13.16-16.38-3.27-6.88-4.9-15.56-4.9-26.06V62.44h33.54v71.99c0,8.26,1.33,14.75,4,19.48,2.67,4.73,6.58,8.04,11.74,9.93,5.16,1.89,11.26,2.84,18.32,2.84,9.29,0,17.29-2.02,24-6.06,6.71-4.04,12.17-8.99,16.38-14.84,4.21-5.85,7.1-11.44,8.64-16.77ZM406.37,190.68h-33.54V62.44h33.54v128.23Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M436.81,62.44h33.54v128.23h-33.54V62.44ZM519.64,90.05c-9.64,0-17.98,1.85-25.03,5.55-7.06,3.7-12.73,8.22-17.03,13.55-4.3,5.33-7.31,10.49-9.03,15.48l-.26-14.19c.17-2.06.86-5.12,2.06-9.16,1.2-4.04,3.01-8.43,5.42-13.16,2.41-4.73,5.59-9.29,9.55-13.67,3.96-4.39,8.77-7.95,14.45-10.71,5.68-2.75,12.3-4.13,19.87-4.13v30.45Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M606.84,190.68V23.74h96.24c22.36,0,39.35,3.74,50.96,11.22,11.61,7.48,17.42,18.62,17.42,33.41,0,9.46-2.32,16.9-6.97,22.32-4.64,5.42-11.22,9.42-19.74,12s-18.54,4.22-30.06,4.9l1.03-1.81c8.43.17,16.38.77,23.87,1.81s14.06,2.93,19.74,5.68c5.68,2.75,10.15,6.58,13.42,11.48,3.27,4.9,4.9,11.31,4.9,19.22,0,10.32-2.75,18.88-8.26,25.67-5.51,6.8-13.16,11.91-22.96,15.35-9.8,3.44-21.16,5.33-34.06,5.68h-105.53ZM641.16,94.44h60.63c10.84,0,19.18-1.59,25.03-4.77,5.85-3.18,8.77-8.64,8.77-16.38s-2.93-13.2-8.77-16.38c-5.85-3.18-13.59-4.77-23.22-4.77h-62.44v42.31ZM641.16,162.3h67.6c10.84,0,19.18-1.76,25.03-5.29,5.85-3.53,8.77-9.16,8.77-16.9,0-5.68-1.72-9.8-5.16-12.38-3.44-2.58-8-4.17-13.67-4.77-5.68-.6-11.78-.9-18.32-.9h-64.25v40.25Z"
                                />
                                <path className="cls-1" d="M806.29,10.84h33.54v179.84h-33.54V10.84Z" />
                                <path
                                    className="cls-1"
                                    d="M949.23,193.78c-16.17,0-30.41-2.58-42.7-7.74-12.3-5.16-21.89-12.68-28.77-22.58-6.88-9.89-10.32-22.06-10.32-36.51s3.44-26.7,10.32-36.77c6.88-10.06,16.47-17.67,28.77-22.83,12.3-5.16,26.53-7.74,42.7-7.74s30.32,2.58,42.44,7.74,21.63,12.77,28.51,22.83c6.88,10.06,10.32,22.32,10.32,36.77s-3.44,26.62-10.32,36.51c-6.88,9.89-16.38,17.42-28.51,22.58s-26.28,7.74-42.44,7.74ZM949.23,167.97c8.94,0,16.99-1.59,24.12-4.77,7.14-3.18,12.77-7.82,16.9-13.93,4.13-6.1,6.19-13.54,6.19-22.32s-2.06-16.29-6.19-22.58c-4.13-6.28-9.72-11.05-16.77-14.32-7.06-3.27-15.14-4.9-24.25-4.9s-17.03,1.64-24.25,4.9c-7.22,3.27-12.95,8-17.16,14.19-4.22,6.19-6.32,13.76-6.32,22.71s2.06,16.21,6.19,22.32c4.13,6.11,9.8,10.75,17.03,13.93,7.22,3.19,15.39,4.77,24.51,4.77Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M1119.26,171.07c-13.93,0-26.19-2.1-36.77-6.32-10.58-4.21-18.79-10.45-24.64-18.71-5.85-8.26-8.77-18.23-8.77-29.93s2.84-21.5,8.51-29.93c5.68-8.43,13.8-14.96,24.38-19.61,10.58-4.64,23-6.97,37.28-6.97,3.96,0,7.78.26,11.48.77,3.7.52,7.35,1.21,10.97,2.06l64.76.26v25.29c-8.77.17-17.67-.9-26.71-3.23s-16.99-4.86-23.87-7.61l-.77-1.81c5.85,2.75,11.35,6.15,16.51,10.19,5.16,4.04,9.33,8.69,12.51,13.93,3.18,5.25,4.77,11.31,4.77,18.19,0,11.18-2.84,20.77-8.51,28.77-5.68,8-13.72,14.11-24.12,18.32-10.41,4.22-22.75,6.32-37.03,6.32ZM1162.35,243.57v-6.19c0-7.91-2.54-13.42-7.61-16.51-5.08-3.1-12-4.64-20.77-4.64h-39.99c-7.74,0-14.24-.61-19.48-1.81-5.25-1.21-9.42-2.93-12.51-5.16-3.1-2.24-5.33-4.86-6.71-7.87-1.38-3.01-2.06-6.24-2.06-9.68,0-6.88,2.23-12.08,6.71-15.61,4.47-3.52,10.49-5.89,18.06-7.1,7.57-1.2,15.91-1.46,25.03-.77l16.26,2.84c-10.84.35-18.88,1.25-24.12,2.71-5.25,1.46-7.87,4.35-7.87,8.64,0,2.58,1.03,4.6,3.1,6.06,2.06,1.46,4.99,2.19,8.77,2.19h42.06c11.52,0,21.37,1.25,29.54,3.74,8.17,2.49,14.4,6.71,18.71,12.64,4.3,5.93,6.45,14.06,6.45,24.38v12.13h-33.54ZM1119.26,146.82c7.39,0,13.89-1.2,19.48-3.61,5.59-2.41,9.93-5.89,13.03-10.45,3.1-4.56,4.64-10.02,4.64-16.38s-1.55-12.13-4.64-16.77c-3.1-4.64-7.4-8.21-12.9-10.71-5.51-2.49-12.04-3.74-19.61-3.74s-13.93,1.25-19.61,3.74c-5.68,2.5-10.06,6.06-13.16,10.71s-4.64,10.24-4.64,16.77,1.55,11.83,4.64,16.38c3.1,4.56,7.44,8.04,13.03,10.45,5.59,2.41,12.17,3.61,19.74,3.61Z"
                                />
                                <path
                                    className="cls-1"
                                    d="M1223.24,148.11h30.96c1.89,5.85,5.8,10.62,11.74,14.32,5.93,3.7,13.72,5.55,23.35,5.55,6.54,0,11.61-.6,15.22-1.81,3.61-1.2,6.1-2.97,7.48-5.29,1.37-2.32,2.06-4.94,2.06-7.87,0-3.61-1.12-6.41-3.35-8.39-2.24-1.98-5.68-3.57-10.32-4.77-4.64-1.2-10.58-2.32-17.8-3.35-7.22-1.2-14.19-2.66-20.9-4.39-6.71-1.72-12.64-4-17.8-6.84-5.16-2.84-9.25-6.45-12.26-10.84-3.01-4.39-4.51-9.76-4.51-16.12s1.5-11.7,4.51-16.51c3.01-4.81,7.22-8.86,12.64-12.13,5.42-3.27,11.78-5.76,19.09-7.48,7.31-1.72,15.18-2.58,23.61-2.58,12.73,0,23.31,1.85,31.74,5.55,8.43,3.7,14.75,8.86,18.96,15.48,4.21,6.62,6.32,14.24,6.32,22.83h-29.67c-1.38-6.36-4.13-10.97-8.26-13.8-4.13-2.84-10.49-4.26-19.09-4.26s-14.8,1.29-19.09,3.87c-4.3,2.58-6.45,6.11-6.45,10.58,0,3.61,1.33,6.41,4,8.39,2.67,1.98,6.62,3.57,11.87,4.77,5.25,1.21,11.83,2.49,19.74,3.87,6.71,1.38,13.12,2.93,19.22,4.64,6.1,1.72,11.57,3.92,16.38,6.58,4.81,2.67,8.64,6.19,11.48,10.58,2.84,4.39,4.26,9.93,4.26,16.64,0,8.26-2.37,15.22-7.1,20.9-4.73,5.68-11.48,10.02-20.25,13.03s-19.27,4.52-31.48,4.52c-10.84,0-20.17-1.16-27.99-3.48-7.83-2.32-14.32-5.33-19.48-9.03-5.16-3.7-9.16-7.65-12-11.87-2.84-4.21-4.77-8.21-5.81-12-1.03-3.78-1.38-6.88-1.03-9.29Z"
                                />
                            </svg>
                          </div>
                      </div>
                  </div>

                  <div className="col-lg-12">
                      <div className="blogs-wrapper">
                        <div ref={cursorRefblog} className="blog-cursor">
                          <img src="img/blog-cursor.svg" className="img-fluid" alt="Custom Cursor" />
                        </div>
                          <Link>
                              <div className="blogs-items">
                                  <div className="img">
                                      <img src="img/testimonail-img.jpg" className='img-fluid' />
                                  </div>
                                  <div className="content">
                                      <h2>Homepage Hero Makeover</h2>
                                      <p>Revamp your website's first impression with our Homepage Hero Makeover for Toqio, featuring UX/UI enhancements and design strategies to boost engagement and conversion rates. Need a website refresh?</p>
                                  </div>
                              </div>
                          </Link>
                          <Link>
                              <div className="blogs-items">
                                  <div className="img">
                                      <img src="img/testimonail-img.jpg" className='img-fluid' />
                                  </div>
                                  <div className="content">
                                      <h2>Homepage Hero Makeover</h2>
                                      <p>Revamp your website's first impression with our Homepage Hero Makeover for Toqio, featuring UX/UI enhancements and design strategies to boost engagement and conversion rates. Need a website refresh?</p>
                                  </div>
                              </div>
                          </Link>
                          <Link>
                              <div className="blogs-items">
                                  <div className="img">
                                      <img src="img/testimonail-img.jpg" className='img-fluid' />
                                  </div>
                                  <div className="content">
                                      <h2>Homepage Hero Makeover</h2>
                                      <p>Revamp your website's first impression with our Homepage Hero Makeover for Toqio, featuring UX/UI enhancements and design strategies to boost engagement and conversion rates. Need a website refresh?</p>
                                  </div>
                              </div>
                          </Link>
                      </div>
                  </div>

                  <div className="col-lg-12 blog-btn">
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
    </section>        
  )
}

export default blogs