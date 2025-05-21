import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./index.css"; // Importing the CSS file

const About = () => {
  const location = useLocation();

  useEffect(() => {
    const aboutSection = document.getElementById("aboutSection");
    if (location.hash === "#aboutSection") {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div className="about-section" id="aboutSection">
      <div className="about-container">
        <div className="about-image-wrapper">
          <img
            src="/images/extra/aboutImage.png"
            alt="about image of mehndi design"
            className="about-img"
          />
        </div>
        <div className="about-content">
          <div className="about-title-wrapper">
            <h2 className="about-title">About us</h2>
            <span className="about-underline"></span>
          </div>
          <p className="about-text">
            Hi, we're Jaipuri Mehandi Arts — a passionate Mehndi Artist with a love for tradition and creativity.
            I specialize in intricate designs that bring out the beauty of every occasion.
            From classic patterns to modern styles, I create art that tells a story.
            <br /><br />
            Whether it’s a wedding, engagement, or festive celebration, I’m here to make it special.
            Each stroke is carefully crafted to reflect elegance and emotion.
            My goal is to turn your moments into lasting memories with beautiful Mehndi.
            <br /><br />
            From bridal designs to family arrangements and cultural functions, I cover it all.
            My art blends personal touches with timeless tradition.
            Let’s celebrate your big day with stunning Mehndi that speaks from the heart.
            Every design I create is more than just art — it’s a celebration of culture and joy.
            I use high-quality Mehndi for rich color and long-lasting impressions.
            Clients trust me for my patience, precision, and passion in every detail.
            Let me bring beauty to your hands and happiness to your heart.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
