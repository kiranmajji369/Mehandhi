import React from "react";
import About from "../aboutpage";
import GalleryHomeSection from "../galleryhomesection";
import HeroSection from "../herosection";
import ServicesSection from "../servicesection";
import "./index.css"; // Import the new CSS

const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <section className="hero-section">
        <HeroSection />
      </section>

      <section className="services-section">
        <ServicesSection />
      </section>

      <section className="about-section">
        <About />
      </section>

      <section className="gallery-section">
        <GalleryHomeSection />
      </section>
    </div>
  );
};

export default HomePage;
