import React, { useState, useRef } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './navbar.css'
import footer_logo from '../../assets/about_img.png'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const navbar = () => {

    const [menu, setMenu] = useState("home");
    const menuRef = useRef();

    const openMenu = () => {
        menuRef.current.style.right = "0";
    }

    const closeMenu = () => {
        menuRef.current.style.right = "-350px";
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <img src={footer_logo} alt="" />
                <p>Tanmoy</p>
            </div>


            <ul ref={menuRef} className="nav-menu">
                <img src={menu_close} onClick={closeMenu} alt=""className='nav-mob-close' />
                <li><AnchorLink className="anchor-link" offset={50} href='#home' onClick={()=>setMenu("home")}>Home</AnchorLink>{menu === "home" ? <hr className='page-changing' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#about' onClick={()=>setMenu("about")}>About Me</AnchorLink>{menu === "about" ? <hr className='page-changing' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#skills' onClick={() => setMenu("skills")}>Skills</AnchorLink>{menu === "skills" ? <hr className='page-changing' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#projects' onClick={()=>setMenu("projects")}>Projects</AnchorLink>{menu === "projects" ? <hr className='page-changing' /> : <></>}</li>
                <li><AnchorLink className="anchor-link" offset={50} href='#contact' onClick={()=>setMenu("contact")}>Contact</AnchorLink>{menu === "contact" ? <hr className='page-changing' /> : <></>}</li>
            </ul>

            <div className="social-buttons">
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
            <img src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'/>


        </div>
    )
}

export default navbar;