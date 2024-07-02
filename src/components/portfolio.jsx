import { Link } from 'react-router-dom';

const Portfolio = () => {

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
    video.currentTime = 0;
    video.load();
  };
  
  

  return (
    <>
      <div className="portfolio-wrapper-main">

          <section id='banner-masking-portfolio'>
            <div></div>
          </section>

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
      </div>
    </>
  );
};

export default Portfolio;
