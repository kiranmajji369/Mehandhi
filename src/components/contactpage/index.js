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
    <div className="contact-container">
      <div className="section-header">
        <h2>Contact us</h2>
        <span></span>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=..."
        className="w-full mx-auto"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      />

      <div>
        <div className="container">
          <div className="form-wrapper">
            <h2 className="text-2xl font-bold text-center">
              Jaipuri Mehandi Arts Vizag
            </h2>

            <form onSubmit={handleSendMessage}>
              <div className="form-group">
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
                <button type="submit" className="send-btn">
                  Send Message
                </button>
              </div>
            </form>

            <p className="contact-info">
              <b>Address:</b> Jagdamba Center, Visakhapatnam - 530002
            </p>
            <p className="contact-info">
              <b>Phone:</b> +91 9701262773
            </p>
            <p className="contact-info">
              <b>Email:</b> d78454154@gmail.com
            </p>
          </div>

          <div className="social-icons">
            <NavLink to="">
              <div className="icon-wrapper icon-facebook">
                <TiSocialFacebook className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="">
              <div className="icon-wrapper icon-instagram">
                <TiSocialInstagram className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="">
              <div className="icon-wrapper icon-youtube">
                <TiSocialYoutube className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="">
              <div className="icon-wrapper icon-linkedin">
                <TiSocialLinkedin className="text-2xl" />
              </div>
            </NavLink>

            <NavLink to="">
              <div className="icon-wrapper icon-twitter">
                <TiSocialTwitter className="text-2xl" />
              </div>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
