import React from "react";
import "./index.css";  // changed filename for clarity
import { IoIosPhonePortrait } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { IoMail } from "react-icons/io5";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="nmf-footer">
      <div className="nmf-container">
        <div className="nmf-top">
          <div className="nmf-logo">
            <img src="/images/logo.png" alt="logo" className="nmf-logo-img" />
          </div>

          <div className="nmf-contact">
            <div className="nmf-heading">
              <h2>Contact us</h2>
              <span className="nmf-underline"></span>
            </div>

            <div className="nmf-details">
              <div className="nmf-item">
                <IoIosPhonePortrait className="nmf-icon" />
                <p>+91 9701262773</p>
              </div>
              <div className="nmf-item">
                <CiLocationOn className="nmf-icon" />
                <p>Jagdamba Center, Visakhapatnam - 530002, Andhra Pradesh, India</p>
              </div>
              <div className="nmf-item">
                <IoMail className="nmf-icon" />
                <p>d78454154@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="nmf-note">
          <p>Providing On Location Mehandi Services in out of vizag</p>
        </div>

        <hr className="nmf-divider" />

        <div className="nmf-bottom">
          <p className="nmf-copy">
            © 2025 Neeraj Mehandhi Arts. All Rights Reserved | Website design by
            <NavLink to="https://www.srtechcreators.com/" className="nmf-link">
              {" "}
              SR-Tech Creators
            </NavLink>
          </p>
          <div className="nmf-social">
            <NavLink to="">
              <TiSocialFacebook className="nmf-social-icon facebook" />
            </NavLink>
            <NavLink to="">
              <TiSocialInstagram className="nmf-social-icon instagram" />
            </NavLink>
            <NavLink to="">
              <TiSocialYoutube className="nmf-social-icon youtube" />
            </NavLink>
            <NavLink to="">
              <TiSocialLinkedin className="nmf-social-icon linkedin" />
            </NavLink>
            <NavLink to="">
              <TiSocialTwitter className="nmf-social-icon twitter" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
