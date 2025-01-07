import React from 'react'
import ServicesCss from './../Services/Service.module.css'

const Service = () => {
  return (
      <div id = "service" className={`${ServicesCss.Service_wrapper} section`}>
          <small className='section_heading'>
              Facilities
          </small>
          <h2 className='secttion_title'>
              Our Best <span>Services</span>
          </h2>
          <div className={ServicesCss.Services_cards}>
              <div className= {ServicesCss.Service_card}>
                  <i className='ri-hotel-line'></i>
                  <h3>Basic Facilities</h3>
                  <p>Reception FrontDesk</p>
                  <p>House keeping</p>
                  <p>wifi & parking</p>
              </div>
              <div className={ServicesCss.Service_card}>
                  <i className='ri-hotel-bed-line'></i>
                  <h3>Room Amenities</h3>
                  <p>Comfortable Bedding</p>
                  <p>Bedroom</p>
                  <p>TV & AC</p>
              </div>
              <div className={ServicesCss.Service_card}>
                  <i className='ri-goblet-line'></i>
                  <h3>Dining Options</h3>
                  <p>Restaurant Cafe</p>
                  <p>Lounge Area</p>
                  <p>Cafe & Canteen</p>
                  <p>Room Services</p>
              </div>

          </div>
    </div>
  )
}

export default Service