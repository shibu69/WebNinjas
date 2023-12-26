import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav>
        <h2>The Web Devs</h2>
        <div id="rightNav">
        <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#page2">About</a></li>
              <li><a href="#serv-container">Services & Models</a></li>
              <li><a href="#page3">Works</a></li>
              <li><a href="#contact">Workarea</a></li>
            </ul>
        </div>
    </nav>
  )
}

export default Navbar
