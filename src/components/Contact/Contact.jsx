import React, { useRef } from 'react'
import './contact.css'
import Gmail from '../../assets/Gmail1.png';
import Whatsapp from '../../assets/whatsapp1.png';
import Instagram from '../../assets/Instagram.png';
import Telegram from '../../assets/telegram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_oxc8uwj', 'template_jkvd70r', form.current, 'GV6tIw5RtgI5b2w7xMu8J')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                alert('Email Sent !');
            },
                (error) => {
                    console.log(error.text);
                },
            );
    };
    return (
        <section>
            <h1 className='contactPageTitle'>Contact Me</h1>
            <span className='contactDesc'>Please fill out the form below to discuss any work opportunities</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name="your_name" />
                <input type="email" className='email' placeholder='Your Email' name="your_email" />
                <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
                <button type='submit' value='Send' className="submitBtn">Submit</button>
                <div className='links'>
                    <img src={Gmail} alt="Gmail" className='link' />
                    <img src={Whatsapp} alt="Whatsapp" className='link' />
                    <img src={Instagram} alt="Instagram" className='link' />
                    <img src={Telegram} alt="Telegram" className='link' />
                </div>
            </form>
        </section>
    )
}

export default Contact
