import { useState } from "react";
import {
  TiSocialFacebook,
  TiSocialInstagram,
  TiSocialYoutube,
  TiSocialLinkedin,
  TiSocialTwitter,
} from "react-icons/ti";
import { NavLink } from "react-router-dom";
import "./index.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNo: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const { name, email, phoneNo, message } = formData;
    const text = `Name: ${name}%0AEmail: ${email}%0APhone Number: ${phoneNo}%0AMessage: ${message}`;
    const phoneNumber = "9701262773";
    const url = `https://wa.me/${phoneNumber}?text=${text}`;
    window.open(url, "_blank");
  };

  return (
    <div className="nm-contact-container">
      <div className="nm-contact-header">
        <h2>Contact Us</h2>
        <span className="nm-contact-underline"></span>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        className="nm-contact-map"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>

      <div className="nm-contact-wrapper">
        <div className="nm-contact-form-box">
          <h2 className="nm-contact-title">Jaipuri Mehandi Arts Vizag</h2>
          <form onSubmit={handleSendMessage}>
            <div className="nm-contact-form">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                placeholder="Enter your mobile number"
                name="phoneNo"
                value={formData.phoneNo}
                onChange={handleChange}
                required
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <button type="submit" className="nm-contact-button">
                Send Message
              </button>
            </div>
          </form>
          <div className="nm-contact-details">
            <p><b>Address:</b> Jagdamba Center, Visakhapatnam - 530002</p>
            <p><b>Phone:</b> +91 9701262773</p>
            <p><b>Email:</b> d78454154@gmail.com</p>
          </div>
        </div>

        <div className="nm-contact-socials">
          <NavLink to=""><TiSocialFacebook className="nm-icon facebook" /></NavLink>
          <NavLink to=""><TiSocialInstagram className="nm-icon instagram" /></NavLink>
          <NavLink to=""><TiSocialYoutube className="nm-icon youtube" /></NavLink>
          <NavLink to=""><TiSocialLinkedin className="nm-icon linkedin" /></NavLink>
          <NavLink to=""><TiSocialTwitter className="nm-icon twitter" /></NavLink>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
