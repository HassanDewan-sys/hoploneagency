import Banner from './components/banner';
import Testimonial from './components/testimonial'
import Clinets from './components/clinets';
import About from './components/about';
import Services from './components/services';
import Video from './components/video';
import Portfolio from './components/portfolio';
import Faqs from './components/faqs';
import Blogs from './components/blogs';

const Home = () => {
  
  return (
    <>
    <Banner></Banner>
    <About></About>
    <Video></Video>
    <Portfolio></Portfolio>
    <Services></Services>
    <Clinets></Clinets>
    <Testimonial></Testimonial>
    <Faqs></Faqs>
    <Blogs></Blogs>
  </>
  )
}

export default Home