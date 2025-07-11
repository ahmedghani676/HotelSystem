import React, { useRef } from "react";
import { Link } from "react-scroll"; // Import Link from react-scroll
import navCss from "./../Nav/Nav.module.css";

const Nav = () => {
  const menu = useRef();

  // Toggle the menu visibility
  const menuHandler = () => {
    menu.current.classList.toggle(navCss.showNav); // Toggle the class
  };

  // Close the menu after clicking a link
  const closeMenu = () => {
    menu.current.classList.remove(navCss.showNav); // Remove the class when a link is clicked
  };

  return (
    <div className={navCss.nav_wrapper}>
      <div className={navCss.logo}>
        <a href="#">
          <span>Wisam</span> ALAMI
          <span>Category 1</span>
          <span style="color: gold;">⭐</span>
        </a>
      </div>

      {/* Use Link component for scroll functionality */}
      <ul ref={menu} className={navCss.navList}>
        {" "}
        {/* Add navList class to style */}
        <li>
          <Link to="home" smooth={true} duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500} onClick={closeMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="service" smooth={true} duration={500} onClick={closeMenu}>
            Services
          </Link>
        </li>
        <li>
          <Link to="amenities" smooth={true} duration={500} onClick={closeMenu}>
            Amenities
          </Link>
        </li>
        <li>
          <Link
            to="testimonials"
            smooth={true}
            duration={500}
            onClick={closeMenu}
          >
            Testimonials
          </Link>
        </li>
        <li>
          <Link to="contacts" smooth={true} duration={500} onClick={closeMenu}>
            Contact Us
          </Link>
        </li>
      </ul>

      <div className={navCss.Nav_btns}>
        <Link to="rooms" smooth={true} duration={500} onClick={closeMenu}>
          <button className={navCss.btn}>Book Now</button>
        </Link>
        <i className="ri-menu-4-line" onClick={menuHandler}></i>
      </div>
    </div>
  );
};

export default Nav;
