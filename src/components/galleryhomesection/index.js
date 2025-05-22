import { NavLink } from 'react-router-dom';
import './index.css';

const GalleryHomeSection = () => {
  return (
    <div className="jaipuri-gallery-home">
      <div className="jaipuri-gallery-header">
        <h2 className="jaipuri-gallery-title">Our Work</h2>
        <span className="jaipuri-gallery-underline"></span>
      </div>

      <div className="jaipuri-gallery-body">
        <div className="jaipuri-gallery-grid">
          <img src="/images/extra/galleryImg1.png" alt="gallery_img" className="jaipuri-gallery-img" />
          <img src="/images/extra/galleryImg2.png" alt="gallery_img" className="jaipuri-gallery-img" />
          <img src="/images/extra/galleryImg3.png" alt="gallery_img" className="jaipuri-gallery-img" />
          <img src="/images/extra/galleryImg4.png" alt="gallery_img" className="jaipuri-gallery-img" />
        </div>

        <NavLink to="/gallery" className="jaipuri-gallery-button">
          View More
        </NavLink>
      </div>
    </div>
  );
};

export default GalleryHomeSection;
