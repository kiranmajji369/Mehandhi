import React from "react";
import "./index.css";
// import logo from "../images/logo.png";
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import { TiSocialFacebook, TiSocialInstagram, TiSocialYoutube, TiSocialLinkedin, TiSocialTwitter } from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <img  src="/images/logo.png" alt="logo" className="footer-logo-img" />
          </div>

          <div className="footer-contact">
            <div className="footer-heading">
              <h2>Contact us</h2>
              <span className="footer-underline"></span>
            </div>

            <div className="footer-details">
              <div className="footer-item">
                <IoIosPhonePortrait className="footer-icon" />
                <p>+91 9701262773</p>
              </div>
              <div className="footer-item">
                <CiLocationOn className="footer-icon" />
                <p>Jagdamba Center, Visakhapatnam - 530002, Andhra Pradesh, India</p>
              </div>
              <div className="footer-item">
                <IoMail className="footer-icon" />
                <p>d78454154@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-note">
          <p>Providing On Location Mehandi Services in out of vizag</p>
        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">
            © 2025 Neeraj Mehandhi Arts. All Rights Reserved | Website design by
            <NavLink to="https://www.srtechcreators.com/" className="footer-link"> SR-Tech Creators</NavLink>
          </p>
          <div className="footer-social">
            <NavLink to=""><TiSocialFacebook className="footer-social-icon facebook" /></NavLink>
            <NavLink to=""><TiSocialInstagram className="footer-social-icon instagram" /></NavLink>
            <NavLink to=""><TiSocialYoutube className="footer-social-icon youtube" /></NavLink>
            <NavLink to=""><TiSocialLinkedin className="footer-social-icon linkedin" /></NavLink>
            <NavLink to=""><TiSocialTwitter className="footer-social-icon twitter" /></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;