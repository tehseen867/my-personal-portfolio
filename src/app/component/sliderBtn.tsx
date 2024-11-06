"use client";
import React from 'react';
import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";
const SliderBtn: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-4 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none">
      {/* Button for sliding to the previous slide */}
      <button
        aria-label="Previous Slide"
        className="bg-blue-600 hover:bg-blue-700 text-white text-[22px] w-[40px] rounded-full h-[40px] flex justify-center items-center transition-all"
        onClick={() => swiper.slidePrev()}
      >
        <PiCaretLeftBold />
      </button>
      
      {/* Button for sliding to the next slide */}
      <button
        aria-label="Next Slide"
        className="bg-blue-600 hover:bg-blue-700 text-white text-[22px] w-[40px] rounded-full h-[40px] flex justify-center items-center transition-all"
        onClick={() => swiper.slideNext()}
      >
        <PiCaretRightBold />
      </button>
    </div>
  );
}

export default SliderBtn

