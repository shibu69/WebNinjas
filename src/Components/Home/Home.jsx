import React, { useEffect, useState } from "react";
import "./Home.css";
import HomeVideo from "../Videos/homevid.mp4";
import { gsap } from "gsap";

const Home = () => {

  // This is for the cursor movement effect
  // eslint-disable-next-line
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const homeContainer = document.getElementById("home");
    const cursor = document.getElementById("cursor");
    
    var tlh =gsap.timeline();

    tlh.from("#homeContent h1 span",{
      y:100,
      opacity:0,
      stagger:0.1,
      delay:1
    })
    tlh.to("#homeContent h1 span",{
      y:-20,
      opacity:1,
      stagger:0.1,
    })

    const handleMouseMove = (event) => {
      setCursorPosition({
        x: event.clientX,
        y: event.clientY
      });

      // Use gsap for animation only if the mouse is inside homeContainer
      if (homeContainer.contains(event.target)) {
        gsap.to(cursor, {
          x: event.clientX,
          y: event.clientY,
        });
      }
    };


    //handle when mouse enter the home
    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1
      });
    };

    //handle when the mouse exit the home
    const handleMouseExit = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    homeContainer.addEventListener("mouseenter", handleMouseEnter);
    homeContainer.addEventListener("mouseleave", handleMouseExit);

    return () => {
      // Clean up event listeners when the component unmounts
      document.removeEventListener("mousemove", handleMouseMove);
      homeContainer.removeEventListener("mouseenter", handleMouseEnter);
      homeContainer.removeEventListener("mouseleave", handleMouseExit);
    };
  }, []);


  //Cursor effect ends here

  return (
    <div id="home">
      <div id="cursor">
        <h5>JOIN NOW</h5>
      </div>

      <video autoPlay loop muted src={HomeVideo} />
      
      <div id="homeContent">
        
        <h1>
          <span>w</span><span>e</span><span>b</span><span>n</span><span>i</span><span>n</span><span>j</span><span>a</span><span>s</span>
        </h1>
      </div>
    </div>
  );
};

export default Home;
