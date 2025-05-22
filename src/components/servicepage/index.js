import React from "react";
import { useParams } from "react-router-dom";
import "./index.css";

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
      images: ["/images/3D/img4.png", "/images/3D/img9.png", "/images/3D/img13.png", "/images/3D/img20.jpg"],
    },
    {
      name: "brindal-mehndi",
      description: `Indulge in the rich and vibrant tradition...`,
      images: ["/images/bridal_mehndi/img37.jpg", "/images/bridal_mehndi/img38.jpg", "/images/bridal_mehndi/img39.jpg", "/images/bridal_mehndi/img40.jpg", "/images/bridal_mehndi/img41.jpg", "/images/bridal_mehndi/img42.jpg"],
    },
    {
      name: "madhubani-mehndi",
      description: `Introducing our exquisite Madhubani Mehndi services...`,
      images: ["/images/madhubani_mehndi/img1.jpg", "/images/madhubani_mehndi/img2.png", "/images/madhubani_mehndi/img6.jpg", "/images/madhubani_mehndi/img7.jpg", "/images/madhubani_mehndi/img8.png", "/images/madhubani_mehndi/img10.png", "/images/madhubani_mehndi/img15.png", "/images/madhubani_mehndi/img16.png", "/images/madhubani_mehndi/img17.png", "/images/madhubani_mehndi/img18.png", "/images/madhubani_mehndi/img19.png"],
    },
    {
      name: "engagement-mehndi",
      description: `Celebrate the joy of love with our exquisite Engagement Mehndi services...`,
      images: ["/images/engagement_mehndi/img12.png", "/images/engagement_mehndi/img21.jpg", "/images/engagement_mehndi/img22.jpg", "/images/engagement_mehndi/img23.jpg", "/images/engagement_mehndi/img24.jpg", "/images/engagement_mehndi/img25.jpg", "/images/engagement_mehndi/img26.jpg", "/images/engagement_mehndi/img27.jpg", "/images/engagement_mehndi/img28.jpg", "/images/engagement_mehndi/img29.jpg"],
    },
    {
      name: "festival-mehndi",
      description: `Celebrate the artistry of henna in a vibrant burst of colors...`,
      images: ["/images/festival_mehndi/img34.jpg", "/images/festival_mehndi/img35.jpg", "/images/festival_mehndi/img36.jpg"],
    },
    {
      name: "rajasthani-mehndi",
      description: `Transform your bridal journey into a canvas of exquisite artistry...`,
      images: ["/images/rajasthani_mehndi/img11.png", "/images/rajasthani_mehndi/img14.jpg", "/images/rajasthani_mehndi/img30.jpg", "/images/rajasthani_mehndi/img31.jpg", "/images/rajasthani_mehndi/img32.jpg", "/images/rajasthani_mehndi/img33.jpg"],
    },
  ];

  return (
    <div className="jaipuri-services-page">
      <div className="jaipuri-services-container">
        <div className="jaipuri-title-block">
          <h2 className="jaipuri-page-title">{title}</h2>
          <div className="jaipuri-title-underline"></div>
        </div>

        {services
          .filter((service) => service.name === name)
          .map((service, index) => (
            <div key={index} className="jaipuri-service-content">
              <div className="jaipuri-description-block">
                <p className="jaipuri-service-description">{service.description}</p>
                <p className="jaipuri-contact-info">
                  For bookings and inquiries, call <span className="jaipuri-highlight">+91 9701262773</span> or email{" "}
                  <span className="jaipuri-highlight">d78454154@gmail.com</span>.
                </p>
              </div>

              <div className="jaipuri-main-image-block">
                <img src={service.images[0]} alt="Main preview" className="jaipuri-main-image" />
              </div>

              <div className="jaipuri-related-block">
                <h4 className="jaipuri-related-title">Related Images</h4>
                <div className="jaipuri-title-underline"></div>
              </div>

              <div className="jaipuri-related-images">
                {service.images.map((img, i) => (
                  <img key={i} src={img} alt={`mehndi ${i}`} className="jaipuri-related-image" />
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ServicesPage;
