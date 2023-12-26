import React, { useEffect } from 'react';
import './App.css';
import { gsap } from 'gsap';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import AboutUs from './Components/AboutUs/AboutUs';
import Work from './Components/Works/Work';
import Services from './Components/Services/Services';
import Contact from './Components/Contact/Contact';

function App() {
  useEffect(() => {
    var tl = gsap.timeline();

    tl.from("#loader h3", {
      x: 40,
      opacity: 1,
      duration: 1,
      stagger: 0.1,
    });
    

    tl.to("#loader h3", {
      x: -10,
      opacity: 0,
      duration: 1,
      stagger: 0.1,
    });

    tl.to("#loader", {
      opacity: 0,
      onComplete: () => {
        // Change display property when animation is complete
        document.getElementById("loader").style.display = "none";
      },
    });
  }, []); // Empty dependency array ensures the useEffect runs only once

  return (
    <>
      <div id="loader">
        <h3>Let's</h3>
        <h3>Build</h3>
        <h3>Together "</h3>
      </div>
      <div className="App">
        <Navbar/>
        <Home/>
        <AboutUs/>
        <Work/>
        <Services/>
        <Contact/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
