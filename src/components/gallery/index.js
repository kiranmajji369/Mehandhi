import React from 'react';
import './index.css';

const images = [
  { id: 1, src: "/images/extra/galleryImg1.png" },
  { id: 2, src: "/images/extra/galleryImg2.png" },
  { id: 3, src: "/images/extra/galleryImg3.png" },
  { id: 4, src: "/images/extra/galleryImg4.png" },
  { id: 5, src: "/images/extra/galleryImg5.png" },
  { id: 6, src: "/images/extra/galleryImg6.png" },
  { id: 7, src: "/images/extra/galleryImg7.png" },
  { id: 8, src: "/images/extra/galleryImg8.png" },
  { id: 9, src: "/images/extra/galleryImg9.png" },
  { id: 10, src: "/images/extra/galleryImg10.png" },
  { id: 11, src: "/images/extra/galleryImg11.png" },
  { id: 12, src: "/images/extra/galleryImg12.png" },
  { id: 13, src: "/images/extra/galleryImg13.png" },
  { id: 14, src: "/images/extra/galleryImg14.png" },
  { id: 15, src: "/images/extra/galleryImg15.png" },
  { id: 16, src: "/images/extra/galleryImg16.png" },
  { id: 17, src: "/images/extra/galleryImg17.png" },
  { id: 18, src: "/images/extra/galleryImg18.png" },
  { id: 19, src: "/images/extra/galleryImg19.png" },
  { id: 20, src: "/images/extra/galleryImg20.png" },
];

const Gallery = () => {
  return (
    <div className="jaipuri-gallery-wrapper">
      <div className="jaipuri-gallery-container">
        <div className="jaipuri-gallery-heading">
          <h2 className="jaipuri-gallery-title">Gallery</h2>
          <span className="jaipuri-heading-underline"></span>
        </div>

        <div className="jaipuri-gallery-grid">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={`mehndi design ${index + 1}`}
              className="jaipuri-gallery-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
