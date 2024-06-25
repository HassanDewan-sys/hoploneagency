import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
import * as THREE from 'three';

const Portfolio = () => {
  useEffect(() => {
    function generateFilePathsportf(prefix, count, extension) {
      const paths = [];
      for (let i = 1; i <= count; i++) {
        paths.push(`${prefix}${i}${extension}`);
      }
      return paths;
    }

    function portfoliocanvas() {
      const canvas = document.querySelector("#portfolio-hand");
      const context = canvas.getContext("2d");

      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.addEventListener("resize", function () {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        render();
      });

      const files = generateFilePathsportf('./img/portfolio-hand/pr-hand', 78, '.png');
      const frameCount = files.length;

      const images = [];
      const imageSeq = {
        frame: 0,
      };

      let loadedCount = 0; // Track loaded images count

      for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        img.onload = function () {
          loadedCount++;
          if (loadedCount === frameCount) {
            imagesLoaded();
          }
        };
        img.src = files[i];
        images.push(img);
      }

      function imagesLoaded() {
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: "#portfolio",
            start: "top top", // Align trigger's top with viewport's top
            end: "bottom", // Align trigger's bottom with viewport's bottom
            scrub: 1,
            pin: true,
            onUpdate: render, // Callback function to execute on each update
          }
        });

        timeline.to(imageSeq, {
          frame: frameCount - 1,
          snap: "frame",
          ease: "none",
          duration: 2,
          onUpdate: render // Update on each frame change
        });

        timeline.to({}, { duration: 2 }); // 2 seconds delay after sequence animation

        timeline.to(".portfoliowraper", {  
          y: '-80%',
          scrollTrigger: {
            trigger: "#portfolio-video",
            start: "top",
            end: "bottom",
            scrub: 0.5,
            pin: true,
          },
        });

        timeline.to("#portfolio-video>#banner-masking-portfolio", {  
          opacity: '1',
          scrollTrigger: {
            trigger: "#portfolio-video",
            start: "top",
            end: "top",
            scrub: 0.5,
          },
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

    // Mouse tracking animation for masking element
    let cursor_portoflio = document.querySelector('#banner-masking-portfolio');
    let mouseX = 0;
    let mouseY = 0;

    gsap.to({}, 0.016, {
      repeat: -1,
      onRepeat: function() {
        gsap.set(cursor_portoflio, {
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

    portfoliocanvas();
  }, []);

  const videos = [
    { src: "video/hero-video.mp4", poster: "img/pr1.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr2.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr3.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr4.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr5.jpg" },
    { src: "video/hero-video.mp4", poster: "img/pr6.jpg" }
  ];

  const handleMouseEnter = (event) => {
    event.target.play();
  };
  
  const handleMouseLeave = (event) => {
    const video = event.target;
    video.pause();
    video.currentTime = 0; // Reset video to the start
    video.load(); // Reload the video to show the poster
  };
  
  

  return (
    <>
      <section id='portfolio'>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-7">
                <h4>
                  Let's Explore<br />
                  Our great work
                </h4>
                <div className="content">
                  <div className="text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore
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
                <canvas id='portfolio-hand'></canvas>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id='portfolio-video'>
        <section id='banner-masking-portfolio'>
          <div></div>
        </section>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-12">
                <div className="pr-heading" id='pr-heading'>
                  <img src="img/pr-heading.svg" className='img-fluid' />
                </div>
                <div className="portfoliowraper">
                  {videos.map((video, index) => (
                    <video
                      key={index}
                      loop
                      muted
                      poster={video.poster}
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    >
                      <source src={video.src} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
};

export default Portfolio;
