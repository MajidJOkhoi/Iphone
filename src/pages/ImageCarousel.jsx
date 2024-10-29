import React from "react";
import v1 from '../assets/v1.png'
import v2 from '../assets/v2.png'
import v3 from '../assets/v3.png'
import v4 from '../assets/v4.png'

const images = [
  v1,
  v2,
  v3,
  v4, 
  v1,
  v2,
  v3,
  v4,
  v1,
  v2,
  v3,
  v4, 
  v1,
  v2,
  v3,
  v4,
  
];

const ImageCarousel = () => {
  return (
    <div className="relative w-full max-w-screen-2xl mx-auto overflow-hidden">
      <div className="w-full h-[200px] overflow-hidden rounded-lg">
        <div
          className="flex animate-scroll gap-4"
          style={{ width: `${images.length * 200 * 4}px` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[100px] h-[100px] rounded-lg"
            >
              <img
                src={image}
                alt={`carousel-image-${index}`}
                className="w-full h-full  rounded-lg"
              />
            </div>
          ))}
          {images.map((image, index) => (
            <div
              key={`duplicate-${index}`}
              className="flex-shrink-0 w-[80px] h-[80px] rounded-lg"
            >
              <img
                src={image}
                alt={`carousel-image-duplicate-${index}`}
                className="w-full h-full  rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
