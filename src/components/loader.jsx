import React, { useEffect } from 'react';

const loader = () => {

    useEffect(() => {
        // Canvas animation for loader
        function loaderAnimation() {
          const canvas = document.querySelector("#loadercanvs");
          const context = canvas.getContext("2d");
    
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;
    
          window.addEventListener("resize", function() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            render();
          });
    
          const files = loaderAnimationLoader('./img/loader/lo', 76, '.jpg');
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
                trigger: "#loader",
                start: "top",
                end: "bottom",
                scroll:'.loader-wrapper',
                scrub: 1,
                pin: true,
                onUpdate: render,
                onComplete: function() {
                  // Callback function to execute when animation completes
                  document.querySelector('.loader-wrapper').style.display = 'none';
                }
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
    
          function loaderAnimationLoader(prefix, count, extension) {
            const paths = [];
            for (let i = 1; i <= count; i++) {
              paths.push(`${prefix}${i}${extension}`);
            }
            return paths;
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
    
        loaderAnimation();
    
      }, []);

  return (
    <div className="loader-wrapper">
      <section id='loader'>
          <canvas id='loadercanvs'></canvas>
      </section>
    </div>
  )
}

export default loader