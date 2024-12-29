import React from 'react'
import TestimonialCss from './../Testimonial/Testimonial.module.css'
import { Swiper, SwiperSlide } from "swiper/react"
import img1 from './../../assets/testi-01.jpg'
import img2 from './../../assets/testi-04.jpg'
import img3 from './../../assets/testi-03.jpg'
import { Autoplay } from 'swiper/modules'
import "swiper/css";  
const Testimonial = () => {
  return (
    <div id = "testimonials" className={`${TestimonialCss.testimonial_wrapper} section`}>
      <small className='section_heading'>
        Testimonials
      </small>
      <h2 className='section_title'>
        What Our Client <span>Says</span>
      </h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        parallax={true}
        speed={1500}
        autoplay={{
          delay: 1000
        }}
        breakpoints={{
          0: {
            slidesPerView: 1
          },
          768: {
            slidesPerView: 2
          },
        }}
        modules={[Autoplay]}
        className={`${TestimonialCss.swiper}`}>
        <SwiperSlide>
          <div className={`${TestimonialCss.amenities_item}`}>
            <img src={img1} alt="amenities-img" />
            <div className={TestimonialCss.content}>
              <h2>John Doe <span>Manager</span></h2>
              <p>
                Our experience was outstanding. The team at this hotel went above and beyond to make sure our stay was perfect. The facilities were top-notch, and the customer service was exceptional. I would highly recommend this place to anyone looking for comfort and luxury!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${TestimonialCss.amenities_item}`}>
            <img src={img2} alt="amenities-img" />
            <div className={TestimonialCss.content}>
              <h2>Samantha <span>Sales Manager</span></h2>
              <p>
                I had a wonderful stay here. The ambiance of the rooms and the attention to detail in every service was remarkable. The staff was always available, and their professionalism made all the difference. A perfect retreat for business and leisure alike!
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${TestimonialCss.amenities_item}`}>
            <img src={img3} alt="amenities-img" />
            <div className={TestimonialCss.content}>
              <h2>Amrita <span>Manager</span></h2>
              <p>
                I was truly impressed by the overall experience. The rooms were immaculate, and the amenities exceeded expectations. The hotel’s commitment to ensuring guests have everything they need made my visit a memorable one. I will definitely be back!
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Testimonial
