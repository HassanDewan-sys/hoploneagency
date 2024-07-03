import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <div className="footer-wrapper">
      <section id='footer-masking' className='mask-hide'>
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
                  <img  src="img/logo.png" className='img-fluid hover-mask-hide cr-hover' />
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
                      <Link to='/' className='hover-mask-hide cr-hover'>Home</Link>
                    </li>
                    <li>
                      <Link to='/' className='hover-mask-hide cr-hover'>About</Link>
                    </li>
                    <li>
                      <Link to='/' className='hover-mask-hide cr-hover'>Work</Link>
                    </li>
                    <li>
                      <Link to='/' className='hover-mask-hide cr-hover'>Services</Link>
                    </li>
                    <li>
                      <Link to='/' className='hover-mask-hide cr-hover'>Contact</Link>
                    </li>
                  </ul>
              </div>
              <div className="col-lg-3">
                <h4>Services</h4>
                <ul>
                  <li>
                    <Link to='/' className='hover-mask-hide cr-hover'>Branding Services</Link>
                  </li>
                  <li>
                    <Link to='/' className='hover-mask-hide cr-hover'>Mobile Application Design<br/> and Development</Link>
                  </li>
                  <li>
                    <Link to='/' className='hover-mask-hide cr-hover'>Digital Marketing<br/> Services</Link>
                  </li>
                  <li>
                    <Link to='/' className='hover-mask-hide cr-hover'>SaaS Solutions</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h4>Contact</h4>
                <ul>
                  <li>
                    <Link to='/' className='hover-mask-hide cr-hover'>Phunk Creative, Salts<br/> Mill, Victoria Rd, Saltaire,<br/> Shipley BD18 3LA
                    </Link>
                  </li>
                  <li>
                    <a href='mailto:hello@hoplon.com' className='hover-mask-hide cr-hover'>hello@hoplon.com</a>
                    <a href='tel:+441133 908 188' className='hover-mask-hide cr-hover'>+441133 908 188</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="row" id='privacy'>
              <div className="col-lg-12">
                <div className="number">
                  <span className='hover-mask-hide cr-hover'>Company Number:</span> <a href='tel:13426455' className='hover-mask-hide cr-hover'>13426455</a>
                </div>
                <div className="number">
                  <Link to='/' className='hover-mask-hide cr-hover'>Terms & Conditions</Link>
                  <span></span>
                  <Link to='/' className='hover-mask-hide cr-hover'>Privacy Policy</Link>
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
