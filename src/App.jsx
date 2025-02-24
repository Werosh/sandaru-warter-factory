import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from "./Pages/Home"
import Features from './Pages/Features'
import About from './Pages/AboutUs'
import Products from './Pages/Products'
import Process from './Pages/ProductionProcess'
import Contact from './Pages/Contact'
import Background from './components/Background'
import Footer from './components/Footer'
import Sustainability from './Pages/Sustainability'
import BackToTop from './components/BackToTop'

const App = () => {
  useEffect(() => {
    // Viewport animation setup
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, { threshold: 0.1 });
    
    // Select all elements with the 'animate-on-scroll' class
    const sections = document.querySelectorAll('.animate-on-scroll');
    sections.forEach(section => {
      observer.observe(section);
    });
    
    // Cleanup observer when component unmounts
    return () => {
      sections.forEach(section => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div>
      <Background />
      <Navbar />
      <div className="animate-on-scroll">
        <Home />
      </div>
      <div className="animate-on-scroll">
        <Features/>
      </div>
      <div className="animate-on-scroll">
        <About/>
      </div>
      <div className="animate-on-scroll">
        <Products/>
      </div>
      <div className="animate-on-scroll">
        <Process/>
      </div>
      <div className="animate-on-scroll">
        <Sustainability />
      </div>
      <div className="animate-on-scroll">
        <Contact/>
      </div>
      <Footer/>
      <BackToTop/>
    </div>
  )
}

export default App