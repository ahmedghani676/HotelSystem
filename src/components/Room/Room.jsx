import React, { useState } from 'react';
import RoomsCss from './../Room/Room.module.css'
import img1 from './../../assets/WisamC.jpg'
import img2 from './../../assets/WisamR.jpg'
import img3 from './../../assets/WisamW.jpg'
const Room = () => {
     
      const [isModalOpen, setIsModalOpen] = useState(false);  // State for modal visibility
    const [currentRoomImages, setCurrentRoomImages] = useState([]);  // State for current room images
    const [currentIndex, setCurrentIndex] = useState(0);  // Index of the current image in the slider

    // Function to open the slider modal and set images based on the room clicked
    const openSlider = (images) => {
        setCurrentRoomImages(images);  // Set the images for the selected room
        setIsModalOpen(true);  // Open the modal
        setCurrentIndex(0);  // Reset to the first image
    };

    // Function to close the modal
    const closeSlider = () => {
        setIsModalOpen(false);
    };

    // Function to go to the next image
    const nextImage = () => {
        if (currentIndex < currentRoomImages.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);  // Loop back to the first image
        }
    };

    // Function to go to the previous image
    const prevImage = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(currentRoomImages.length - 1);  // Loop back to the last image
        }
    };

  return (
      <div id = "rooms" className={`${RoomsCss.Rooms_container} section`}>
          <small className='section_heading'>
              Luxury Suites
          </small>
          <h2 className='section_title'>
              Our Best <span>
                  Rooms
              </span>
          </h2>
          <div className={RoomsCss.cards}>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front1}`}>
                          <button>Junior Suite</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back1}`}>
                          <div className={RoomsCss.price}>
                              <p>115 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Junior Suite</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>

                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line' onClick={() => openSlider([img1, img2,img3])}></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front2}`}>
                          <button>Twin Room</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back2}`}>
                          <div className={RoomsCss.price}>
                              <p>130 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Twin Room</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>
                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line'></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front3}`}>
                          <button>Quad Room</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back3}`}>
                          <div className={RoomsCss.price}>
                              <p>150 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Quad Room</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>

                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line'></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front4}`}>
                          <button>Deluxe Room</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back4}`}>
                          <div className={RoomsCss.price}>
                              <p>180 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Deluxe Room</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>

                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line'></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front5}`}>
                          <button>Executive Room</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back5}`}>
                          <div className={RoomsCss.price}>
                              <p>200 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Executive Room</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>

                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line'></i>
                          </div>
                      </div>
                  </div>
              </div>
              <div className={RoomsCss.card_Container}>
                  <div className={RoomsCss.card}>
                      <div className={`${RoomsCss.Card_front} ${RoomsCss.Card_front6}`}>
                          <button>Sweet Room</button>
                      </div>
                      <div className={`${RoomsCss.Card_Back} ${RoomsCss.Card_Back6}`}>
                          <div className={RoomsCss.price}>
                              <p>250 SAR</p>
                          </div>
                          <div className={RoomsCss.Card_Content}>
                              <h3>Sweet Room</h3>
                              <p> - Daily Cleaning</p>
                              <p> - Home Services</p>
                              <p> - House Keeping</p>
                              <p> - Wifi & Parking</p>

                          </div>
                          <div className={RoomsCss.BookNow}>
                              <button>
                                  Book Now
                              </button>
                              <i className='ri-arrow-right-line'></i>
                          </div>
                      </div>
                  </div>
              </div>
                {isModalOpen && (
                    <div className={RoomsCss.modal}>
                        <div className={RoomsCss.modalContent}>
                            <button className={RoomsCss.closeButton} onClick={closeSlider}>X</button>
                            <div className={RoomsCss.slider}>
                                {/* Previous Button */}
                                <button onClick={prevImage} className={RoomsCss.prevButton}>←</button>
                                
                                {/* Image Display with Smooth Transition */}
                                <div className={RoomsCss.imageContainer}>
                                    <img
                                        src={currentRoomImages[currentIndex]}
                                        alt={`Room Image ${currentIndex + 1}`}
                                        className={RoomsCss.sliderImage}
                                    />
                                </div>
                                
                                {/* Next Button */}
                                <button onClick={nextImage} className={RoomsCss.nextButton}>→</button>
                            </div>
                        </div>
                    </div>
                )}
          </div>
    </div>
  )
}
export default Room;