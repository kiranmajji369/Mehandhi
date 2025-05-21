import { NavLink } from 'react-router-dom';
import './index.css';
const GalleryHomeSection = () => {
  return (
    <div className="gallery-home-section">
      <div className="gallery-heading-wrapper">
        <h2 className="gallery-heading">Our work</h2>
        <span className="gallery-underline"></span>
      </div>

      <div className="gallery-images-section">
        <div className="gallery-images-grid">
          <img src="/images/extra/galleryImg1.png" alt="gallery_img" className="gallery-img" />
          <img src="/images/extra/galleryImg2.png" alt="gallery_img" className="gallery-img" />
          <img src="/images/extra/galleryImg3.png" alt="gallery_img" className="gallery-img" />
          <img src="/images/extra/galleryImg4.png" alt="gallery_img" className="gallery-img" />
        </div>

        <NavLink to="/gallery" className="gallery-button">
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default GalleryHomeSection;
