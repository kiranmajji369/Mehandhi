import React from "react";
import About from "../aboutpage";
import GalleryHomeSection from "../galleryhomesection";
import HeroSection from "../herosection";
import ServicesSection from "../servicesection";
import "./index.css"; // Updated CSS filename
import ContactUs from "../contactpage";

const HomePage = () => {
  return (
    <div className="jaipuri-homepage-wrapper">
      <section className="jaipuri-hero-section">
        <HeroSection />
      </section>

      <section className="jaipuri-services-section">
        <ServicesSection />
      </section>

      <section className="jaipuri-about-section">
        <About />
      </section>

      <section className="jaipuri-gallery-section">
        <GalleryHomeSection />
      </section>

      {/* <section className="jaipuri-contact-section">
        <ContactUs />
      </section> */}
    </div>
  );
};

export default HomePage;
