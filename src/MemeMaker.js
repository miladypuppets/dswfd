// src/MemeMaker.js

import React, { useState } from 'react';
import MemeGenerator from './MemeGenerator';
import { getImageUrlFromTokenNumber } from './utils/imageUrl';
import './index.css';

function MemeMaker() {
  const [tokenNumber, setTokenNumber] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [error, setError] = useState('');
  const [downloadImage, setDownloadImage] = useState(null);

  const handleGenerate = () => {
    if (!Number.isInteger(Number(tokenNumber)) || Number(tokenNumber) <= 0) {
      setError('Please enter a valid token number.');
      return;
    }

    setError('');
    try {
      const generatedImageUrl = getImageUrlFromTokenNumber(tokenNumber);
      setImageUrl(generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError('Failed to construct image URL. Please check the token number.');
    }
  };

  return (
    <div className="meme-maker-container">
      <div className="input-container">
        <input
          type="text"
          placeholder="Token Number"
          value={tokenNumber}
          onChange={(e) => setTokenNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Top Text"
          value={topText}
          onChange={(e) => setTopText(e.target.value)}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          value={bottomText}
          onChange={(e) => setBottomText(e.target.value)}
        />
        <div className="button-container">
          <button onClick={handleGenerate}>generate</button>
          {downloadImage && (
            <button onClick={downloadImage}>download</button>
          )}
        </div>
      </div>
      {error && <p className="error">{error}</p>}
      <MemeGenerator
        imageUrl={imageUrl}
        topText={topText}
        bottomText={bottomText}
        setDownloadImage={setDownloadImage}
      />
    </div>
  );
}

export default MemeMaker;
