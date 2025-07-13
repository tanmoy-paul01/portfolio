import React from 'react'
import './project.css'
import mywork_data from '../../assets/mywork_data'

const project = () => {
    return (
        <div id='projects' className='project'>
            <div className="project-title">
                <h1>My latest Work</h1>
            </div>
            <div className="project-container">
                {mywork_data.map((work, index) => {
                    return (
                        // <div key={index} className="project-card">
                        //     <a href={work.w_Live_link} target='_blank'><img src={work.w_img} alt='' /></a>
                        //     <div className="project-card-links">
                        //         <a href={work.w_Live_link} target='_blank'>Live vew</a>
                        //         <a href={work.w_Git_link} target='_blank'>Github Repo</a>
                        //     </div>
                        // </div>
                        <div key={index} className="project-card">
                            <div className="project-image-container">
                                <img src={work.w_img} alt='' />
                                <div className="project-overlay">
                                    <p>{work.w_title}</p>
                                    <div className="project-card-links">
                                        <a href={work.w_Live_link} target='_blank' rel="noreferrer">Live View</a>
                                        <a href={work.w_Git_link} target='_blank' rel="noreferrer">GitHub Repo</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default project