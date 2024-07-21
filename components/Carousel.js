import { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-80 overflow-hidden rounded-lg">
      {images.map((imgSrc, index) => (
        <img
          key={index}
          src={imgSrc}
          alt={`Slide ${index}`}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      {/* <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-4xl font-bold text-black flip-words">Find Your Perfect Pairs</h1>
      </div> */}
      <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-zinc-600 animate-bounce text-center ">Discover Your Perfect Pair!</h1>
          
        </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`block w-3 h-3 bg-white rounded-full ${index === currentIndex ? 'bg-opacity-100' : 'bg-opacity-50'}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
