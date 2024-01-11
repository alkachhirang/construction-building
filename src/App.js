import './App.css';
// import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom';
import BuildingGallery from './components/BuildingGallery';
import Construction from './components/Construction';
import GateConstruction from './components/GateConstruction';
import Header from './components/Header';
import InteriorDesign from './components/InteriorDesign';
import LoremCards from './components/LoremCards';
import OurWorks from './components/OurWorks';
import PortfolioGallery from './components/PortfolioGallery';
import Testimonials from './components/Testimonials';
import Unique from './components/Unique';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ContactHelp from './components/ContactHelp';
import Footer from './components/Footer';
import React, { useState, useEffect } from 'react';
import BackToTop from './assets/images/png/back_to_top.png';
import { Preloader } from './components/IconImg';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Aos from 'aos';

function App() {
  useEffect(() => {
    AOS.init(
      {
        once: true,
        duration: 800,
      }
    );
    Aos.refresh()
  });
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 2500);
  }, []);
  return (

    <div>
      {screenLoading ? (
        <Preloader />
      ) : (
          <>
            <div className='overflow-hidden'>
              <Header />
              <Construction />
              <InteriorDesign />
              <Unique />
              <OurWorks />
              <LoremCards />
              <GateConstruction />
              <PortfolioGallery />
              <BuildingGallery />
              <Testimonials />
              <ContactHelp />
              <Footer />
            </div>
            <div className='overflow-hidden'>
              <img onClick={() => top()} src={BackToTop} alt='BackToTop' className={backToTop ? "back_to_top right-[1%] bottom-[2%] fixed bg-[#025066] rounded-[50px] cursor-pointer max-w-[45px] sm:max-w-[50px] z-[5]" : "hidden"} />
            </div>
          </>
      )}
    </div>



  );
}

export default App;
