import React from 'react'
import './skills.css'

import HTML_svg from '../../assets/html.svg'
import CSS_svg from '../../assets/css.svg'
import React_svg from '../../assets/react.svg'
import Javascript_svg from '../../assets/javascript.svg'
import Node_svg from '../../assets/nodejs.svg'
import Express_svg from '../../assets/expressjs.svg'
import SQL_svg from '../../assets/sql.svg'
import Java_svg from '../../assets/java.svg'
import Python_svg from '../../assets/python.svg'
import C_svg from '../../assets/c.svg'


const skills = () => {
return (
    <div id='skills' className='skills'>
        <div className='skill-item1'>
            <h1>Skills</h1>
        </div>
        <div className='skill-item2'>
            <div className="skill-item2-left">
                <div className="frame1 frame">
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                </div>
                <div className="frame2 frame">
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='HTML_svg frame_active'><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'><img src={HTML_svg} alt="" /></a></div>
                    <div className='CSS_svg frame_active'><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'><img src={CSS_svg} alt="" /></a></div>
                    <div className='React_svg frame_active'><a href="reactjs.org)" target='_blank'><img src={React_svg} alt="" /></a></div>
                    <div className='frame_inactive'></div>
                </div>
                <div className="frame3 frame">
                    <div className='frame_inactive'></div>
                    <div className='Javascript_svg frame_active'><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'><img src={Javascript_svg} alt="" /></a></div>
                    <div className='Node_svg frame_active'><a href="https://nodejs.org/en/docs" target='_blank'><img src={Node_svg} alt="" /></a></div>
                    <div className='Express_svg frame_active'><a href="https://expressjs.com/" target='_blank'><img src={Express_svg} alt="" /></a></div>
                    <div className='SQL_svg frame_active'><a href="https://www.w3schools.com/sql/" target='_blank'><img src={SQL_svg} alt="" /></a></div>
                    <div className='frame_inactive'></div>
                </div>
                <div className="frame4 frame">
                    <div className='frame_inactive'></div>
                    <div className='frame_inactive'></div>
                    <div className='Java_svg frame_active'><a href="https://docs.oracle.com/en/java/" target='_blank'><img src={Java_svg} alt="" /></a></div>
                    <div className='Python_svg frame_active'><a href="https://docs.python.org/3/" target='_blank'><img src={Python_svg} alt="" /></a></div>
                    <div className='C_svg frame_active'><a href="https://devdocs.io/c/" target='_blank'><img src={C_svg} alt="" /></a></div>
                    <div className='frame_inactive'></div>
                </div>
                <div className="frame5 frame">
                    <div className="frame_inactive"></div>
                    <div className="frame_inactive"></div>
                    <div className="frame_inactive"></div>
                    <div className="frame_inactive"></div>
                    <div className="frame_inactive"></div>
                    <div className="frame_inactive"></div>
                </div>
            </div>
    
            <div className="skill-item2-right">
                <div className="skill-element">
                    <p><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>HTML & CSS</a></p>
                    <div>
                        <hr style={{ width: "80%" }} />
                        <p>80%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="reactjs.org)" target='_blank'>React JS</a></p>
                    <div>
                        <hr style={{ width: "70%" }} />
                        <p>70%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>JavaScript JS</a></p>
                    <div>
                        <hr style={{ width: "80%" }} />
                        <p>80%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://nodejs.org/en/docs" target='_blank'>Node JS</a></p>
                    <div>
                        <hr style={{ width: "60%" }} />
                        <p>60%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://expressjs.com/" target='_blank'>Express JS</a></p>
                    <div>
                        <hr style={{ width: "50%" }} />
                        <p>50%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://www.w3schools.com/sql/" target='_blank'>SQL</a></p>
                    <div>
                        <hr style={{ width: "80%" }} />
                        <p>80%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://docs.oracle.com/en/java/" target='_blank'>Java</a></p>
                    <div>
                        <hr style={{ width: "90%" }} />
                        <p>90%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://docs.python.org/3/" target='_blank'>Python</a></p>
                    <div>
                        <hr style={{ width: "60%" }} />
                        <p>60%</p>
                    </div>
                </div>
                <div className="skill-element">
                    <p><a href="https://devdocs.io/c/" target='_blank'>C</a></p>
                    <div>
                        <hr style={{ width: "80%" }} />
                        <p>80%</p>
                    </div>
                </div>
    
            </div>
        </div>
    </div>
)
}

export default skills