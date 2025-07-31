import React from 'react';
import './skills.css';

import HTML_svg from '../../assets/html.svg';
import CSS_svg from '../../assets/css.svg';
import Tailwind_svg from '../../assets/tailwind.svg';
import React_svg from '../../assets/react.svg';
import Javascript_svg from '../../assets/javascript.svg';
import Node_svg from '../../assets/nodejs.svg';
import Express_svg from '../../assets/expressjs.svg';
import SQL_svg from '../../assets/sql.svg';
import Java_svg from '../../assets/java.svg';
import Python_svg from '../../assets/python.svg';
import C_svg from '../../assets/c.svg';

const Skills = () => {
    return (
        <div id="skills" className="skills" data-aos="fade-up">
        <div className="skill-item1" data-aos="zoom-in">
            <h1>Skills</h1>
        </div>
        <div className="skill-item2">
            <div className="skill-item2-left" data-aos="fade-right" data-aos-delay="100">
            <div className="frame1 frame" data-aos="fade-up" data-aos-delay="200">
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
            </div>
            <div className="frame2 frame" data-aos="fade-up" data-aos-delay="300">
                <div className="frame_inactive"></div>
                <div className="HTML_svg frame_active"><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'><img src={HTML_svg} alt="" /></a></div>
                <div className="CSS_svg frame_active"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'><img src={CSS_svg} alt="" /></a></div>
                <div className="Tailwind_svg frame_active"><a href="https://tailwindcss.com/" target='_blank'><img src={Tailwind_svg} alt="" /></a></div>
                <div className="React_svg frame_active"><a href="https://reactjs.org" target='_blank'><img src={React_svg} alt="" /></a></div>
                <div className="frame_inactive"></div>
            </div>
            <div className="frame3 frame" data-aos="fade-up" data-aos-delay="400">
                <div className="frame_inactive"></div>
                <div className="Javascript_svg frame_active"><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'><img src={Javascript_svg} alt="" /></a></div>
                <div className="Node_svg frame_active"><a href="https://nodejs.org/en/docs" target='_blank'><img src={Node_svg} alt="" /></a></div>
                <div className="Express_svg frame_active"><a href="https://expressjs.com/" target='_blank'><img src={Express_svg} alt="" /></a></div>
                <div className="SQL_svg frame_active"><a href="https://www.w3schools.com/sql/" target='_blank'><img src={SQL_svg} alt="" /></a></div>
                <div className="frame_inactive"></div>
            </div>
            <div className="frame4 frame" data-aos="fade-up" data-aos-delay="500">
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="Java_svg frame_active"><a href="https://docs.oracle.com/en/java/" target='_blank'><img src={Java_svg} alt="" /></a></div>
                <div className="Python_svg frame_active"><a href="https://docs.python.org/3/" target='_blank'><img src={Python_svg} alt="" /></a></div>
                <div className="C_svg frame_active"><a href="https://devdocs.io/c/" target='_blank'><img src={C_svg} alt="" /></a></div>
                <div className="frame_inactive"></div>
            </div>
            <div className="frame5 frame" data-aos="fade-up" data-aos-delay="600">
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
                <div className="frame_inactive"></div>
            </div>
            </div>

            <div className="skill-item2-right" data-aos="fade-left" data-aos-delay="100">
            {[
                { label: "HTML & CSS", url: "https://developer.mozilla.org/en-US/docs/Web/HTML", width: "80%" },
                { label: "Tailwind CSS", url: "https://tailwindcss.com/", width: "60%" },
                { label: "React JS", url: "https://reactjs.org", width: "70%" },
                { label: "JavaScript JS", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript", width: "80%" },
                { label: "Node JS", url: "https://nodejs.org/en/docs", width: "60%" },
                { label: "Express JS", url: "https://expressjs.com/", width: "50%" },
                { label: "SQL", url: "https://www.w3schools.com/sql/", width: "80%" },
                { label: "Java", url: "https://docs.oracle.com/en/java/", width: "90%" },
                { label: "Python", url: "https://docs.python.org/3/", width: "60%" },
                { label: "C", url: "https://devdocs.io/c/", width: "80%" }
            ].map((skill, index) => (
                <div className="skill-element" key={index} data-aos="fade-up" data-aos-delay={`${200 + index * 100}`}>
                <p><a href={skill.url} target="_blank" rel="noreferrer">{skill.label}</a></p>
                <div>
                    <hr style={{ width: skill.width }} />
                    <p>{skill.width}</p>
                </div>
                </div>
            ))}
            </div>
        </div>
        </div>
    );
};

export default Skills;
