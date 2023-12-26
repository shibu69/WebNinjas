import React, { useEffect } from 'react';
import "./AboutUs.css";

const AboutUs = () => {
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
        <div id='page2'>
            <div id="head" className='reveal'>
                <div id="left">
                    <h3>Full-service Web Agency.</h3>
                    <h3>crafted for your needs.</h3>
                </div>

                <div id="right">
                    <h3>Rooted from India</h3>
                </div>
            </div>

            <hr />

            <div id="main-para" className='revealpara'>
                <p>Embrace excellence with our global web agency, crafting tailor-made solutions for unique needs. Our commitment transcends borders, offering a seamless experience. Elevate global success with innovative digital solutions for an impactful online presence.</p>
            </div>
        </div>
    );
};

export default AboutUs;
