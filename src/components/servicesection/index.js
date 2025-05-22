import React from "react";
import { NavLink } from "react-router-dom";
import "./index.css";

const ServicesSection = () => {
  const mehndi_Array = [
    {
      img: "/images/madhubani_mehndi/img10.png",
      title: "Madhubani Mehndi",
      description: "Immerse yourself in the enchanting world of Madhubani Mehndi with us.",
      to: "madhubani-mehndi",
    },
    {
      img: "/images/rajasthani_mehndi/img14.jpg",
      title: "Rajasthani Mehndi",
      description: "Indulge in the timeless allure of Rajasthani Mehndi, a regal masterpiece.",
      to: "rajasthani-mehndi",
    },
    {
      img: "/images/3D/img13.png",
      title: "3D Mehndi",
      description: "Elevate your Mehndi experience with our stunning and intricate 3D designs.",
      to: "3d-mehndi",
    },
    {
      img: "/images/engagement_mehndi/img12.png",
      title: "Engagement Mehndi",
      description: "Crafting intricate Mehndi designs to add a touch of elegance to your engagement.",
      to: "engagement-mehndi",
    },
  ];

  return (
    <div className="jaipuri-services-section">
      <div className="jaipuri-services-header">
        <h2 className="jaipuri-services-title">Services</h2>
        <span className="jaipuri-title-underline"></span>
      </div>

      <div className="jaipuri-services-grid">
        {mehndi_Array.map((item, index) => (
          <div
            key={index}
            className="jaipuri-service-card"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <div className="jaipuri-image-wrapper">
              <img
                src={item.img}
                alt={item.title}
                className="jaipuri-service-image"
              />
            </div>
            <h4 className="jaipuri-service-title">{item.title}</h4>
            <p className="jaipuri-service-description">{item.description}</p>
            <NavLink to={`/services/${item.to}`}>
              <button className="jaipuri-enquire-button">Enquire Now</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
