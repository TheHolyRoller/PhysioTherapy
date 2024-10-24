'use client'; 
// Import React and OwlCarousel
import React from 'react';
import OwlCarousel from 'react-owl-carousel';

const CarouselComponent = () => {



    const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

    

  const options = {
    loop: true,
    margin: 10,
    nav: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme" {...options}>
      <div className="item">
        <h4>Item 1</h4>
      </div>
      <div className="item">
        <h4>Item 2</h4>
      </div>
      <div className="item">
        <h4>Item 3</h4>
      </div>
      <div className="item">
        <h4>Item 4</h4>
      </div>
      <div className="item">
        <h4>Item 5</h4>
      </div>
      {/* Add more items as needed */}
    </OwlCarousel>
  );
};

export default CarouselComponent;
