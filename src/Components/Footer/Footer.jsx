import React from "react";
import "./Footer.css";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  return (
    <div id="footer">
      <div id="leftFoot">
        <div id="leftTop">
          <h1>Relax. We are here</h1>
          <a href="#contact"><button id="myBtn"> Take a seat</button></a>
        </div>

        <div id="leftBottom">
          <h3>Noida-Uttar Pradesh</h3>
          <h3>Delhi-New Delhi</h3>
        </div>
      </div>

      <div id="rightFoot">
        <div id="Lists">
          <div id="leftList">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#page2">About</a></li>
              <li><a href="#serv-container">Services & Models</a></li>
              <li><a href="#page3">Works</a></li>
              <li><a href="#contact">Workarea</a></li>
            </ul>
          </div>
          <div id="rightList">
            <ul>
              <li>
                <a href="https://twitter.com/shibu1922">Twitter <MdArrowOutward /></a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/shivendramishra1922/">Linkedin <MdArrowOutward /></a>
              </li>
              <li>
                <a href="https://www.instagram.com/nkf_shivendra/">Instagram <MdArrowOutward /></a>
              </li>
            </ul>
          </div>
        </div>

        <div id="rightBottom">
            
           <h3>Made By Shivendra Mishra</h3>
        </div>
      </div>
    </div>
  );
};

export default Footer;
