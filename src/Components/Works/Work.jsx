import React from 'react'
import "./Work.css"
import vid1 from "../Videos/work1.mp4"
import vid2 from "../Videos/work2.mp4"
import vid3 from "../Videos/work3.mp4"
import img1 from "../Images/img1.avif"
import img2 from "../Images/img2.avif"
import img3 from "../Images/img3.avif"

const Work = () => {
  return (
    <div id='page3'>
        <div id="page3-top">
            <h4>Developer & Designing <span>Models</span></h4>
            <h2>Explore Our Services</h2>
            <h2>& different Web design</h2>
        </div>

        <div id="page3-elements">
            <div className="box">
                <img src={img1} alt="" />
                <video autoPlay loop muted src={vid1}></video>
            </div>
            <div className="box">
                <img src={img2} alt="" />
                <video autoPlay loop muted src={vid2}></video>
            </div>
            <div className="box">
                <img src={img3} alt="" />
                <video autoPlay loop muted src={vid3}></video>
            </div>
        </div>
      
    </div>
  )
}

export default Work
