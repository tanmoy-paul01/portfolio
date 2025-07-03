import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './about.css'
import About_img from '../../assets/about_img.png'

const about = () => {
    return (
        <div id='about' className='about'>

            <div className="about-title">
                <h1>About me</h1>
            </div>

            <div className="about-section">

                <div className="about-left">
                    <img src={About_img} alt="" />
                </div>

                <div className="about-right">
                    <div className="about-para">
                        <p>
                            Hello! I'm Tanmoy Paul, a fourth-year IT student and passionate Full Stack Web Developer with solid problem-solving skills.<br></br>
                            I specialize in building interactive and performance-optimized web applications using React.js, Node.js, Express.js, HTML, and CSS. My strength lies in Data Structures & Algorithms, which I regularly practice using Java to improve my logical thinking and coding efficiency.<br></br>
                            I'm also familiar with Python, C, and relational databases like MySQL and PostgreSQL. Whether it’s crafting a clean UI or developing RESTful APIs, I enjoy the process of turning ideas into code.<br></br>
                            I’m actively seeking opportunities to apply my skills in real-world projects and collaborate with innovative teams.
                        </p>
                    </div>
                    <div className="about-action">
                        <div className="about-resume">
                            <button className="about-resume-button">
                                <a
                                    className='about-resume-anchor'
                                    href='https://drive.google.com/file/d/1BYUa0MWxE_mRxbsby2p8h7rTixO7g8bj/view?usp=sharing'
                                    target="_blank"
                                    rel="noopener noreferrer">
                                    My Resume
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default about