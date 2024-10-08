// src/Gallery.js

import React from 'react';
import memes from './memes';
import './Gallery.css';

function Gallery() {
  return (
    <div className="gallery-container">
      {memes.length === 0 ? (
        <p>No memes available.</p>
      ) : (
        <div className="gallery-grid">
          {memes.map((meme, index) => (
            <div key={index} className="gallery-item">
              <img
                src={meme.src}
                alt={`Meme ${meme.filename}`}
                className="gallery-image"
                loading="lazy" // Improves performance by lazy loading images
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Gallery;
