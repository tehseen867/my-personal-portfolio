"use client";
import React from "react";
import dynamic from "next/dynamic";
const GettingHeroData=dynamic(()=>import("@/app/gettingData/gettingHeroSection/gettingHeroData"),{ssr:false})
const GettingHeroImage=dynamic(()=>import("@/app/gettingData/gettingHeroSection/gettingHeroImage"),{ssr:false})
const HeroSection = () => {
  return (
    <section className="h-auto md:pt-24 pt-12 md:px-20 px-10">
      <div className='container mx-auto h-full'>
        <div className='flex flex-col xl:flex-row items-center justify-between'>
          <GettingHeroData />
          <div className="order-1 xl:order-none mb-2  xl:mb-0">
            <GettingHeroImage />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection
