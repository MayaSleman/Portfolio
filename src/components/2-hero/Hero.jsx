import React from 'react'
import "./Hero.css"
import mee from "./../../assets/images/mee.png"
import Lottie from 'lottie-react'
import devAnimation from "./../../../src/animation/Animation - 1722506761849.json"
export default function Hero() {
  return (
    <section className='hero flex'id='about'>
      <div className='left-section'>
        <div className="parent-avatar flex">
          <img src={mee} alt="avatar" className='avatar' data-aos="zoom-in" />
          <div className='icon-verified'></div>
        </div>
        <h1 className='title' data-aos="fade-right">IT Engineer | Software Engineer | Front-End Developer </h1>
        <p className='sub-title' data-aos="fade-up">I am an Informatics Engineer specializing in Software Engineering and also a Front-End Developer. I have extensive experience in creating advanced and responsive web applications and possess the ability to transform complex ideas into intuitive and attractive user interfaces. I always strive to work in interactive and collaborative environments to achieve the best results and deliver innovative software solutions that meet and exceed user expectations.</p>
        <div className="all-icons">
          <a href='https://www.facebook.com/maya.ssleman.3?mibextid=ZbWKwL' target='blank' className="icon icon-facebook2"></a>
          <a href='https://www.instagram.com/maya_sleman_3?igsh=bHM4cmg3NXIwb204' target='blank' className="icon icon-instagram"></a>
          <a href='https://github.com/MayaSleman' target='blank' className="icon icon-github"></a>
          <a href='https://www.linkedin.com/in/maya-sleman-b36384290' target='blank' className="icon icon-linkedin"></a>
        </div>
      </div>
      <div className='right-section animation'>
        <Lottie animationData={devAnimation} className='devAnimation' />
      </div>
    </section>
  )
}
