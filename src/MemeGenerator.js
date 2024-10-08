// src/MemeGenerator.js

import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';

function MemeGenerator({ imageUrl, topText, bottomText, setDownloadImage }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 500,
      height: 500,
    });

    // Load the image with crossOrigin set
    fabric.Image.fromURL(
      imageUrl,
      (img) => {
        img.scaleToWidth(canvas.width);
        img.scaleToHeight(canvas.height);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));

        // Add top text
        const topTextObj = new fabric.Text(topText.toUpperCase(), {
          top: 20,
          left: canvas.width / 2,
          fontSize: 40,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
          textAlign: 'center',
          originX: 'center',
          fontFamily: 'Impact, Arial Black, sans-serif',
        });
        canvas.add(topTextObj);

        // Add bottom text
        const bottomTextObj = new fabric.Text(bottomText.toUpperCase(), {
          top: canvas.height - 60,
          left: canvas.width / 2,
          fontSize: 40,
          fill: 'white',
          stroke: 'black',
          strokeWidth: 2,
          textAlign: 'center',
          originX: 'center',
          fontFamily: 'Impact, Arial Black, sans-serif',
        });
        canvas.add(bottomTextObj);
      },
      { crossOrigin: 'Anonymous' }
    );

    // Define the downloadImage function
    const downloadImage = () => {
      const canvasElement = canvasRef.current;
      const dataURL = canvasElement.toDataURL('image/png', 0.8);
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = 'meme.png';
      link.click();
    };

    // Expose downloadImage to parent component
    if (setDownloadImage) {
      setDownloadImage(() => downloadImage);
    }

    // Cleanup on unmount
    return () => {
      canvas.dispose();
      if (setDownloadImage) {
        setDownloadImage(null);
      }
    };
  }, [imageUrl, topText, bottomText, setDownloadImage]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default MemeGenerator;
