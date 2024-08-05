import React, { useState, useEffect } from 'react';
import './Contact.css';
import Lottie from 'lottie-react';
import emailjs from 'emailjs-com';
import contactAnimation from "./../../../src/animation/Animation - 1722426984104.json";
import doneAnimation from "./../../../src/animation/Animation - 1722704991057 (1).json";
import failedAnimation from "./../../../src/animation/Animation - 1722705290214.json";

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [animationData, setAnimationData] = useState(null); 

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus('');
        setAnimationData(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      to_email: "mayasleman21@gmail.com",
      message,
    };

    emailjs.send('service_0h18tdy', 'template_ksayytg', templateParams, 'V2qdbs20Dl6UdWDyg')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setStatus('Message sent successfully!'); 
        setEmail('');
        setMessage(''); 
        setAnimationData(doneAnimation); 
      }, (err) => {
        console.log('FAILED...', err);
        setStatus('Failed to send the message, please try again.'); 
        setAnimationData(failedAnimation);  
      });
  };

  return (
    <section className='contact-us' id='contact' data-aos="fade-up">
      <h1 className='title'>
        <span className='icon-envelope'></span>
        Contact Us
      </h1>
      <p className='sub-title'>Contact Us for more information and Get notified when we publish something new</p>
      <div className="flex" style={{ justifyContent: "space-between" }}>
        <form onSubmit={handleSubmit}>
          <div className='flex' style={{ justifyContent: "space-between" }}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id='email'
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div style={{ marginTop: "24px" }} className='flex'>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <button type='submit' className='submit'>Submit</button>
          {status && (
            <div className="status-message flex">
              <Lottie animationData={animationData} style={{ height: 30 }} />
              <p>{status}</p>
            </div>
          )} 
        </form>
        <div className="animation">
          <Lottie animationData={contactAnimation} style={{ height: 355 }} className='contactAnimation' />
        </div>
      </div>
    </section>
  );
}