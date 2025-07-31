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
                            I am a final-year B.Tech Information Technology student at JIS College of Engineering with a strong foundation
                            in full-stack web development, specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js), SQL, Java,
                            and TailwindCSS. I enjoy building dynamic, responsive, and performance-optimized web applications with clean UI and
                            efficient backend systems. My problem-solving skills are backed by a 5⭐ Java badge on HackerRank and a solid
                            understanding of Data Structures and Algorithms.
                            <br /><br />
                            Beyond academics, I’ve participated in multiple hackathons, including the Smart India Hackathon (SIH), where
                            I developed real-world solutions under pressure. These experiences have enhanced my teamwork, critical thinking,
                            and adaptability. I'm currently seeking internship or full-time roles to grow professionally and contribute to
                            impactful, tech-driven projects.
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