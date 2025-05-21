import React from "react";
import "./index.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      {/* Blurred background image */}
      <div className="hero-background"></div>

      {/* Content and Image Layout */}
      <div className="hero-container">
        {/* Left Side - Image */}
        <div className="hero-image-wrapper">
          <img
            src="/images/pngtree-mehndi-ceremony-indian-wedding-mehendi-bride-png-image_15367949__1_-removebg-preview.png"
            alt="Mehndi Design"
            className="hero-image"
          />
        </div>

        {/* Right Side - Text */}
        <div className="hero-text">
          <h1 className="hero-heading">Hi, We're Jaipuri Mehndi Arts</h1>
          <p className="hero-subtext">
            A passionate Mehndi Artist blending tradition with creativity. Whether it's a wedding or a celebration, my designs speak elegance and emotion.
          </p>
          <button className="hero-button">View My Designs</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
