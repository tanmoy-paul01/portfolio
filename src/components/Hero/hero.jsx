import React, { useState, useEffect } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './hero.css';
import profile_img from '../../assets/about_img.png';

const Hero = () => {
    const texts = ['Full Stack Web Developer', 'UI/UX Designer', 'React Enthusiast', 'Java Programmer', 'DSA Problem Solver'];
    const [index, setIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 2000); // Change text every 2 seconds

    return () => clearInterval(interval); // Cleanup
    }, []);

    return (
        <div id='home' className='hero'>

            {/* --------Hero Content-------- */}

            <div className="hero-item1">
                <h1>
                    <span className='name'>Hello, I'm
                        <br />
                        <span className='my-name'>Tanmoy Paul</span>
                        <br></br>
                        I'm a<tr></tr></span>{' '}
                    <span className="changing-text">{texts[index]}</span>
                </h1>
        
                <p>
                    I'm a fourth-year student specializing in Full Stack Web development with strong Java and DSA skills. I've built responsive, user-friendly web applications, including a robust e-commerce site.
                </p>
                
                <div className="hero-action">
                    <div className="hero-connect">
                        <button className="hero-connect-button"><AnchorLink className="hero-anchor-link" offset={50} href='#contact'>Let's Connect</AnchorLink></button>
                    </div>
                </div>
            </div>

            {/* --------Hero Image-------- */}
            
            <div className="hero-item2">
                <img src={profile_img} alt='Profile' />
            </div>
        </div>
    );
};

export default Hero;
