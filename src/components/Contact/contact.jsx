import React from 'react'
import './contact.css'
import Mail_icon from '../../assets/mail_icon.svg'
import Location_icon from '../../assets/location_icon.svg'
import Call_icon from '../../assets/call_icon.svg'

const contact = () => {

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "e29071e2-81a6-4dc8-a6ed-f04fb5ba7e01");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: json
        }).then((res) => res.json());
    
        if (res.success) {
            alert(res.message);
        }
    };


    return (
        <div id='contact' className='contact'>

            <div className="contact-title">
                <h1>Get in touch</h1>
            </div>

            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>Passionate Coder | Problem Solver | Full-Stack Developer</p>
                    <p>Currently solving DSA with Java & building awesome React projects.</p>
                    <p>Let's connect and grow together</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={Mail_icon} alt="" />
                            <p>tnmypl2003@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Call_icon} alt="" />
                            <p>+91 7557882856</p>
                        </div>
                        <div className="contact-detail">
                            <img src={Location_icon} alt="" />
                            <p>Kalyani, West Bengal</p>
                        </div>
                    </div>
                </div>

                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
                    <div className='contact-action'>
                        <div className="contact-submit">
                            <button  type="submit" className="contact-submit-button">Submit now</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default contact