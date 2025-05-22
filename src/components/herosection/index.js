import React from "react";
import "./index.css";

const HeroSection = () => {
  return (
    <section className="jaipuri-hero-section">
      <div className="jaipuri-hero-background"></div>

      <div className="jaipuri-hero-container">
        <div className="jaipuri-hero-image-wrapper">
          <img
            src="/images/pngtree-mehndi-ceremony-indian-wedding-mehendi-bride-png-image_15367949__1_-removebg-preview.png"
            alt="Mehndi Design"
            className="jaipuri-hero-image"
          />
        </div>

        <div className="jaipuri-hero-text">
          <h1 className="jaipuri-hero-heading">Hi, We're Jaipuri Mehndi Arts</h1>
          <p className="jaipuri-hero-subtext">
            A passionate Mehndi Artist blending tradition with creativity. Whether it's a wedding or a celebration, my designs speak elegance and emotion.
          </p>
          <button className="jaipuri-hero-button">View My Designs</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
