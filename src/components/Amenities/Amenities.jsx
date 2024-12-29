import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import AminitiesCss from './../Amenities/Amenities.module.css'
import img1 from './../../assets/gym.jpg'
import img2 from './../../assets/pool.jpg'
import img3 from './../../assets/rest.jpg'
import { Autoplay } from 'swiper/modules'
import { Link } from 'react-scroll'; // Import Link from react-scroll
import "swiper/css";  

export const Amenities = () => {
  return (
    <div id = "amenities" className={`${AminitiesCss.aminitiesCss_wrapper} section`}>
      <small className='section_heading'>
        Luxury Amenities
      </small>
      <h2 className='section_title'>
        Our Best <span>Amenities</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        parallax={true}
        speed={2000}
        autoplay={{
          delay: 1000
        }}
        modules={[Autoplay]}
        className={`${AminitiesCss.swiper}`}>
        <SwiperSlide>
          <div className={`${AminitiesCss.amenities_item}`}>
            <img src={img1} alt="amenities-img" />
            <div className={AminitiesCss.content}>
              <h2>Swimming Pool</h2>
              <p>
                Dive into luxury with our stunning swimming pool, designed for relaxation and recreation. Whether you're swimming laps or just soaking up the sun, our pool area offers a perfect escape with breathtaking views and top-notch facilities.
                          </p>
             <Link to="rooms" smooth={true} duration={500}>
              <button>Book Now</button>
            </Link>      
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${AminitiesCss.amenities_item}`}>
            <img src={img2} alt="amenities-img" />
            <div className={AminitiesCss.content}>
              <h2>Gym and Sports</h2>
              <p>
                Stay fit and energized at our fully equipped gym, where you can enjoy a wide range of fitness activities. From cardio to strength training, we offer everything you need to maintain your routine while staying at our luxurious resort.
              </p>
               <Link to="rooms" smooth={true} duration={500}>
              <button>Book Now</button>
                          </Link>
                      </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${AminitiesCss.amenities_item}`}>
            <img src={img3} alt="amenities-img" />
            <div className={AminitiesCss.content}>
              <h2>Restaurant and Cafe</h2>
              <p>
                Indulge in a culinary journey at our on-site restaurant and cafe, offering a delightful selection of international and local dishes. Whether you're in the mood for a cozy coffee or an elegant dinner, our dining experience is sure to satisfy your cravings.
              </p>
              <Link to="rooms" smooth={true} duration={500}>
              <button>Book Now</button>
            </Link> 
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
