import { useRef } from 'react';
import './App.css'
import Navbar from './components/navbar';
import About from './components/about';
import Portfolio from './components/portfolio';
import Contact from './components/contact';
import Landing from './components/landing';

function App() {
  const headerRef = useRef(null);
  const landingRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  
  const sectionRefs = [
    { section: 'Landing', ref: landingRef },
    { section: 'About', ref: aboutRef },
    { section: 'Portfolio', ref: portfolioRef },
    { section: 'Contact', ref: contactRef },
  ];


  return (
    <div>
      {/* ----Navbar----- */}
      <Navbar props={sectionRefs} headerProp={headerRef} />
      {/* ----Landing Page----- */}
      <div ref={landingRef}>
        <Landing portfolioProp={portfolioRef} />
      </div>
      {/* ----About----- */}
      <div className="wrapper">
        <div className='refWrapper' ref={aboutRef}>
          <About />
        </div>
        {/* ----Portfolio----- */}
        <div className='refWrapper' ref={portfolioRef}>
          <Portfolio />
        </div>
        {/* ----Contact/Footer----- */}
        <div className='refWrapper' ref={contactRef}>
          <Contact/>
        </div>
      </div>
    </div>
  );
}

export default App
