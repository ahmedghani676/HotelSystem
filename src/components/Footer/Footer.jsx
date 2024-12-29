import React from 'react'
import footerCss from './../Footer/Footer.module.css'

const Footer = () => {
  return (
      <div id = "contacts" className={`${footerCss.footer_wrapper} section`}>
          <div className={footerCss.FooterLinks}>
              <div className={footerCss.logo}>
                  <h2>Wisam International</h2>
                  <p>Wisam International is dedicated to providing exceptional hospitality services that combine luxury with comfort. We offer a wide range of top-class amenities and world-class service, ensuring that every guest's stay is unforgettable.</p>
              </div>
          </div>
          
          <div className={footerCss.FooterLinks}>
              <h3>Quick Links</h3>
              <p>About Us: Learn about our mission, vision, and commitment to excellence.</p>
              <p>Contact Us: Get in touch with us for any inquiries or support.</p>
              <p>Rooms: Discover the various types of luxurious rooms we offer for your comfort.</p>
              <p>Gym: Stay active and healthy with our state-of-the-art gym facilities.</p>
              <p>Restaurants: Savor exquisite dishes prepared by world-class chefs at our restaurants.</p>
          </div>
          
          <div className={footerCss.FooterLinks}>
              <h3>Branches</h3>
              <p>Wisam-1: The first and flagship branch, offering a signature luxury experience.</p>
              <p>Wisam-2: Our second branch, known for its serene ambiance and excellent services.</p>
              <p>Wisam-3: Located in the heart of the city, perfect for both business and leisure.</p>
              <p>Wisam-4: Our newest addition, featuring modern designs and innovative amenities.</p>
          </div>
          
          <div className={footerCss.FooterLinks}>
              <h3>Contact</h3>
              <p>Address: <a href="https://maps.app.goo.gl/qNS1VeGBQp5TWAVA6" target="_blank" rel="noopener noreferrer">Click here to view our location on the map.</a></p>
              <p>Email: <a href="mailto:wisamalmadinah@gmail.com">wisamalmadinah@gmail.com</a> - Reach out to us for any inquiries.</p>
              <p>Phone Number: <a href="tel:+966597889744">00966597889744</a> - Our team is ready to assist you anytime.</p>
          </div>
      </div>
  )
}

export default Footer
