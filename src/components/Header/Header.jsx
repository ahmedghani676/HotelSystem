import React from 'react'
import headerCss from './../Header/Header.module.css'
import {Swiper,SwiperSlide} from 'swiper/react'
import "swiper/css";  
import {Autoplay, Parallax} from 'swiper/modules'
export const Header = () => {
  return (
      <div id = "home" className={headerCss.header_wrapper}>
          <Swiper
              slidesPerView={1}
              spaceBetween={0}
              loop={true}
              parallax={true}
              speed={1500}
              autoplay={{
                  delay : 2500
              }}
              modules={[Autoplay , Parallax]}
              className={headerCss.swiper}>
              <SwiperSlide>
                  <div className={`${headerCss.Header_slide} ${headerCss.slide1}`}>
                      <div className={`${headerCss.content}`}>
                          <small data-swiper-parallax = "-200">
                              Luxury Hotel & Restaurant
                          </small>
                          <h2 data-swiper-parallax = "-250">
                              Enjoy your <span>Dream</span> Time with <br />
                              <span>Luxury</span> Experience
                          </h2>
                          <p data-swiper-parallax = "-300"> Call Now <span>+966597889744</span></p>
                      </div>
                  </div>
              </SwiperSlide>
              <SwiperSlide>
                      <div className={`${headerCss.Header_slide} ${headerCss.slide2}`}>
                       <div className={`${headerCss.content}`}>   
                      <small data-swiper-parallax = "-200">
                              Luxury Hotel & Restaurant
                          </small>
                          <h2 data-swiper-parallax = "-250">
                              Enjoy your <span>Dream</span> Time with <br />
                              <span>Luxury</span> Experience
                          </h2>
                          <p data-swiper-parallax = "-300"> Call Now <span>+966597889744</span></p>
                 
                          </div>
                      </div>
              </SwiperSlide>
              <SwiperSlide>
                      <div className={`${headerCss.Header_slide} ${headerCss.slide3}`}>
                       <div className={`${headerCss.content}`}>    
                      <small data-swiper-parallax = "-200">
                              Luxury Hotel & Restaurant
                          </small>
                          <h2 data-swiper-parallax = "-250">
                              Enjoy your <span>Dream</span> Time with <br />
                              <span>Luxury</span> Experience
                          </h2>
                          <p data-swiper-parallax = "-300"> Call Now <span>+966597889744</span></p>
                 
                          </div>
                      </div>
              </SwiperSlide>
          </Swiper>
    </div>
  )
}
