// components/GettingProcessData.js

"use client";
import React, { useEffect, useState } from 'react';
import client from '@/sanity/lib/client';
import { motion } from "framer-motion";
const GettingProcessData = () => {
  type ProcessDataType = {
    subHeading: string;
    heading: string;
    paragraph: string;
  }
  
  const [processData, setProcessData] = useState<ProcessDataType | null>(null);
  const [error, setError] = useState<string | null>(null); // Error state

  useEffect(() => {
    const fetchProcessData = async () => {
      try {
        const query = `*[_type=="processSection"]{
          subHeading,
          heading,
          paragraph
        }`;
        const res: ProcessDataType[] = await client.fetch(query);
        const latest = res.pop();
        setProcessData(latest || null);
      } catch (error) {
        console.error('Error fetching process data:', error);
        setError('Failed to load process data.'); // Set error message
      } 
    };
    
    fetchProcessData();
  }, []);
  
  

  if (error) {
    return <p className='text-red-500'>{error}</p>; // Error message
  }

  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1, transition: { delay: 0.8, duration: 0.4, ease: "easeIn" } }} 
    >
      <div className='mt-28 flex justify-center mx-auto'>
        <div className='text-center'>
          <p className='uppercase font-sans text-stone-300 text-sm md:mb-4 mb-2'>{processData?.subHeading}</p>
          <div className='flex justify-center'>
            <p className='text-blue-700 md:text-[110px] sm:text-[80px] text-[55px] tracking-wide font-sans font-light leading-none text-center md:mb-8 mb-4 max-w-[650px]'>
              {processData?.heading}
            </p>
          </div>
          <div className='flex justify-center'>
            <p className='text-white font-sans sm:text-xl text-[16px] font-extralight tracking-wider max-w-[550px]'>
              {processData?.paragraph}
            </p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}


export default GettingProcessData