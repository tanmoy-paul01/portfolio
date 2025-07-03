import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './footer.css'
import footer_logo from '../../assets/about_img.png'
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const footer = () => {
    return (
        <div className='footer'>

            <div className="footer-content">
                <div className="footer-left">
                    <div className="logo">
                        <img src={footer_logo} alt="" />
                        <p>Tanmoy</p>
                    </div>
                    <p className='footer-para'>  Passionate full-stack web developer skilled in React, Node.js, Express.js, and MySQL, with strong DSA knowledge in Java. I build creative, responsive apps and love solving real-world problems through code. Let's build something awesome together!</p>
                </div>
                <hr />
    
                <ul className="footer-middle">
                    <li><AnchorLink className="footer-anchor-link" offset={50} href='#home'>Home</AnchorLink></li>
                    <li><AnchorLink className="footer-anchor-link" offset={50} href='#about'>About Me</AnchorLink></li>
                    <li><AnchorLink className="footer-anchor-link" offset={50} href='#skills'>Skills</AnchorLink></li>
                    <li><AnchorLink className="footer-anchor-link" offset={50} href='#projects'>Projects</AnchorLink></li>
                    <li><AnchorLink className="footer-anchor-link" offset={50} href='#contact'>Contact</AnchorLink></li>
                </ul>
                <hr />
    
                <div className="footer-right">
                    <a href="https://www.linkedin.com/in/tanmoy-paul-1a3676320/" target="_blank" rel="noopener noreferrer" className="icon-btn linkedin">
                        <FaLinkedinIn />
                    </a>
                    <a href="https://github.com/tanmoy-paul01" target="_blank" rel="noopener noreferrer" className="icon-btn github">
                        <FaGithub />
                    </a>
                    <a href="https://www.facebook.com/tanmoy.paul.218981" target="_blank" rel="noopener noreferrer" className="icon-btn facebook">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/tanmoy_paul18/" target="_blank" rel="noopener noreferrer" className="icon-btn instagram">
                        <FaInstagram />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default footer