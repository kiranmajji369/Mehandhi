import React from "react";
import { useParams } from "react-router-dom";
import "./index.css"; 

// All image imports remain unchanged
// (You can keep them as is based on your current structure)

const ServicesPage = () => {
    const { name } = useParams();
    const title = name
        ? name
            .split("-")
            .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
            .join(" ")
        : "Service";

  const services = [
    {
      name: "3d-mehndi",
      description: `Introducing our enchanting 3D Mehndi service...`,
      images:["public/images/3D/img4.png","public/images/3D/img9.png","public/images/3D/img13.png","public/images/3D/img20.jpg"],
    },
    {
      name: "brindal-mehndi",
      description: `Indulge in the rich and vibrant tradition...`,
      images:["public/images/bridal_mehndi/img37.jpg","public/images/bridal_mehndi/img38.jpg","public/images/bridal_mehndi/img39.jpg","public/images/bridal_mehndi/img40.jpg","public/images/bridal_mehndi/img41.jpg","public/images/bridal_mehndi/img42.jpg"],
    },
    {
      name: "madhubani-mehndi",
      description: `Introducing our exquisite Madhubani Mehndi services...`,
      images:["public/images/madhubani_mehndi/img1.jpg","public/images/madhubani_mehndi/img2.png","public/images/madhubani_mehndi/img6.jpg","public/images/madhubani_mehndi/img7.jpg","public/images/madhubani_mehndi/img8.png","public/images/madhubani_mehndi/img10.png","public/images/madhubani_mehndi/img15.png","public/images/madhubani_mehndi/img16.png","public/images/madhubani_mehndi/img17.png","public/images/madhubani_mehndi/img18.png","public/images/madhubani_mehndi/img19.png"],
    },
    {
      name: "engagement-mehndi",
      description: `Celebrate the joy of love with our exquisite Engagement Mehndi services...`,
      images:["public/images/engagement_mehndi/img12.png","public/images/engagement_mehndi/img21.jpg","public/images/engagement_mehndi/img22.jpg","public/images/engagement_mehndi/img23.jpg","public/images/engagement_mehndi/img24.jpg","public/images/engagement_mehndi/img25.jpg","public/images/engagement_mehndi/img26.jpg","public/images/engagement_mehndi/img27.jpg","public/images/engagement_mehndi/img28.jpg","public/images/engagement_mehndi/img29.jpg"],
    },
    {
      name: "festival-mehndi",
      description: `Celebrate the artistry of henna in a vibrant burst of colors...`,
      images: ["public/images/festival_mehndi/img34.jpg","public/images/festival_mehndi/img35.jpg","public/images/festival_mehndi/img36.jpg"],
    },
    {
      name: "rajasthani-mehndi",
      description: `Transform your bridal journey into a canvas of exquisite artistry...`,
      images: ["public/images/rajasthani_mehndi/img11.png","public/images/rajasthani_mehndi/img14.jpg","public/images/rajasthani_mehndi/img30.jpg","public/images/rajasthani_mehndi/img31.jpg","public/images/rajasthani_mehndi/img32.jpg","public/images/rajasthani_mehndi/img33.jpg"],
    },
  ];

  return (
    <div className="services-page">
      <div className="container">
        <div className="title-container">
          <h2 className="page-title">{title}</h2>
          <span className="title-underline"></span>
        </div>

        {services
          .filter((service) => service.name === name)
          .map((service, index) => (
            <div key={index} className="service-content">
              <div className="description-section">
                <p className="service-description">{service.description}</p>
                <p className="contact-info">
                  For bookings and inquiries, reach out to us at{" "}
                  <span className="highlight">+91 9701262773</span> or email{" "}
                  <span className="highlight">d78454154@gmail.com</span>.
                </p>
              </div>
              <div className="image-preview">
                <img src={service.images[0]} alt="banner" className="main-image" />
              </div>

              <div className="related-container">
                <h4 className="related-title">Related Images</h4>
                <span className="title-underline"></span>
              </div>

              <div className="related-images">
                {service.images.map((image, idx) => (
                  <img
                    key={idx}
                    src={image}
                    alt="related mehndi"
                    className="related-image"
                  />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesPage;
