import React from 'react'
import aboutCSS from './../About/About.module.css'
import aboutImg from './../../assets/about-one.png'

const About = () => {
  return (
      <div id="about" className={`${aboutCSS.about_wrapper} section`}>
      <div className={aboutCSS.about_img}>
        <img src={aboutImg} alt="" />
      </div>
      <div className={aboutCSS.about_content}>
        <small className='section_heading'>Wisam International Hotel</small>
        <h2 className='section_title'>
          Where Elegance meets <span>Excellence</span>
        </h2>
        <p>
          Welcome to Wisam International Hotel, where luxury and comfort converge. Nestled in the heart of the city, our hotel offers a unique blend of modern amenities and timeless elegance. Whether you're here for a business trip, family vacation, or special event, we promise an unforgettable stay with impeccable service and attention to detail.
        </p>
        <div className={aboutCSS.Cards}>
          <p>250k+ <span>Happy Visitors</span></p>
          <p>100+ <span>Memorable Events</span></p>
        </div>
      </div>
    </div>
  )
}

export default About
