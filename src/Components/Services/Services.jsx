import React, { useEffect, useState } from "react";
import "./Services.css";
import bgvideo from "../Images/bgvid.webm";
import { gsap } from "gsap";

const Services = () => {

    // eslint-disable-next-line
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const homeContainer = document.getElementById("pg4-content");
    const cursor = document.getElementById("page4-cursor");

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


  useEffect(() => {
    const revealElements = document.querySelectorAll(".reveal");
    const revealpara = document.querySelectorAll(".revealpara");

    function reveal() {
      revealElements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
      revealpara.forEach((element) => {
        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;
        const revealPoint = 180;

        if (revealTop < windowHeight - revealPoint) {
          element.classList.add("active");
        } else {
          element.classList.remove("active");
        }
      });
    }

    // Initial reveal on component mount
    reveal();

    // Add scroll event listener
    window.addEventListener("scroll", reveal);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div div id="serv-container">
      <div id="page6">
        <div id="pg6-head" className="reveal">
          <div id="left">
            <h3>We built </h3>
            <h3>what you want.</h3>
          </div>
        </div>

        <hr />

        <div id="main-para" className="revealpara">
          <p>
            {" "}
            We craft responsive websites, optimize user experiences, and
            implement cutting-edge technologies to ensure your digital success.
            Let's build brilliance together.
          </p>
        </div>
      </div>

      <div id="page4">
      <div id="page4-cursor">
        <h5>Take your seat</h5>
      </div>
        <video id="page4-vid" autoPlay loop muted src={bgvideo}></video>
        <div id="pg4-content">
            <h1>05 SEAT</h1>
            <h4>AVAILABLE FOR 2023</h4>
        </div>
      </div>
    </div>
  );
};

export default Services;
