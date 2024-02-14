import React from 'react';
import { Carousel } from "@material-tailwind/react";
import '../../App.css';

const HeroSection = () => {
  return (
    <>
      <div className="containers">
      <Carousel transition={{ duration: 1 }} className="rounded-xl">
      <img
        src="https://nobero.com/cdn/shop/files/64.webp?v=1704519685&width=1066"
        alt="image 1"
        className="h-full w-full object-cover"
      />
      <img
        src="https://nobero.com/cdn/shop/files/Homepage_Banner_28.webp?v=1704519685&width=1066"
        className="h-full w-full object-cover"
      />
      <img
        src="https://zlaatafashion.com/cdn/shop/files/banner_heavy_red_tint_with_blur.png?v=1707451800&width=1600"
        alt="image 3"
        className="h-full w-full object-cover"
      />
      <img
        src="https://zlaatafashion.com/cdn/shop/files/banner.png?v=1707451762&width=1600"
        alt="image 4"
        className="h-full w-full object-cover"
      />
    </Carousel>
      </div>
    </>
  );
};

export default HeroSection;
