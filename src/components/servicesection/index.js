import React from "react";
// import madhubaniMehndi from "../images/madhubani_mehndi/img10.png";
// import mehndi_3D from "../images/3D/img13.png";
// import rajasthaniMehndi from "../images/rajasthani_mehndi/img14.jpg";
// import engagementMehndi from "../images/engagement_mehndi/img12.png";
import { NavLink } from "react-router-dom";
import "./index.css"; // ✅ Import CSS

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
    <div className="services-section">
      <div className="services-title-container">
        <h2 className="services-title">Services</h2>
        <span className="services-title-underline"></span>
      </div>

      <div className="services-list">
        {mehndi_Array.map((item, index) => (
          <div
            key={index}
            className="service-card"
            style={{
              animationDelay: `${index * 0.1}s`,
              animationFillMode: "both",
            }}
          >
            <div className="service-image-container">
              <img
                src={item.img}
                alt={item.title}
                className="service-image"
              />
            </div>
            <h4 className="service-title">{item.title}</h4>
            <p className="service-description">{item.description}</p>
            <NavLink to={`/services/${item.to}`}>
              <button className="enquire-button">Enquire Now</button>
            </NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;
